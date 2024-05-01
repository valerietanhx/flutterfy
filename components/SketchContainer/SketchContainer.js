"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "@/components/SketchContainer/sketchContainer.module.css";
import Sketch from "@/components/Sketch/Sketch";

// https://aleksati.net/posts/how-to-use-p5js-with-nextjs-in-2024
export default function SketchContainer({ data }) {
  const parentRef = useRef();

  const [isMounted, setIsMounted] = useState(false);

  // on mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // if not mounted, do nothing yet.
    if (!isMounted) return;

    // our current p5 sketch instance
    let p5instance;

    // function that loads p5 and creates the sketch inside the div.
    const initP5 = async () => {
      try {
        // import p5 client-side
        const p5 = (await import("p5")).default;
        // initialize the sketch
        new p5((p) => {
          Sketch(
            p,
            parentRef.current,
            Math.min(550, 0.8 * window.innerWidth),
            data
          );
          p5instance = p;
        });
      } catch (error) {
        console.log(error);
      }
    };

    initP5();

    // when the component unmounts, remove the p5 instance.
    return () => {
      if (p5instance) {
        p5instance.remove();
      }
    };
  }, [isMounted, Sketch]);

  // parent div of the p5 canvas
  return <div ref={parentRef} className={styles.container}></div>;
}
