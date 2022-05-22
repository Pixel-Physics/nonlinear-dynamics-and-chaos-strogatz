import React from "react";
import Layout from "@components/layout/default";
import { Interactive } from "@pixel-physics/components/Interactive";
import {
  ColorPalette,
  ColorPaletteFunction,
} from "@sketch/color-flow/colorPalette";

const Brainstorm = () => {
  const a = 255;
  const c = 70;
  const gaussian = (a: number, b: number, c: number): ColorPaletteFunction => ({
    functionPlot: `${a} * exp(-(x - ${b})^2 / (2 * ${c}^2))`,
    dataPoint: (x) => a * Math.exp(-((x - b) ** 2) / (2 * c ** 2)),
  });

  const A = 255 / 2;
  const k = (2 * Math.PI) / (255 * 2.0);
  const sin = (A: number, k: number, o: number) => ({
    functionPlot: `${A} * sin(${k} * x + ${o}) + ${A}`,
    dataPoint: (x: number) => A * Math.sin(k * x + o),
  });

  return (
    <Layout>
      <ColorPalette
        r={gaussian(a, 0, c)}
        g={gaussian(a, 127, c)}
        b={gaussian(a, 255, c)}
      />
      <ColorPalette
        r={sin(A, k, 1.7)}
        g={sin(A, k * 1.5, -0.7)}
        b={sin(A, k, -1.5)}
      />
    </Layout>
  );
};

export default Brainstorm;
