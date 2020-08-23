// import { Image } from 'konva/types/shapes/Image';
import Konva from 'konva';
import { Image as TImage } from 'konva/types/shapes/Image';

const calcDelta = (image: any, mainRef: any) => {
  let pDelta = 1;
  pDelta = (mainRef.current.offsetWidth - image.width()) / image.width();
  return pDelta;
};

const getNormalImage = ({ dragUrl, layer, mainRef }: any): Promise<TImage> => {
  return new Promise((a, b) => {
    Konva.Image.fromURL(dragUrl.current, function (image: Konva.Image) {
      // image dimentions
      const pDelta = calcDelta(image, mainRef);

      image.setAttr('opacity', 1);
      image.setAttr('scale', {
        x: 1,
        y: 1
      });
      image.draggable(true);

      image.setAttr('width', image.width() * (1 + pDelta));
      image.setAttr('height', image.height() * (1 + pDelta));
      image.setAttr('y', mainRef.current.offsetHeight * 0.25);
      image.on('dblclick', () => {
        console.log('asd');
      });
      // image.position(stage.getPointerPosition());
      a(image);
    });
  });
};

export default getNormalImage;
