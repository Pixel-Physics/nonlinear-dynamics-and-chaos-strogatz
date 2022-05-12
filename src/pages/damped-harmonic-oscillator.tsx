import React from "react";
import Loadable from "@loadable/component";

/**
 * https://www.gatsbyjs.com/docs/using-client-side-only-packages/#workaround-4-load-client-side-dependent-components-with-loadable-components
 * 
 * TODO: wrap sketches in Loadable, rather than entire page.
 */
const LoadablePage = Loadable(
  () => import("@pages-client/damped-harmonic-oscillator")
);

export default LoadablePage;
