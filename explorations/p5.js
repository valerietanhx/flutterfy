function setup() {
  canvas = createCanvas(600, 600);
  canvas.parent('viz');
}

let yoff = 0;

function draw() {
  background(50);
  translate(width/2, height/2);
  stroke(255);
  fill(240, 200, 220);
  strokeWeight(0.7);

  let da = PI / 300;
  let dx = 0.02;

  beginShape();
  let xoff = 0;

  for (let a = -PI/2; a<=PI/2; a+=da) {
    let n = noise(xoff, yoff);
    n = 0.2;
    let r = sin(2*a)*map(n, 0, 1, 50, 100);
    let x = sin(yoff) * r*cos(a);
    let y = r * sin(a);
    xoff += dx;
    vertex(x, y);
  }

  for (let a = PI/2; a<=3*PI/2; a+=da) {
    let n = noise(xoff, yoff);
    n = 0.8;
    let r = sin(2*a)*map(n, 0, 1, 50, 100);
    let x = sin(yoff) * r*cos(a);
    let y = r * sin(a);
    xoff -= dx;
    vertex(x, y);
  }

  endShape();
  yoff+= 0.02;
}