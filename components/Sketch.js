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

export default function sketch(p5, parentRef, data) {
  let canvas;
  let ctx;
  let butterflies = [];

  p5.setup = () => {
    canvas = p5.createCanvas(CANVAS_SIZE, CANVAS_SIZE).parent(parentRef);
    ctx = canvas.drawingContext;
    for (let i = 0; i < data.length; i++) {
      let song = data[i];
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
  };

  p5.draw = () => {
    p5.background(50);
    butterflies.forEach(function (butterfly) {
      butterfly.display();
    });
  };

  class Butterfly {
    constructor(rank0, danceability, energy, acousticness, valence, tempo) {
      this.size = 20 - rank0;
      this.cx = p5.map(danceability, 0, 1, 0, CANVAS_SIZE);
      this.cy = p5.map(energy, 0, 1, 0, CANVAS_SIZE);
      this.innerGradient = acousticness;
      this.outerGradient = valence;
      this.speed = convertTempo(tempo);
      this.yoff = 0;
    }

    shadow(wingspan) {
      p5.push();

      p5.strokeWeight(0);
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

      let da = Math.PI / 300;
      let dx = 0.02;

      p5.beginShape();
      let xoff = 0;

      for (let a = Math.PI / 2; a <= (3 * Math.PI) / 2; a += da) {
        // top
        let r = Math.sin(2 * a) * (SIZE_BASE_TOP + this.size * 3);
        let x = Math.sin(this.yoff) * r * Math.cos(a);
        let y = r * Math.sin(a);
        xoff -= dx;
        p5.vertex(x + this.cx, y + this.cy + SHADOW_OFFSET);
      }

      for (let a = -Math.PI / 2; a <= Math.PI / 2; a += da) {
        // bottom
        let r = Math.sin(2 * a) * (SIZE_BASE_BOTTOM + this.size * 2);
        let x = Math.sin(this.yoff) * r * Math.cos(a);
        let y = r * Math.sin(a);
        xoff += dx;
        p5.vertex(x + this.cx, y + this.cy + SHADOW_OFFSET);
      }

      p5.endShape();

      if (Math.abs(Math.sin(this.yoff)) > 0.5) {
        // varied for more realistic flapping effect
        this.yoff += this.speed / 2;
      } else {
        this.yoff += this.speed;
      }

      p5.pop();
    }

    display() {
      this.shadow(SIZE_BASE_TOP + this.size * 3);
      p5.push();

      p5.strokeWeight(0);
      const grad = ctx.createLinearGradient(
        this.cx,
        this.cy - 50, // numbers rn are by eye, need to update based on size (rank)
        this.cx,
        this.cy + 50
      );
      grad.addColorStop(
        0,
        innerGradientPalette[
          Math.max(0, Math.ceil(this.innerGradient * 10) - 1)
        ]
      );
      grad.addColorStop(
        1,
        outerGradientPalette[
          Math.max(0, Math.ceil(this.outerGradient * 10) - 1)
        ]
      );
      ctx.fillStyle = grad;
      let da = Math.PI / 300;
      let dx = 0.02;

      p5.beginShape();
      let xoff = 0;

      for (let a = Math.PI / 2; a <= (3 * Math.PI) / 2; a += da) {
        // top
        let r = Math.sin(2 * a) * (SIZE_BASE_TOP + this.size * 3);
        let x = Math.sin(this.yoff) * r * Math.cos(a);
        let y = r * Math.sin(a);
        xoff -= dx;
        p5.vertex(x + this.cx, y + this.cy);
      }

      for (let a = -Math.PI / 2; a <= Math.PI / 2; a += da) {
        // bottom
        let r = Math.sin(2 * a) * (SIZE_BASE_BOTTOM + this.size * 2);
        let x = Math.sin(this.yoff) * r * Math.cos(a);
        let y = r * Math.sin(a);
        xoff += dx;
        p5.vertex(x + this.cx, y + this.cy);
      }

      p5.endShape();

      if (Math.abs(Math.sin(this.yoff)) > 0.5) {
        // varied for more realistic flapMath.PIng effect
        this.yoff += this.speed / 2;
      } else {
        this.yoff += this.speed;
      }
      p5.pop();
    }
  }
}
