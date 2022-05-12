import React from "react";
import Layout from "@layout/default";
import { Arrows, defaultArrowsProps } from "@sketch/brainstorm";
import { Interactive } from "@pixel-physics-p5/components/Interactive";

const Brainstorm = () => {
  return (
    <Layout>
      <Interactive Component={Arrows} componentProps={defaultArrowsProps} />
    </Layout>
  );
};

export default Brainstorm;
