const pointRadius = 5
const [m, b, k] = [5, -0.01, 10];
let [x1, x2, t, dt] = [0, 100, 0, 0.1];

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.style("border", "solid");
}

function draw() {
  translate(200, 200);
  update();
  ellipse(x1, x2, pointRadius, pointRadius);
}

function update() {
  x1 += x2 * dt;
  x2 += (-b / m) * x2 - (k / m) * x1 * dt;
  t += dt;
}
