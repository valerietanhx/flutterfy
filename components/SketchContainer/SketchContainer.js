"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "@/components/SketchContainer/sketchContainer.module.css";
import Sketch from "@/components/Sketch/Sketch";

// https://aleksati.net/posts/how-to-use-p5js-with-nextjs-in-2024
// with many annotations for learning purposes
export default function SketchContainer({ data }) {
  const parentRef = useRef();

  const [isMounted, setIsMounted] = useState(false);

  // on mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // without this line (i.e. without all the mounting-related code),
    // the canvas will render multiple times
    if (!isMounted) return;

    let p5instance;

    // https://stackoverflow.com/questions/74265321/uncaught-typeerror-destroy-is-not-a-function-error-in-react
    // useEffect does not like async in its declaration
    const initP5 = async () => {
      try {
        // https://shivanshbakshi.dev/blog/p5-react/integrate-p5-with-react/
        // "we only want to import p5 when the window object is defined.
        // To do so, we will import it inside a useEffect callback.
        // This callback function is only run during rendering, so
        // it won't be run on the server."
        const p5 = (await import("p5")).default;
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
        throw new Error(
          "An error occurred while rendering the butterfly visualisation."
        );
      }
    };

    initP5();

    // when the component unmounts, remove the p5 instance
    return () => {
      if (p5instance) {
        p5instance.remove();
      }
    };
  }, [isMounted, Sketch]);

  return <div ref={parentRef} className={styles.container}></div>;
}
