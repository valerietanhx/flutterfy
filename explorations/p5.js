const CANVAS_SIZE = 600;

// colour palette: https://loading.io/color/feature/Spectral-10/
const innerGradientPalette = [
  // dark
  "#9e0142", // 0 < x <= 0.1
  "#d53e4f", // 0.1 < x <= 0.2
  "#f46d43", // 0.2 < x <= 0.3
  "#fdae61", // 0.3 < x <= 0.4
  "#fee08b", // 0.4 < x <= 0.5
  "#e6f598", // 0.5 < x <= 0.6
  "#abdda4", // 0.6 < x <= 0.7
  "#66c2a5", // 0.7 < x <= 0.8
  "#3288bd", // 0.8 < x <= 0.9
  "#5e4fa2", // 0.9 < x <= 1
];

// colour palette: https://coolors.co/df015e-e27985-f8a58b-fed6ae-ffefc2-f2f9c8-d6eed2-99d6c3-5ea7d4-8376bc
const outerGradientPalette = [
  // light
  "#df015e",
  "#e27985",
  "#f8a58b",
  "#fed6ae",
  "#ffefc2",
  "#f2f9c8",
  "#d6eed2",
  "#99d6c3",
  "#5ea7d4",
  "#8376bc",
];

// https://artlist.io/blog/music-bpm/
function convertTempo(tempo) {
  if (tempo <= 70) {
    // slow
    return 0.01;
  } else if (tempo <= 90) {
    // medium-slow
    return 0.015;
  } else if (tempo <= 110) {
    // medium
    return 0.02;
  } else if (tempo <= 130) {
    // medium-fast
    return 0.025;
  } else {
    // fast
    return 0.03;
  }
}

function setup() {
  canvas = createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  canvas.parent("viz");
  ctx = canvas.drawingContext;
  b1 = new Butterfly(0.5, 0.5, 0.295, 0.485, 111.826);
  b2 = new Butterfly(0.8, 0.2, 0.1, 0.817, 96.045);
}

function draw() {
  background(50);
  b1.display();
  b2.display();
}

class Butterfly {
  constructor(danceability, energy, acousticness, valence, tempo) {
    this.cx = map(danceability, 0, 1, 0, CANVAS_SIZE);
    this.cy = map(energy, 0, 1, 0, CANVAS_SIZE);
    this.innerGradient = acousticness;
    this.outerGradient = valence;
    this.speed = convertTempo(tempo);
    this.yoff = 0;
  }

  display() {
    push();

    strokeWeight(0);
    const grad = ctx.createRadialGradient(
      this.cx,
      this.cy,
      0.5,
      this.cx,
      this.cy,
      60
    );

    grad.addColorStop(
      0,
      innerGradientPalette[Math.max(0, Math.ceil(this.innerGradient * 10) - 1)]
    );
    grad.addColorStop(
      1,
      outerGradientPalette[Math.max(0, Math.ceil(this.outerGradient * 10) - 1)]
    );
    ctx.fillStyle = grad;

    let da = PI / 300;
    let dx = 0.02;

    beginShape();
    let xoff = 0;

    for (let a = -PI / 2; a <= PI / 2; a += da) {
      let n = 0.2;
      let r = sin(2 * a) * map(n, 0, 1, 45, 75);
      let x = sin(this.yoff) * r * cos(a);
      let y = r * sin(a);
      xoff += dx;
      vertex(x + this.cx, y + this.cy);
    }

    for (let a = PI / 2; a <= (3 * PI) / 2; a += da) {
      let n = 1.2;
      let r = sin(2 * a) * map(n, 0, 1, 45, 75);
      let x = sin(this.yoff) * r * cos(a);
      let y = r * sin(a);
      xoff -= dx;
      vertex(x + this.cx, y + this.cy);
    }

    endShape();
    this.yoff += this.speed;
    pop();
  }
}
