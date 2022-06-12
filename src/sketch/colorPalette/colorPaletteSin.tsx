import React from "react";
import { ColorPalette } from "./colorPalette";

type ColorPaletteSinProps = {
  r_A: number;
  r_k: number;
  r_omega: number;
  g_A: number;
  g_k: number;
  g_omega: number;
  b_A: number;
  b_k: number;
  b_omega: number;
};

export const ColorPaletteSin = ({
  r_A,
  r_k,
  r_omega,
  g_A,
  g_k,
  g_omega,
  b_A,
  b_k,
  b_omega,
}: ColorPaletteSinProps) => {
  const sin = (A: number, k: number, omega: number) => ({
    functionPlot: `${A} * sin(${k} * x + ${omega}) + ${A}`,
    dataPoint: (x: number) => A * Math.sin(k * x + omega) + A,
  });
  return (
    <ColorPalette
      r={sin(r_A, r_k, r_omega)}
      g={sin(g_A, g_k, g_omega)}
      b={sin(b_A, b_k, b_omega)}
    />
  );
};
