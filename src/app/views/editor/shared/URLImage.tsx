import { Image, Layer, Stage } from 'react-konva';
import React, { useEffect, useRef, useState } from 'react';

import Konva from 'konva';
import useImage from 'use-image';

interface Props {}

const URLImage = ({ image, mainRef }: any) => {
  const [img]: any = useImage(image.src, 'Anonimus');
  const imageRef: any = React.useRef();
  const imageRef1: any = React.useRef();
  // debugger
  console.log(img);

  let xScale = 1;
  let imgWidth = mainRef.current.offsetWidth;
  let imgHeight = mainRef.current.offsetHeight;
  if (img) {
    xScale = (mainRef.current.offsetWidth - img.width) / img.width;

    imgWidth = img.width * (1 + xScale);
    imgHeight = img.height * (1 + xScale);
  }

  React.useEffect(() => {
    if (img) {
      // you many need to reapply cache on some props changes like shadow, stroke, etc.
      imageRef.current.cache();
      // since this update is not handled by "react-konva" and we are using Konva methods directly
      // we have to redraw layer manually
      imageRef.current.getLayer().batchDraw();
    }
  }, [img]);

  return (
    <React.Fragment>
      <Image
        ref={imageRef}
        image={img}
        filters={[Konva.Filters.Blur]}
        blurRadius={7}
        opacity={0.7}
        // I will use offset to set origin to the center of the image
        // offsetX={img ? img.width / 2 : 0}
        // offsetY={img ? img.height / 2 : 0}
        scale={{ x: 1.8, y: 1.8 }}
        width={mainRef.current.offsetWidth}
        height={mainRef.current.offsetHeight}
      />
      <Image
        ref={imageRef1}
        image={img}
        // filters={[Konva.Filters.Blur]}
        // blurRadius={10}
        // x={image.x}
        y={mainRef.current.offsetHeight / 2}
        // I will use offset to set origin to the center of the image
        // offsetX={img ? img.width / 2 : 0}
        offsetY={imgHeight / 2}
        // scale={{ x: xScale, y: xScale }}
        width={imgWidth}
        height={imgHeight}
      />
    </React.Fragment>
  );
};

export default URLImage;
