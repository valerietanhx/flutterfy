import {
  SIZE_BASE_TOP,
  SIZE_BASE_BOTTOM,
  SHADOW_OFFSET,
  topGradientPalette,
  bottomGradientPalette,
  convertTempo,
  getGradientIndex,
} from "@/components/Sketch/constants";

export default function Sketch(
  p5,
  canvasRef,
  utilsRef,
  buttonRef,
  initCanvasSize,
  data
) {
  let canvas, ctx, colourPicker, imageButton, gifButton;
  let butterflies = [];

  p5.setup = () => {
    canvas = p5.createCanvas(initCanvasSize, initCanvasSize).parent(canvasRef);
    ctx = canvas.drawingContext;
    for (let i = 0; i < data.length; i++) {
      let track = data[i];
      butterflies.push(
        new Butterfly(
          i,
          track.danceability,
          track.energy,
          track.acousticness,
          track.valence,
          track.tempo
        )
      );
    }

    p5.createP("Background colour:&nbsp;")
      .style("display", "inline-block")
      .parent(utilsRef);
    colourPicker = p5
      .createColorPicker("#f0f0f0") // var(--light-grey)
      .style("cursor", "pointer")
      .parent(utilsRef);

    imageButton = p5.createButton("Download as image").parent(buttonRef);
    imageButton.mousePressed(() => p5.saveCanvas("flutterfy.png"));

    gifButton = p5.createButton("Download as gif").parent(buttonRef);
    gifButton.mousePressed(() => {
      p5.saveGif("flutterfy.gif", 6, { notificationDuration: 5 });

      const progressBar = p5.select("#progressBar");

      progressBar
        .style("position", "fixed")
        .style("top", null)
        .style("left", "0")
        .style("bottom", "0")
        .style("width", "100%")
        .style("background-color", "var(--spotify-green)")
        .style("border-radius", "0")
        .style("text-align", "center")
        .style("font-family", null);
    });
  };

  p5.draw = () => {
    let c = colourPicker.color();
    p5.background(c);

    // because the butterflies need to be inited in setup,
    // but that means they are inited with the original canvas size
    // which in turn affects their size / position on the canvas
    // we add this chunk of code to draw() so that they are redrawn
    // with the correct proportions whenever resizeCanvas is called
    // inelegant, would be good to find a cleaner way!
    for (let i = 0; i < data.length; i++) {
      let track = data[i];
      butterflies[i].cx = p5.map(
        track.danceability,
        0,
        1,
        0,
        canvasRef.offsetWidth
      );
      butterflies[i].cy =
        canvasRef.offsetWidth -
        p5.map(track.energy, 0, 1, 0, canvasRef.offsetWidth);
    }

    butterflies.forEach(function (butterfly) {
      butterfly.display();
    });
  };

  p5.windowResized = () => {
    p5.resizeCanvas(canvasRef.offsetWidth, canvasRef.offsetWidth);
  };

  class Butterfly {
    constructor(rank0, danceability, energy, acousticness, valence, tempo) {
      this.size = 20 - rank0;
      this.wingspan = SIZE_BASE_TOP + this.size * 3;
      this.cx = p5.map(danceability, 0, 1, 0, canvasRef.offsetWidth);
      this.cy =
        canvasRef.offsetWidth - p5.map(energy, 0, 1, 0, canvasRef.offsetWidth);
      // because y-axis goes down, but is traditionally read as going up
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
      // https://p5js.org/reference/#/p5/push
      // push() and pop() "limit the effect of styles and transformations
      // to a specific group of shapes, images, and text"
      // push() saves the current drawing style settings and transformations,
      // while pop() restores these settings
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

      // see above for what push() and pop() do
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
