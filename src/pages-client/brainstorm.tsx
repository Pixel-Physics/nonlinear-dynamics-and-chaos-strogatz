import React from "react";
import Layout from "@components/layout/default";
import { Interactive } from "@pixel-physics/components/Interactive";
import {
  ColorPalette,
  ColorPaletteProps,
} from "@sketch/color-flow/colorPalette";

const Brainstorm = () => {
  const gaussian = {
    functionPlot: (a: number, b: number, c: number) =>
      `${a} * exp(-(x - ${b})^2 / (2 * ${c}^2))`,
    dataPoint: (a: number, b: number, c: number) => (x: number) =>
      a * Math.exp(-((x - b) ** 2) / (2 * c ** 2)),
  };

  const a = 255;
  const c = 70;
  const rgb: ColorPaletteProps = {
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

  return (
    <Layout>
      <ColorPalette {...rgb} />
    </Layout>
  );
};

export default Brainstorm;
