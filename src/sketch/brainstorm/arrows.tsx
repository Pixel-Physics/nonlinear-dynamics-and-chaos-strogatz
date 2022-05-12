import React from "react";
import p5 from "p5";
import Sketch from "react-p5";
import { Arrow } from "@pixel-physics-p5/p5/objects/arrow";

export const defaultArrowsProps = {
  x1: 0,
  y1: 0,
  x2: 100,
  y2: 100,
};

export const Arrows = ({
  x1 = defaultArrowsProps.x1,
  y1 = defaultArrowsProps.y1,
  x2 = defaultArrowsProps.x2,
  y2 = defaultArrowsProps.x2,
}) => {
  const arrow = new Arrow(x1, y1, x2, y2);

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
