import {
  CANVAS_SIZE,
  SIZE_BASE_TOP,
  SIZE_BASE_BOTTOM,
  SHADOW_OFFSET,
  topGradientPalette,
  bottomGradientPalette,
  convertTempo,
  getGradientIndex,
} from "@/components/constants"; // not sure if should move elsewhere

export default function Sketch(p5, parentRef, data) {
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
    p5.background(240);
    butterflies.forEach(function (butterfly) {
      butterfly.display();
    });
  };

  class Butterfly {
    constructor(rank0, danceability, energy, acousticness, valence, tempo) {
      this.size = 20 - rank0;
      this.wingspan = SIZE_BASE_TOP + this.size * 3;
      this.cx = p5.map(danceability, 0, 1, 0, CANVAS_SIZE);
      this.cy = p5.map(energy, 0, 1, 0, CANVAS_SIZE);
      this.topGradient = acousticness;
      this.bottomGradient = valence;
      this.speed = convertTempo(tempo);
      this.yoff = 0;
    }

    wingVertex(a, multiplier, offset) {
      let r = Math.sin(2 * a) * multiplier;
      let x = Math.sin(this.yoff) * r * Math.cos(a);
      let y = r * Math.sin(a);
      p5.vertex(x + this.cx, y + this.cy + offset);
    }

    wings(offset) {
      p5.strokeWeight(0);
      let da = Math.PI / 300;
      let dx = 0.02;

      p5.beginShape();
      let xoff = 0;

      let topMultiplier = SIZE_BASE_TOP + this.size * 3;
      let bottomMultiplier = SIZE_BASE_BOTTOM + this.size * 2;

      for (let a = Math.PI / 2; a <= (3 * Math.PI) / 2; a += da) {
        // top
        this.wingVertex(a, topMultiplier, offset);
        xoff -= dx;
      }

      for (let a = -Math.PI / 2; a <= Math.PI / 2; a += da) {
        // bottom
        this.wingVertex(a, bottomMultiplier, offset);
        xoff += dx;
      }

      p5.endShape();

      if (Math.abs(Math.sin(this.yoff)) > 0.5) {
        // varied for more realistic flapping effect
        this.yoff += this.speed / 2;
      } else {
        this.yoff += this.speed;
      }
    }

    shadow() {
      p5.push();

      p5.strokeWeight(0);
      const grad = ctx.createRadialGradient(
        this.cx,
        this.cy,
        0.1,
        this.cx,
        this.cy,
        this.wingspan
      );
      grad.addColorStop(0, "rgba(50, 50, 50, 50)"); // by eye
      grad.addColorStop(0.6, "rgba(50, 50, 50, 0)");
      ctx.fillStyle = grad;

      this.wings(SHADOW_OFFSET);

      p5.pop();
    }

    display() {
      this.shadow();
      p5.push();

      const grad = ctx.createLinearGradient(
        this.cx,
        this.cy - this.wingspan,
        this.cx,
        this.cy + this.wingspan
      );
      grad.addColorStop(
        0,
        topGradientPalette[getGradientIndex(this.topGradient)]
      );
      grad.addColorStop(
        1,
        bottomGradientPalette[getGradientIndex(this.bottomGradient)]
      );
      ctx.fillStyle = grad;

      this.wings(0);
      p5.pop();
    }
  }
}
