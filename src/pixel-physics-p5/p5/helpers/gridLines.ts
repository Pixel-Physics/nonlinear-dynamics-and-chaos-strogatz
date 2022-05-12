import p5 from "p5";

export const gridLines = (p: p5, size = 10) => {
  for (let i = 0; i < p.width; i += size) {
    p.line(i, 0, i, p.height);
    p.line(p.width, i, 0, i);
  }
};
