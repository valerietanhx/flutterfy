// move to utils

const CANVAS_SIZE = 600;
const SIZE_BASE_TOP = 12;
const SIZE_BASE_BOTTOM = (2 / 3) * SIZE_BASE_TOP;
const SHADOW_OFFSET = 2;

// colour palette: https://loading.io/color/feature/Spectral-10/
const innerGradientPalette = [
  // potentially change palette so that all pairings of colours look better
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
  return tempo <= 70
    ? 0.01 // slow
    : tempo <= 90
    ? 0.015 // medium-slow
    : tempo <= 110
    ? 0.02 // medium
    : tempo <= 130
    ? 0.025 // medium-fast
    : 0.03; // fast
}

let butterflies = [];

function preload() {
  // for testing purposes
  songs = loadJSON("data.json");
}

function setup() {
  canvas = createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  canvas.parent("viz");
  ctx = canvas.drawingContext;

  for (let i = 0; i < Object.keys(songs).length; i++) {
    song = songs[i];
    butterflies.push(
      new Butterfly(
        i,
        song.danceability,
        song.energy,
        song.acousticness,
        song.valence,
        song.tempo
      )
    );
  }
}

function draw() {
  background(50);
  butterflies.forEach(function (butterfly) {
    butterfly.display();
  });
}

class Butterfly {
  constructor(rank0, danceability, energy, acousticness, valence, tempo) {
    this.size = 20 - rank0;
    this.cx = map(danceability, 0, 1, 0, CANVAS_SIZE);
    this.cy = map(energy, 0, 1, 0, CANVAS_SIZE);
    this.innerGradient = acousticness;
    this.outerGradient = valence;
    this.speed = convertTempo(tempo);
    this.yoff = 0;
  }

  shadow(wingspan) {
    push();

    strokeWeight(0);
    const grad = ctx.createRadialGradient(
      this.cx,
      this.cy,
      0.1,
      this.cx,
      this.cy,
      wingspan
    );
    grad.addColorStop(0, "rgba(50, 50, 50, 25)");
    grad.addColorStop(0.6, "rgba(50, 50, 50, 0)");
    ctx.fillStyle = grad;

    let da = PI / 300;
    let dx = 0.02;

    beginShape();
    let xoff = 0;

    for (let a = PI / 2; a <= (3 * PI) / 2; a += da) {
      // top
      let r = sin(2 * a) * (SIZE_BASE_TOP + this.size * 3);
      let x = sin(this.yoff) * r * cos(a);
      let y = r * sin(a);
      xoff -= dx;
      vertex(x + this.cx, y + this.cy + SHADOW_OFFSET);
    }

    for (let a = -PI / 2; a <= PI / 2; a += da) {
      // bottom
      let r = sin(2 * a) * (SIZE_BASE_BOTTOM + this.size * 2);
      let x = sin(this.yoff) * r * cos(a);
      let y = r * sin(a);
      xoff += dx;
      vertex(x + this.cx, y + this.cy + SHADOW_OFFSET);
    }

    endShape();

    if (Math.abs(sin(this.yoff)) > 0.5) {
      // varied for more realistic flapping effect
      this.yoff += this.speed / 2;
    } else {
      this.yoff += this.speed;
    }

    pop();
  }

  display() {
    this.shadow(SIZE_BASE_TOP + this.size * 3);
    push();

    strokeWeight(0);
    const grad = ctx.createLinearGradient(
      this.cx,
      this.cy - 50, // numbers rn are by eye, need to update based on size (rank)
      this.cx,
      this.cy + 50
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

    for (let a = PI / 2; a <= (3 * PI) / 2; a += da) {
      // top
      let r = sin(2 * a) * (SIZE_BASE_TOP + this.size * 3);
      let x = sin(this.yoff) * r * cos(a);
      let y = r * sin(a);
      xoff -= dx;
      vertex(x + this.cx, y + this.cy);
    }

    for (let a = -PI / 2; a <= PI / 2; a += da) {
      // bottom
      let r = sin(2 * a) * (SIZE_BASE_BOTTOM + this.size * 2);
      let x = sin(this.yoff) * r * cos(a);
      let y = r * sin(a);
      xoff += dx;
      vertex(x + this.cx, y + this.cy);
    }

    endShape();

    if (Math.abs(sin(this.yoff)) > 0.5) {
      // varied for more realistic flapping effect
      this.yoff += this.speed / 2;
    } else {
      this.yoff += this.speed;
    }

    pop();
  }
}
