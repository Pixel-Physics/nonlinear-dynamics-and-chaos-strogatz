import React from "react";
import Layout from "@components/layout/default";
import { Interactive } from "@pixel-physics/components/Interactive";
import { ColorBuckets } from "@sketch/color-flow/colorBuckets";

const Brainstorm = () => {
  return (
    <Layout>
      <ColorBuckets />
    </Layout>
  );
};

export default Brainstorm;
