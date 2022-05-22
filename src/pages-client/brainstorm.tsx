import React from "react";
import Layout from "@components/layout/default";
import { Interactive } from "@pixel-physics/components/Interactive";

const Brainstorm = () => {
  const gaussianParams = { a: 255, c: 70 };
  const sinParams = { A: 255 / 2, k: (2 * Math.PI) / (255 * 2) };

  return (
    <Layout>
      <h1>Next project ideas</h1>
      <ul>
        <li>Bouncing balls</li>
        <li>Color buckets</li>
      </ul>
    </Layout>
  );
};

export default Brainstorm;
