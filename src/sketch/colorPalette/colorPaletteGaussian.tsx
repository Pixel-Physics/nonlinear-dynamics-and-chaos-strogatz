import React from "react";
import { ColorPalette, ColorPaletteFunction } from "./colorPalette";

type ColorPaletteGaussianProps = {
  r_a: number;
  r_b: number;
  r_c: number;
  g_a: number;
  g_b: number;
  g_c: number;
  b_a: number;
  b_b: number;
  b_c: number;
};

export const ColorPaletteGaussian = ({
  r_a,
  r_b,
  r_c,
  g_a,
  g_b,
  g_c,
  b_a,
  b_b,
  b_c,
}: ColorPaletteGaussianProps) => {
  const a = 255;
  const c = 70;
  const gaussian = (a: number, b: number, c: number): ColorPaletteFunction => ({
    functionPlot: `${a} * exp(-(x - ${b})^2 / (2 * ${c}^2))`,
    dataPoint: (x) => a * Math.exp(-((x - b) ** 2) / (2 * c ** 2)),
  });

  return (
    <ColorPalette
      r={gaussian(r_a, r_b, r_c)}
      g={gaussian(g_a, g_b, g_c)}
      b={gaussian(b_a, b_b, b_c)}
    />
  );
};
