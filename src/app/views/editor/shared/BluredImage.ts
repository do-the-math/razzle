import { Image, Stage } from 'react-konva';
import React, { useEffect, useRef, useState } from 'react';

import { Button } from '@material-ui/core';
// import { Image } from 'konva/types/shapes/Image';
import Konva from 'konva';
import { Image as TImage } from 'konva/types/shapes/Image';
import useImage from 'use-image';

const getBluredImage = ({ dragUrl, layer, mainRef }: any): Promise<TImage> => {
  return new Promise((a, b) => {
    Konva.Image.fromURL(dragUrl.current, function (image: any) {
      const imageAspect = image.width / image.height;
      image.setAttr('blurRadius', 15);
      image.setAttr('opacity', 0.7);
      image.setAttr('scale', {
        x: 1,
        y: imageAspect
      });
      image.setAttr('width', mainRef.current.offsetWidth);
      image.setAttr('height', mainRef.current.offsetHeight);

      image.cache();

      image.filters([Konva.Filters.Blur]);

      // image.position(stage.getPointerPosition());
      image.draggable(true);

      a(image);
    });
  });
};

export default getBluredImage;
