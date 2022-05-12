import p5 from "p5";

export class Arrow {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  private _r: number;
  private _theta: number;
  headSize: number;

  constructor(x1: number, y1: number, x2: number, y2: number, headSize = 10) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.headSize = headSize;

    this._r = Math.sqrt((this.x2 - this.x1) ** 2 + (this.y2 - this.y1) ** 2);
    this._theta = Math.atan((y2 - y1) / (x2 - x1));
  }

  static Cartesian(x1: number, y1: number, x2: number, y2: number): Arrow {
    return new Arrow(x1, y1, x2, y2);
  }

  /**
   * Create an arrow using polar coordinates
   * @param x1
   * @param y1
   * @param r
   * @param theta in radians, rotates clockwise
   * 
   * @see https://p5js.org/learn/coordinate-system-and-shapes.html
   */
  static Polar(x1: number, y1: number, r: number, theta: number): Arrow {
    const x2 = x1 + r * Math.cos(theta);
    const y2 = y1 + r * Math.sin(theta);
    console.log(x2, y2)
    return new Arrow(x1, y1, x2, y2);
  }

  get r(): number {
    return this._r;
  }

  set r(newR: number) {
    this._r = newR;
    this.x2 = this.x1 + newR * Math.cos(this._theta);
    this.y2 = this.y1 + newR * Math.sin(this._theta);
  }

  get theta(): number {
    return this._theta;
  }

  /**
   * @param newTheta in radians
   */
  set theta(newTheta: number) {
    this._theta = newTheta;
    this.x2 = this.x1 + this._r * Math.cos(newTheta);
    this.y2 = this.x2 + this._r * Math.sin(newTheta);
  }

  draw(p: p5) {
    p.line(this.x1, this.y1, this.x2, this.y2);
    this.drawHead(p);
  }

  drawHead(p: p5) {
    const { _theta, x1, x2, y2, headSize } = this;
    const dx = headSize / 2;
    const dy = (x1 < x2 ? 1 : -1) * (Math.sqrt(3) / 2) * headSize;
    p.push();
    p.angleMode(p.RADIANS);
    p.translate(x2, y2);
    p.rotate(_theta);
    p.triangle(0, dx, dy, 0, 0, -dx);
    p.pop();
  }
}

export const arrow = (p: p5) => {};
