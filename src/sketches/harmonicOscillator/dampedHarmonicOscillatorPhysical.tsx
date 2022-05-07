import React from "react";
import p5 from "p5";
import Sketch from "react-p5";
import { CircularBuffer } from "../../pixel-physics-p5/dataStructures";

class Spring {
  baseX: number;
  baseY: number;
  _stretch: number;
  width: number;
  coils: number;
  points: number[][] = [];
  tracePoints: CircularBuffer<number[]>;

  constructor(
    baseX: number,
    baseY: number,
    stretch = 10,
    width = 10,
    coils = 10,
    traceLength = 500
  ) {
    this.baseX = baseX;
    this.baseY = baseY;
    this._stretch = stretch;
    this.width = width;
    this.coils = coils;
    this.tracePoints = new CircularBuffer<number[]>(traceLength);
    this.computePoints();
  }

  set stretch(newStretch: number) {
    this._stretch = newStretch;
    this.computePoints();
  }

  get stretch() {
    return this._stretch;
  }

  get lastPoint(): number[] {
    return this.points[this.points.length - 1];
  }

  private computePoints() {
    this.points = [];
    this.points.push([this.baseX, this.baseY]);
    this.points.push([this.baseX, this.baseY + this.stretch]);
    for (var i = 2; i < this.coils - 1; i++) {
      const offset = (this.width / 2) * (i % 2 ? 1 : -1);
      const x = this.baseX + offset;
      this.points.push([x, this.baseY + i * this.stretch]);
    }
    this.points.push([this.baseX, this.baseY + i * this.stretch]);
    this.points.push([this.baseX, this.baseY + (i + 1) * this.stretch]);
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
  const spring = new Spring(20, 50, 5);

  function setup(p: p5, canvasParentRef: Element) {
    const canvas = p.createCanvas(400, 400).parent(canvasParentRef);
    canvas.style("border", "solid");
    canvas.style("margin", "0px auto");
    canvas.style("display", "block");
  }

  function draw(p: p5) {
    p.background(220);
    spring.stretch = 10 + x;
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
