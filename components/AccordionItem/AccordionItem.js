"use client";

import styles from "@/components/AccordionItem/accordionItem.module.css";
import { useState } from "react";

export default function AccordionItem(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div className={styles.title} onClick={() => setIsExpanded(!isExpanded)}>
        {props.title}
      </div>
      <div className={`${styles.content} ${isExpanded && styles.show}`}>
        {props.children}
      </div>
    </div>
  );
}
