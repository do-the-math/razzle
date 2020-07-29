import { Image, Stage } from 'react-konva';
import React, { useEffect, useRef, useState } from 'react';

import { Button } from '@material-ui/core';
// import { Image } from 'konva/types/shapes/Image';
import Konva from 'konva';
import { Image as TImage } from 'konva/types/shapes/Image';
import imageList from '../mock/images';

const calcDelta = (image: any, mainRef: any) => {
  // debugger;

  let pDelta = 1;
  pDelta = (mainRef.current.offsetWidth - image.width()) / image.width();
  return pDelta;
};

const getNormalImage = ({ dragUrl, layer, mainRef }: any): Promise<TImage> => {
  return new Promise((a, b) => {
    Konva.Image.fromURL(dragUrl.current, function (image: any) {
      // image dimentions
      const pDelta = calcDelta(image, mainRef);

      image.setAttr('opacity', 1);
      image.setAttr('scale', {
        x: 1,
        y: 1
      });
      image.draggable(true);

      // debugger;

      image.setAttr('width', image.width() * (1 + pDelta));
      image.setAttr('height', image.height() * (1 + pDelta));
      image.setAttr('y', mainRef.current.offsetHeight * 0.25);
      // image.setAttr('offsetY', -(image.height() * (1 + pDelta)) / 2);

      // image.cache();

      // image.position(stage.getPointerPosition());

      a(image);
    });
  });
};

export default getNormalImage;
