import React from "react";
import p5 from "p5";
import Sketch from "react-p5";
import { Arrow as ArrowObject } from "@pixel-physics/p5/objects/arrow";

export const defaultArrowPolarProps = {
  x1: 0,
  y1: 0,
  r: 100,
  theta: 0,
};

export const ArrowPolar = ({
  x1 = defaultArrowPolarProps.x1,
  y1 = defaultArrowPolarProps.y1,
  r = defaultArrowPolarProps.r,
  theta = defaultArrowPolarProps.theta,
}) => {
  const arrow = ArrowObject.Polar(x1, y1, r, theta);

  const setup = (p: p5, canvasParentRef: Element) => {
    const canvas = p.createCanvas(400, 400).parent(canvasParentRef);
    canvas.style("border", "solid 2px black");
  };

  const draw = (p: p5) => {
    p.fill(0);
    arrow.draw(p);
  };
  return <Sketch setup={setup} draw={draw} />;
};
