import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import functionPlot from "function-plot";
import Sketch from "react-p5";
import p5 from "p5";
import { v4 } from "uuid";

const styles = {
  wrapper: css({
    border: "dashed",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  }),
};

export type ColorPaletteFunction = {
  functionPlot: string;
  dataPoint: (frameCount: number) => number;
};

export type ColorPaletteProps = {
  r: ColorPaletteFunction;
  g: ColorPaletteFunction;
  b: ColorPaletteFunction;
};

export const ColorPalette = ({ r, g, b }: ColorPaletteProps) => {
  const [id] = useState(`color-palette-${v4()}`);

  useEffect(() => {
    let width = 600;
    let height = 400;
    functionPlot({
      target: `#${id}`,
      width,
      height,
      yAxis: { domain: [0, 300], label: "color" },
      xAxis: { domain: [0, 255], label: "frameCount" },
      data: [
        { fn: r.functionPlot, color: "red" },
        { fn: g.functionPlot, color: "green" },
        { fn: b.functionPlot, color: "blue" },
      ],
    });
  }, []);

  const setup = (p: p5, canvasParentRef: Element) => {
    const canvas = p.createCanvas(400, 400).parent(canvasParentRef);
  };

  const draw = (p: p5) => {
    const colorMax = 255;
    const x = (p.frameCount - 1) * (p.width / colorMax);
    const textSize = 40;

    p.strokeWeight(2);
    p.stroke(
      r.dataPoint(p.frameCount),
      g.dataPoint(p.frameCount),
      b.dataPoint(p.frameCount)
    );
    // Total frames divided by max color value
    p.line(x, textSize + 10, x, p.height);
    drawFrameCount(p, textSize);
    if (p.frameCount > colorMax) p.noLoop();
  };

  const drawFrameCount = (p: p5, textSize: number) => {
    p.push();
    // Clear fameCount text
    p.fill(255);
    p.noStroke();
    p.rect(0, 0, p.width, textSize);
    p.fill(0);

    // Draw frameCount
    p.textSize(textSize);
    p.text(`frameCount: ${p.frameCount}`, 10, textSize);

    p.pop();
  };

  return (
    <React.Fragment>
      <div css={styles.wrapper}>
        <div id={id}></div>
        <Sketch
          setup={setup}
          draw={draw}
          css={css({
            display: "block",
            margin: "auto 0",
          })}
        />
      </div>
    </React.Fragment>
  );
};
