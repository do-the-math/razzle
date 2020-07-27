import { Layer, Line, Stage, Text } from 'react-konva';
import React, {
  Component,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react';

import { Grid } from '@material-ui/core';
import Konva from 'konva';

const Canvas = () => {
  let stageRef: any;
  const myRef = useRef<any>();
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight - 64
  });

  useEffect(() => {
    const resizeListener = () => {
      if (myRef.current) {
        setDimensions({
          width: myRef.current.offsetWidth,
          height: myRef.current.offsetHeight
        });
      }
    };
    resizeListener();
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  let [lines, setLines] = useState<any>([]);
  let [drawing, setDrawing] = useState(false);

  const handleMouseDown = () => {
    setDrawing(true);
    console.log(drawing);

    // add line
    setLines([...lines, []]);
  };

  const handleMouseMove = (e: any) => {
    // no drawing - skipping
    console.log(drawing);
    if (!drawing) {
      return;
    }

    const stage = (stageRef as any).getStage();
    const point = stage.getPointerPosition();

    let lastLine = lines[lines.length - 1];
    // add point
    lastLine = lastLine.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);

    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    setDrawing(false);
  };

  return (
    <React.Fragment>
      <div className="canvas">
        <div className="layer-ui-wrapper">
          <div className="fixed-menu-container">
            <div className="menu memu-top">Just start drawing</div>
          </div>
        </div>
        <div className="main" ref={myRef}>
          <Stage
            width={dimensions.width}
            height={dimensions.height}
            onContentMousedown={handleMouseDown}
            onContentMousemove={handleMouseMove}
            onContentMouseup={handleMouseUp}
            ref={(node) => {
              stageRef = node;
            }}
          >
            <Layer>
              {/* <Text text="Just start drawing" /> */}
              {lines.map((line: any, i: any) => (
                <Line key={i} points={line} stroke="red" />
              ))}
            </Layer>
          </Stage>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Canvas;
