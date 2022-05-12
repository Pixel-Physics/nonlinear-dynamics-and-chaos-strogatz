import p5 from "p5";
import { Arrow } from "@pixel-physics/p5/objects/arrow";

export const axes = (p: p5) => {
  const center = p.createVector(p.width / 2, p.height / 2);
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
};
