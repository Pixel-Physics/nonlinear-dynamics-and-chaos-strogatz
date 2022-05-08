import React from "react";
import { css } from "@emotion/react";

type LayoutProps = {};

const style = css({
  textAlign: "center",
});

const Layout = ({ children }: React.PropsWithChildren<LayoutProps>) => (
  <div>
    <div css={style}>{children}</div>
  </div>
);

export default Layout;
