"use client";

import styles from "@/components/AccordionItem/accordionItem.module.css";
import { useState, useRef, useEffect } from "react";

// https://stackoverflow.com/questions/64214329/how-to-use-transition-effect-on-accordion
// https://chat.stackoverflow.com/rooms/253412/discussion-between-magnus-and-emiel-zuurbier
// lots of learning to be done here!
export default function AccordionItem(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const titleRef = useRef();
  const collapseRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    const { height } = contentRef.current.getBoundingClientRect();
    collapseRef.current.style.maxHeight = `calc(${height}px + 5rem)`;
    collapseRef.current.style.padding = "3rem 2rem 2rem 2rem";
    collapseRef.current.style.marginBottom = "0";
    titleRef.current.style.borderRadius = "8px 8px 0 0";
    if (!isExpanded) {
      requestAnimationFrame(() => {
        collapseRef.current.style.maxHeight = "0px";
        collapseRef.current.style.padding = "0 2rem";
        collapseRef.current.style.marginBottom = "1rem";
        titleRef.current.style.borderRadius = "8px";
      });
    }
  }, [isExpanded]);

  return (
    <div>
      <div
        ref={titleRef}
        className={styles.title}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {props.title}
      </div>
      <div ref={collapseRef} className={styles.contentWrapper}>
        <div ref={contentRef} className={styles.content}>
          {props.children}
        </div>
      </div>
    </div>
  );
}
