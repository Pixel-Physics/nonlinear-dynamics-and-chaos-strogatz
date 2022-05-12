import p5 from "p5";

export class Arrow {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  headSize: number;
  theta: number;

  constructor(x1: number, y1: number, x2: number, y2: number, headSize = 10) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.headSize = headSize;

    this.theta = Math.atan((y2 - y1) / (x2 - x1));
  }

  get length(): number {
    return Math.sqrt((this.x2 - this.x1) ** 2 + (this.y2 - this.y1) ** 2);
  }

  draw(p: p5) {
    p.line(this.x1, this.y1, this.x2, this.y2);
    this.drawHead(p);
  }

  drawHead(p: p5) {
    const { theta, x1, x2, y2, headSize } = this;
    const dx = headSize / 2;
    const dy = (x1 < x2 ? 1 : -1) * (Math.sqrt(3) / 2) * headSize;
    p.push();
    p.angleMode(p.RADIANS);
    p.translate(x2, y2);
    p.rotate(theta);
    p.triangle(0, dx, dy, 0, 0, -dx);
    p.pop();
  }
}

export const arrow = (p: p5) => {};
