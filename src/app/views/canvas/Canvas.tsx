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
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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
      <div className="pb-7 pt-7 px-8 bg-primary">
        <div className="card-title capitalize text-white text-white-secondary">
          canvas
        </div>
      </div>
      <div className="canvas">
        <Grid container spacing={0}>
          <Grid item lg={2} md={2} sm={2} xs={12}>
            <div className="toolbar">sdf</div>
          </Grid>
          <Grid item lg={10} md={10} sm={10} xs={12}>
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
                  <Text text="Just start drawing" />
                  {lines.map((line: any, i: any) => (
                    <Line key={i} points={line} stroke="red" />
                  ))}
                </Layer>
              </Stage>
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Canvas;
