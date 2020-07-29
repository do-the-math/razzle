import { Image, Stage } from 'react-konva';
import React, { useEffect, useRef, useState } from 'react';

import { Button } from '@material-ui/core';
import Konva from 'konva';
import { Image as TImage } from 'konva/types/shapes/Image';
import getBluredImage from './shared/BluredImage';
import getNormalImage from './shared/NormalImage';
import imageList from './mock/images';
import useImage from 'use-image';

const Editor = () => {
  const dragUrl: any = React.useRef();
  const stageRef: any = React.useRef();
  const mainRef = useRef<any>();

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
    // register event position

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

    // add image
    dropImageOnCanvas(e);
  };

  return (
    <div className="editor">
      <div className="container">
        <div className="editor_sidebar">
          {imageList.map((e: any) => {
            return (
              <div className="img-container">
                <img
                  alt="lion"
                  key={e.id}
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
            <Button variant="contained" color="primary">
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
            ></Stage>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
