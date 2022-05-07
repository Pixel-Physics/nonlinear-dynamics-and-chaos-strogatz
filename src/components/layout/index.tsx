import React from "react";
import { Helmet } from "react-helmet";

type LayoutProps = {};

const Layout = ({ children }: React.PropsWithChildren<LayoutProps>) => (
  <div>
    * Wrapped in Layout
    <div>{children}</div>
  </div>
);

export default Layout;
