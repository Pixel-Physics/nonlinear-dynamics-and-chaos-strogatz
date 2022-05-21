import React from "react";
import Layout from "@components/layout/default";
import { Interactive } from "@pixel-physics/components/Interactive";
import {
  ColorPalette,
  ColorPaletteProps,
} from "@sketch/color-flow/colorPalette";

const Brainstorm = () => {
  let rgbGaussian: ColorPaletteProps;
  {
    const a = 255;
    const c = 70;

    const gaussian = {
      functionPlot: (a: number, b: number, c: number) =>
        `${a} * exp(-(x - ${b})^2 / (2 * ${c}^2))`,
      dataPoint: (a: number, b: number, c: number) => (x: number) =>
        a * Math.exp(-((x - b) ** 2) / (2 * c ** 2)),
    };

    rgbGaussian = {
      r: {
        functionPlot: gaussian.functionPlot(a, 0, c),
        dataPoint: gaussian.dataPoint(a, 0, c),
      },
      g: {
        functionPlot: gaussian.functionPlot(a, 127, c),
        dataPoint: gaussian.dataPoint(a, 127, c),
      },
      b: {
        functionPlot: gaussian.functionPlot(a, 255, c),
        dataPoint: gaussian.dataPoint(a, 255, c),
      },
    };
  }

  let rgbSin: ColorPaletteProps;
  {
    const A = 255 / 2;
    const k = 2 * Math.PI / (255 * 2.0);

    const sin = {
      functionPlot: (A: number, k: number, o: number) =>
        `${A} * sin(${k} * x + ${o}) + ${A}`,
      dataPoint: (A: number, k: number, o: number) => (x: number) =>
        A * Math.sin(k * x + o),
    };

    rgbSin= {
      r: {
        functionPlot: sin.functionPlot(A, k, 1.7),
        dataPoint: sin.dataPoint(A, k, 1.7),
      },
      g: {
        functionPlot: sin.functionPlot(A, k * 1.5, -.7),
        dataPoint: sin.dataPoint(A, k * 1.5, -.7),
      },
      b: {
        functionPlot: sin.functionPlot(A, k, -1.5),
        dataPoint: sin.dataPoint(A, k, -1.5),
      },
    };
  }

  return (
    <Layout>
      <ColorPalette {...rgbGaussian} />
      <ColorPalette {...rgbSin} />
    </Layout>
  );
};

export default Brainstorm;
