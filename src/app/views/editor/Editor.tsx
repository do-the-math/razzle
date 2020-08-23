import { Image, Stage } from 'react-konva';
import React, { useEffect, useRef, useState } from 'react';
import { getBluredImage, getNormalImage } from './shared';

import { Button } from '@material-ui/core';
import Konva from 'konva';
import { Image as TImage } from 'konva/types/shapes/Image';
import imageList from './mock/images';
import useImage from 'use-image';

const Editor = () => {
  const dragUrl: any = React.useRef();
  const stageRef: any = React.useRef();
  const mainRef = useRef<any>();
  const menuRef = useRef<any>();
  let currentNode: Konva.Node;

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const resizeListener = () => {
      if (mainRef.current) {
        setDimensions({
          width: mainRef.current.offsetWidth,
          height: mainRef.current.offsetHeight
        });
      }
    };
    resizeListener();
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  const dropImageOnCanvas = async (e: any) => {
    stageRef.current.setPointersPositions(e);

    let stage: Konva.Stage = stageRef.current;
    var layer = new Konva.Layer();

    // add first image layer
    if (stage.getLayers().length === 0) {
      stage.add(layer);
      const bluredImage: TImage = await getBluredImage({
        dragUrl,
        layer,
        mainRef
      });
      const newImage: TImage = await getNormalImage({
        dragUrl,
        layer,
        mainRef
      });

      layer.add(bluredImage);
      layer.add(newImage);
      layer.draw();
    } else {
      stage.add(layer);
      const newImage: TImage = await getNormalImage({
        dragUrl,
        layer,
        mainRef
      });

      layer.add(newImage);
      layer.draw();
    }
  };

  const onImageDrop = (e: any) => {
    e.preventDefault();
    dropImageOnCanvas(e);
  };

  const onContextMenu = (e: any) => {
    e.evt.preventDefault();
    let stage: any = stageRef.current;

    if (e.target === stage) {
      // if we are on empty place of the stage we will do nothing
      return;
    }
    currentNode = e.target;
    // show menu
    let menuNode = menuRef.current;
    menuNode.style.display = 'initial';

    var containerRect = stage.container().getBoundingClientRect();

    menuNode.style.top =
      containerRect.top + stage.getPointerPosition().y / 2 + 'px';

    menuNode.style.left =
      containerRect.left + stage.getPointerPosition().x / 2 + 'px';
  };

  const deleteNode = (e: any) => {
    let layer: Konva.Layer | null = currentNode.getLayer();

    let menuNode = menuRef.current;
    menuNode.style.display = 'none';
    layer?.destroy();
  };

  const addText = (e: any) => {
    stageRef.current.setPointersPositions(e);

    let stage: Konva.Stage = stageRef.current;
    let layer: Konva.Layer = new Konva.Layer();
    stage.add(layer);

    var text2 = new Konva.Text({
      x: 50,
      y: 200,
      fontSize: 30,
      text: 'Non Editable Text',
      draggable: true
    });
    layer.add(text2);

    var tr2 = new Konva.Transformer({
      nodes: [text2],
      keepRatio: false,
      enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right']
    });
    layer.add(tr2);

    layer.draw();
  };

  return (
    <div className="editor">
      <div className="container">
        <div className="editor_sidebar">
          {imageList.map((e: any) => {
            return (
              <div className="img-container" key={e.id}>
                <img
                  loading="lazy"
                  alt="lion"
                  src={e.download_url}
                  draggable="true"
                  onDragStart={(e: any) => {
                    dragUrl.current = e.target.src;
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="content">
          <div className="topbar-menu">
            <Button variant="contained" color="primary" onClick={addText}>
              Add Text
            </Button>
          </div>

          <div
            ref={mainRef}
            className="main-area"
            onDrop={onImageDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <Stage
              width={dimensions.width}
              height={dimensions.height}
              style={{ border: '1px solid grey' }}
              ref={stageRef}
              onContextMenu={onContextMenu}
            ></Stage>

            <div id="menu" ref={menuRef}>
              <div>
                <button id="delete-button" onClick={deleteNode}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
