import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import functionPlot from "function-plot";
import Sketch from "react-p5";
import p5 from "p5";
import { v4 } from "uuid";
import { ClickToCopy } from "@components/ClickToCopy";

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

type ColorData = {
  data: [number, number, number][];
  showCopyButton: boolean;
};

export const ColorPalette = ({ r, g, b }: ColorPaletteProps) => {
  const [id] = useState(`color-palette-${v4()}`);
  const [colorData, setColorData] = useState<ColorData>({
    data: [],
    showCopyButton: false,
  });

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
        { fn: r.functionPlot, color: "red", range: [0, 255] },
        { fn: g.functionPlot, color: "green", range: [0, 255] },
        { fn: b.functionPlot, color: "blue", range: [0, 255] },
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
    colorData.data.push([
      r.dataPoint(p.frameCount),
      g.dataPoint(p.frameCount),
      b.dataPoint(p.frameCount),
    ]);
    p.stroke(...colorData.data[p.frameCount - 1]);
    // Total frames divided by max color value
    p.line(x, textSize + 10, x, p.height);
    drawFrameCount(p, textSize);
    if (p.frameCount > colorMax) {
      p.noLoop();
      setColorData({ ...colorData, showCopyButton: true });
    }
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
        <div
          css={css({
            visibility: colorData.showCopyButton ? "visible" : "hidden",
            margin: "auto 0px",
          })}
        >
          <ClickToCopy content={JSON.stringify(colorData.data)}>
            Copy color data
          </ClickToCopy>
        </div>
      </div>
    </React.Fragment>
  );
};
