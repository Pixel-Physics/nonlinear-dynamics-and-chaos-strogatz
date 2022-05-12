import p5 from "p5";
import { Arrow } from "@pixel-physics/p5/objects/arrow";
import katex from "katex";

export const axes = (p: p5, canvas: p5.Element, xLabel = "x", yLabel = "y", color = "black") => {
  const center = p.createVector(p.width / 2, p.height / 2);

  // Draw axes
  const xAxis = {
    left: new Arrow(center.x, center.y, 0, center.y),
    right: new Arrow(center.x, center.y, p.width, center.y),
  };
  const yAxis = {
    up: new Arrow(center.x, center.y, center.x, 0),
    down: new Arrow(center.x, center.y, center.x, p.height),
  };

  xAxis.left.draw(p);
  xAxis.right.draw(p);
  yAxis.up.draw(p);
  yAxis.down.draw(p);

  // Add labels
  const offset = 20;
  const {x: canvasX, y: canvasY} = canvas.position()

  const xLabelP = p.createP();
  xLabelP.position(canvasX + xAxis.right.x2 - offset, canvasY + xAxis.right.y2);
  xLabelP.style('color', color)
  katex.render(xLabel, xLabelP.elt);

  const yLabelP = p.createP();
  yLabelP.position(canvasX + yAxis.up.x2 + offset, canvasY + yAxis.up.y2);
  yLabelP.style('color', color)
  katex.render(yLabel, yLabelP.elt);
};
