import React, { useEffect } from "react";
import { css } from "@emotion/react";
import functionPlot from "function-plot";
import Sketch from "react-p5";
import p5 from "p5";

const styles = {
  wrapper: css({
    display: "flex",
    gap: "20px",
    border: "dashed pink",
  }),
  plot: css({
    // width: 400,
    // height: 250,
    border: "solid 2px",
  }),
};

/**
 *
 * @param a The height of the peak
 * @param b The horizontal shift
 * @param c The width
 * @returns
 */
const gaussian = (a: number, b: number, c: number) =>
  `${a} * exp(-(x - ${b})^2 / (2*${c}^2))`;

const gaussianValue = (a: number, b: number, c: number, x: number) => {
  return a * Math.exp(-((x - b) ** 2) / (2 * c ** 2));
};

const a = 255
const c = 70

export const ColorBuckets = () => {
  let width = 400;
  let height = 250;

  useEffect(() => {
    functionPlot({
      target: "#butterfly-curve",
      width,
      height,
      yAxis: { domain: [0, 300] },
      xAxis: { domain: [0, 255] },
      data: [
        { fn: gaussian(a, 0, c), color: "red" },
        { fn: gaussian(a, 127, c), color: "green" },
        { fn: gaussian(a, 255, c), color: "blue" },
      ],
    });
  }, [width, height]);

  const setup = (p: p5, canvasParentRef: Element) => {
    const canvas = p.createCanvas(400, 400).parent(canvasParentRef);
    canvas.style("border", "solid 2px black");
  };

  const draw = (p: p5) => {
    p.fill(
      gaussianValue(a, 0, c, p.frameCount),
      gaussianValue(a, 127, c, p.frameCount),
      gaussianValue(a, 255, c, p.frameCount)
    );
    p.noStroke();
    // Total frames divided by max color value
    p.rect((p.frameCount - 1) * 401 / 255, 40, 50, p.height);
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
        <div id="butterfly-curve" css={styles.plot}></div>
        <Sketch setup={setup} draw={draw} />
      </div>
    </React.Fragment>
  );
};
