import React from "react";
import Layout from "@layout/default";
import { Arrow, defaultArrowProps } from "@sketch/brainstorm";
import { Interactive } from "@pixel-physics-p5/components/Interactive";
import { ArrowPolar, defaultArrowPolarProps } from "@sketch/brainstorm/arrows";

const Brainstorm = () => {
  return (
    <Layout>
      <Interactive Component={Arrow} componentProps={defaultArrowProps} />
      <Interactive Component={ArrowPolar} componentProps={defaultArrowPolarProps} />
    </Layout>
  );
};

export default Brainstorm;
