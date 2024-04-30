"use client"

import styles from "@/components/AccordionItem/accordionItem.module.css";
import { useState } from "react";

export default function AccordionItem(props) {
  const title = props.title;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div
        className={styles.title}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {title}
      </div>
      {isExpanded && <div className={styles.details}>{props.children}</div>}
    </div>
  );
}
