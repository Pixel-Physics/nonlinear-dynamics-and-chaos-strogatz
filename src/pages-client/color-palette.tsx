import React from "react";
import Layout from "@components/layout/default";
import { Interactive } from "@pixel-physics/components/Interactive";
import { ColorPaletteGaussian } from "@sketch/colorPalette/colorPaletteGaussian";
import { ColorPaletteSin } from "@sketch/colorPalette/colorPaletteSin";

const Brainstorm = () => {
  const gaussianParams = { a: 255, c: 70 };
  const sinParams = { A: 255 / 2, k: (2 * Math.PI) / (255 * 2) };

  return (
    <Layout>
      <Interactive
        Component={ColorPaletteSin}
        componentProps={{
          r_A: sinParams.A,
          r_k: sinParams.k,
          r_omega: 1.7,
          g_A: sinParams.A,
          g_k: sinParams.k * 1.5,
          g_omega: -0.7,
          b_A: sinParams.A,
          b_k: sinParams.k,
          b_omega: -1.5,
        }}
      />
      <Interactive
        Component={ColorPaletteGaussian}
        componentProps={{
          r_a: gaussianParams.a,
          r_b: 0,
          r_c: gaussianParams.c,
          g_a: gaussianParams.a,
          g_b: 127,
          g_c: gaussianParams.c,
          b_a: gaussianParams.a,
          b_b: 255,
          b_c: gaussianParams.c,
        }}
      />
    </Layout>
  );
};

export default Brainstorm;
