import React from "react";
import p5 from "p5";
import Sketch from "react-p5";
import { CircularBuffer } from "../../pixel-physics-p5/dataStructures";

/**
 * @param baseX - x-coordinate for the base of the spring
 * @param baseY - y-coordinate for the base of the spring
 * @param x0 - Equilibrium length of the spring
 * @param x - displacement from x0
 */
class Spring {
  readonly baseX: number;
  readonly baseY: number;
  readonly x0: number;
  private _x: number;
  readonly width: number;
  readonly coils: number;
  private points: number[][] = [];
  private tracePoints: CircularBuffer<number[]>;

  constructor({
    baseX = 0,
    baseY = 0,
    x0 = 50,
    x = 0,
    width = 10,
    coils = 10,
    traceLength = 500,
  }) {
    this.baseX = baseX;
    this.baseY = baseY;
    this.x0 = x0,
    this._x = x;
    this.width = width;
    this.coils = coils;
    this.tracePoints = new CircularBuffer<number[]>(traceLength);
    this.computePoints();
  }

  set x(newX: number) {
    this._x = newX;
    this.computePoints();
  }

  get x() {
    return this._x;
  }

  get lastPoint(): number[] {
    return this.points[this.points.length - 1];
  }

  // TODO: Calculate coils and length of spring properly
  private computePoints() {
    const stretch = this.x + this.x0 / this.coils / 2
    this.points = [];
    this.points.push([this.baseX, this.baseY]);
    this.points.push([this.baseX, this.baseY + stretch]);
    for (var i = 2; i < this.coils + 2; i++) {
      const offset = (this.width / 2) * (i % 2 ? 1 : -1);
      const x = this.baseX + offset;
      this.points.push([x, this.baseY + i * stretch]);
    }
    this.points.push([this.baseX, this.baseY + i * stretch]);
    this.points.push([this.baseX, this.baseY + (i + 1) * stretch]);
  }

  draw(p: p5) {
    for (let i = 1; i < this.points.length; i++) {
      const prev = this.points[i - 1];
      const current = this.points[i];
      p.line(prev[0], prev[1], current[0], current[1]);
    }
    p.rectMode(p.CENTER);
    p.rect(this.lastPoint[0], this.lastPoint[1] + 10, 20, 20);
  }

  /**
   * Trace the path the spring takes through time.
   */
  trace(p: p5) {
    // add 10 for rect height
    const tracePoint = [this.lastPoint[0], this.lastPoint[1] + 10];
    this.tracePoints.put(tracePoint);
    p.push();
    p.fill(0);
    for (const point of this.tracePoints.buffer) {
      if (!point) break;
      p.point(point[0]++, point[1]);
    }
    p.pop();
  }
}

export const DampedHarmonicOscillatorPhysical = () => {
  const [m, b, k] = [2, 0.1, 10];
  let [x, v, t, dt, tMax] = [0, 150, 0, 0.1, 30];
  const spring = new Spring({ baseX: 20, baseY: 110, x0: 90 });

  function setup(p: p5, canvasParentRef: Element) {
    const canvas = p.createCanvas(400, 400).parent(canvasParentRef);
    canvas.style("border", "solid");
    canvas.style("margin", "0px auto");
    canvas.style("display", "block");
  }

  function draw(p: p5) {
    p.background(220);
    spring.x = x;
    spring.draw(p);
    spring.trace(p);
    update();
    if (t > tMax) {
      p.noLoop();
    }
  }

  function update() {
    x += v * dt;
    v += (-b / m) * v - (k / m) * x * dt;
    t += dt;
  }

  return <Sketch setup={setup} draw={draw} />;
};
