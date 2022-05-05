import React from "react";
import { Helmet } from "react-helmet";
import TeX from "@matejmazur/react-katex";
import { withPrefix } from "gatsby";
import Layout from "../../components/layout";

const Test = () => {
  return (
    <Layout>
      <Helmet>
        <title>Test</title>
        <script src={withPrefix("sketches/pages/test/particleSystem.js")} />
      </Helmet>
      <h1>Math from 1984</h1>
      <p>The year is 1984</p>
      <TeX math="2 + 2 = 5" block />
    </Layout>
  );
};

export default Test;
