let b1;
let b2;

function setup() {
  canvas = createCanvas(600, 600);
  canvas.parent("viz");
  ctx = canvas.drawingContext;
  b1 = new Butterfly(width / 2, height / 2, 0.02);
  b2 = new Butterfly(400, 200, 0.01);
}

function draw() {
  background(50);

  // move this into Butterfly class? or save details in setup() if not possible

  push();
  const grad = ctx.createRadialGradient(width / 2, height / 2, 0.1, width / 2, height / 2, 75);
  grad.addColorStop(0, "black");
  grad.addColorStop(1, "pink");
  ctx.fillStyle = grad;
  b1.display();
  pop();

  const grad2 = ctx.createRadialGradient(400, 200, 0.1, 400, 200, 75);
  grad2.addColorStop(0, "orange");
  grad2.addColorStop(1, "yellow");
  ctx.fillStyle = grad2;
  b2.display();
  pop();

}

class Butterfly {
  constructor(cx, cy, speed) {
    this.cx = cx;
    this.cy = cy;
    this.speed = speed; // mode?
    this.yoff = 0;
  }

  display() {

    stroke(255);
    // fill(240, 200, 220); // to change to gradient
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
    this.yoff += this.speed;
  }
}
