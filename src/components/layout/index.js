import React from "react";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <title>Math from 1984</title>
      <script src="https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js"></script>
      <script src={withPrefix('sketches/pages/test/particleSystem.js')} />
    </Helmet>
    <div>* This page has processing enabled</div>
    <div>{children}</div>
  </div>
);

export default Layout;
