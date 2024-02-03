let b1;
let b2;

function setup() {
  canvas = createCanvas(600, 600);
  canvas.parent("viz");
  b1 = new Butterfly(width / 2, height / 2);
  b2 = new Butterfly(400, 200);
}

function draw() {
  background(50);
  b1.display();
  b2.display();
}

class Butterfly {
  constructor(cx, cy) {
    this.cx = cx;
    this.cy = cy;
    this.yoff = 0;
  }

  display() {
    stroke(255);
    fill(240, 200, 220); // to change to gradient
    strokeWeight(0.7);
    let da = PI / 300;
    let dx = 0.02;

    beginShape();
    let xoff = 0;

    for (let a = -PI / 2; a <= PI / 2; a += da) {
      // let n = noise(xoff, this.yoff);
      let n = 0.2;
      let r = sin(2 * a) * map(n, 0, 1, 50, 100);
      let x = sin(this.yoff) * r * cos(a);
      let y = r * sin(a);
      xoff += dx;
      vertex(x + this.cx, y + this.cy);
    }

    for (let a = PI / 2; a <= (3 * PI) / 2; a += da) {
      // let n = noise(xoff, this.yoff);
      let n = 0.8;
      let r = sin(2 * a) * map(n, 0, 1, 50, 100);
      let x = sin(this.yoff) * r * cos(a);
      let y = r * sin(a);
      xoff -= dx;
      vertex(x + this.cx, y + this.cy);
    }

    endShape();
    this.yoff += 0.02;
  }
}
