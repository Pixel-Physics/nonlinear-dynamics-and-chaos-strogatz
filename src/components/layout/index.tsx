import React from "react";
import { Helmet } from "react-helmet";

type LayoutProps = {};

const Layout = ({ children }: React.PropsWithChildren<LayoutProps>) => (
  <div>
    <Helmet>
      <script src="https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js"></script>
    </Helmet>
    <div>* This page has processing enabled</div>
    <div>{children}</div>
  </div>
);

export default Layout;
