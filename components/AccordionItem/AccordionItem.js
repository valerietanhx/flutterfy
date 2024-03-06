import styles from "@/components/AccordionItem/accordionItem.module.css";
import { useState } from "react";

export default function AccordionItem(props) {
  const summary = props.summary;
  const details = props.details;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div
        className={styles.summary}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {summary}
      </div>
      {isExpanded && <div className={styles.details}>{details}</div>}
    </div>
  );
}
