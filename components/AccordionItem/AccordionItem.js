"use client";

import styles from "@/components/AccordionItem/accordionItem.module.css";
import { useState, useRef, useEffect } from "react";

// https://stackoverflow.com/questions/64214329/how-to-use-transition-effect-on-accordion
// https://chat.stackoverflow.com/rooms/253412/discussion-between-magnus-and-emiel-zuurbier
// lots of learning to be done here!
export default function AccordionItem(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const collapseRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const { height } = contentRef.current.getBoundingClientRect();
    collapseRef.current.style.maxHeight = `${height}px`;
    if (!isExpanded) {
      requestAnimationFrame(() => {
        collapseRef.current.style.maxHeight = "0px";
      });
    }
  }, [isExpanded]);

  return (
    <div>
      <div className={styles.title} onClick={() => setIsExpanded(!isExpanded)}>
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
