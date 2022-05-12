import React from "react";
import Layout from "@layout/default";
import {
  Arrow,
  defaultArrowProps,
  ArrowPolar,
  defaultArrowPolarProps,
} from "@sketch/arrow";
import { Interactive } from "@pixel-physics/components/Interactive";

const Brainstorm = () => {
  return (
    <Layout>
      <Interactive Component={Arrow} componentProps={defaultArrowProps} />
      <Interactive
        Component={ArrowPolar}
        componentProps={defaultArrowPolarProps}
      />
    </Layout>
  );
};

export default Brainstorm;
