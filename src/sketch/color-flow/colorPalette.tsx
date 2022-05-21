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

/**
 *
 * @param a The height of the peak
 * @param b The horizontal shift
 * @param c The width
 * @returns
 */

type ColorFunction = {
  functionPlot: string;
  dataPoint: (frameCount: number) => number;
};

export type ColorPaletteProps = {
  r: ColorFunction;
  g: ColorFunction;
  b: ColorFunction;
};

export const ColorPalette = ({ r, g, b }: ColorPaletteProps) => {
  const [id] = useState(`color-palette-${v4()}`);
  console.log(r.functionPlot);
  let width = 600;
  let height = 400;

  useEffect(() => {
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
  }, [width, height]);

  const setup = (p: p5, canvasParentRef: Element) => {
    const canvas = p.createCanvas(400, 400).parent(canvasParentRef);
  };

  const draw = (p: p5) => {
    p.strokeWeight(2);
    p.stroke(
      r.dataPoint(p.frameCount),
      g.dataPoint(p.frameCount),
      b.dataPoint(p.frameCount)
    );
    // Total frames divided by max color value
    p.line(
      ((p.frameCount - 1) * 401) / 255,
      50,
      ((p.frameCount - 1) * 401) / 255,
      p.height
    );
    drawFrameCount(p);
    if (p.frameCount > 255) p.noLoop();
  };

  const drawFrameCount = (p: p5) => {
    p.push();
    p.fill(255);
    p.stroke(255);
    p.rect(0, 0, p.width, 50);
    p.fill(0);
    p.textSize(40);
    p.text(`frameCount: ${p.frameCount}`, 10, 40);

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
