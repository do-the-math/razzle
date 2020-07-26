import { Layer, Line, Stage, Text } from 'react-konva';
import React, { Component, useEffect, useRef, useState } from 'react';

import Konva from 'konva';

const useResize = (myRef: any) => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  useEffect(() => {
    console.log('width' + width);
    const handleResize = () => {
      setWidth(myRef.current.offsetWidth);
      setHeight(myRef.current.offsetHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [myRef, width]);

  return { width, height };
};

const Canvas = () => {
  let stageRef: any;

  const myRef = useRef(null);
  const { width, height } = useResize(myRef);

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
    <div className="canvas">
      <div className="main" ref={myRef}>
        <Stage
          width={width}
          height={height}
          onContentMousedown={handleMouseDown}
          onContentMousemove={handleMouseMove}
          onContentMouseup={handleMouseUp}
          ref={(node) => {
            stageRef = node;
          }}
        >
          <Layer>
            <Text text="Just start drawing" />
            {lines.map((line: any, i: any) => (
              <Line key={i} points={line} stroke="red" />
            ))}
          </Layer>
        </Stage>
      </div>
      <div className="toolbar">sdf</div>
    </div>
  );
};

export default Canvas;
