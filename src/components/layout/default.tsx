import React from "react";
import { TOC } from "../TOC";

import { css } from "@emotion/react";

type LayoutProps = {};

const style = css({
  textAlign: "center",
});

const Layout = ({ children }: React.PropsWithChildren<LayoutProps>) => (
  <div>
    <TOC />
    <div css={style}>{children}</div>
  </div>
);

export default Layout;
