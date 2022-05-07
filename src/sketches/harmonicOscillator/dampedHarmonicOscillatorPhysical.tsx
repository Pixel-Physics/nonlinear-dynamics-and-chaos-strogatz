import React from "react";
import p5 from "p5";
import Sketch from "react-p5";
import { CircularBuffer } from "../../pixel-physics-p5/dataStructures";

/**
 * TODO: Use curves to connect the points for a nicer looking spring.
 */
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
    traceLength = 100
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
      this.points.push([x, i * this.stretch]);
    }
    this.points.push([this.baseX, i * this.stretch]);
    this.points.push([this.baseX, (i + 1) * this.stretch]);
  }

  draw(p: p5, stretch: number) {
    this.stretch = stretch;
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
    const tracePoint = [this.lastPoint[0], this.lastPoint[1]];
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
  const spring = new Spring(20, 0);
  function setup(p: p5, canvasParentRef: Element) {
    const canvas = p.createCanvas(400, 400).parent(canvasParentRef);
    canvas.style("border", "solid");
    canvas.style("margin", "0px auto");
    canvas.style("display", "block");
  }

  function draw(p: p5) {
    p.background(220);
    spring.draw(p, 3 + 10 * p.abs(p.sin(p.frameCount / 20)));
    spring.trace(p);
    if (p.frameCount > 300) {
      console.log(spring.tracePoints.buffer);
      p.noLoop();
    }
  }

  return <Sketch setup={setup} draw={draw} />;
};
