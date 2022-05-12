import React, { useState } from "react";
import p5 from "p5";
import Sketch from "react-p5";
import { CircularBuffer } from "@pixel-physics/dataStructures/";
import {
  defaultHarmonicOscillatorProps as defaultProps,
  HarmonicOscillatorProps as Props,
} from "./common";

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
  readonly massSize: number;
  private points: number[][] = [];
  private tracePoints: CircularBuffer<number[]>;

  constructor({
    baseX = 0,
    baseY = 0,
    x0 = 50,
    x = 0,
    width = 10,
    coils = 10,
    massSize = 20,
    traceLength = 500,
  }) {
    this.baseX = baseX;
    this.baseY = baseY;
    this.x0 = x0;
    this._x = x;
    this.width = width;
    this.coils = coils;
    this.massSize = massSize;
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

  get length(): number {
    return this.x0 + this.x;
  }

  private computePoints() {
    const dY = this.length / this.coils / 2;
    let i = 0;
    this.points = [];
    this.points.push([this.baseX, this.baseY + i++ * dY]);
    this.points.push([this.baseX, this.baseY + i++ * dY]);
    for (i; i < this.coils + 2; i++) {
      const dX = (this.width / 2) * (i % 2 ? 1 : -1);
      this.points.push([this.baseX + dX, this.baseY + i * dY]);
    }
    this.points.push([this.baseX, this.baseY + i++ * dY]);
    this.points.push([this.baseX, this.baseY + i++ * dY]);
  }

  draw(p: p5) {
    for (let i = 1; i < this.points.length; i++) {
      const prev = this.points[i - 1];
      const current = this.points[i];
      p.line(prev[0], prev[1], current[0], current[1]);
    }
    p.rectMode(p.CENTER);
    p.rect(
      this.lastPoint[0],
      this.lastPoint[1] + this.massSize / 2,
      this.massSize,
      this.massSize
    );
  }

  /**
   * Trace the path the spring takes through time.
   */
  trace(p: p5) {
    const tracePoint = [
      this.lastPoint[0],
      this.lastPoint[1] + this.massSize / 2,
    ];
    this.tracePoints.put(tracePoint);
    p.push();
    p.fill(0);
    for (const point of this.tracePoints) {
      if (!point) break;
      p.point(point[0]++, point[1]);
    }
    p.pop();
  }
}

export const DampedHarmonicOscillatorPhysical = ({
  m = defaultProps.m,
  b = defaultProps.b,
  k = defaultProps.k,
  x = defaultProps.x,
  v = defaultProps.v,
  t = defaultProps.t,
  dt = defaultProps.dt,
  tMax = defaultProps.tMax,
}: Props) => {
  const [spring] = useState(new Spring({ baseX: 20, baseY: 110, x0: 90 }));

  function setup(p: p5, canvasParentRef: Element) {
    const canvas = p.createCanvas(400, 400).parent(canvasParentRef);
  }

  function draw(p: p5) {
    p.background(220);
    spring.x = x;
    spring.trace(p);
    spring.draw(p);
    update();
    if (t > tMax) {
      p.noLoop();
    }
  }

  function update() {
    x += v * dt;
    v += ((-b / m) * v - (k / m) * x) * dt;
    t += dt;
  }

  return <Sketch setup={setup} draw={draw} />;
};
