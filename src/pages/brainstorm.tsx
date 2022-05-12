import React from "react";
import Loadable from "@loadable/component";

const LoadablePage = Loadable(
  () => import("@pages-client/brainstorm")
);

export default LoadablePage;
