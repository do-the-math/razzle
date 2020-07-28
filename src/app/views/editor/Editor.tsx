import { Image, Layer, Stage } from 'react-konva';
import React, { useEffect, useRef, useState } from 'react';

import { Button } from '@material-ui/core';
import Konva from 'konva';
import URLImage from './shared/URLImage';
import imageList from './mock/images';
import useImage from 'use-image';

const Editor = () => {
  const dragUrl: any = React.useRef();
  const stageRef: any = React.useRef();
  const [images, setImages] = React.useState<any>([]);
  const mainRef = useRef<any>();

  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
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

  return (
    <div className="editor">
      <div className="container">
        <div className="editor_sidebar">
          {imageList.map((e: any) => {
            return (
              <div className="img-container">
                <img
                  alt="lion"
                  src={e.download_url}
                  // src={
                  //   'https://rawcdn.githack.com/konvajs/site/726e19d6304c580ad8fe40651bd56a27ba43fcb3/react-demos/filters/public/lion.png'
                  // }
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
            onDrop={(e) => {
              e.preventDefault();
              // register event position
              stageRef.current.setPointersPositions(e);
              // add image
              setImages([
                {
                  ...stageRef.current.getPointerPosition(),
                  src: dragUrl.current
                }
              ]);
            }}
            onDragOver={(e) => e.preventDefault()}
          >
            <Stage
              width={dimensions.width}
              height={dimensions.height}
              style={{ border: '1px solid grey' }}
              ref={stageRef}
            >
              <Layer>
                {images.map((image: any) => {
                  return <URLImage image={image} mainRef={mainRef} />;
                })}
              </Layer>
            </Stage>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
