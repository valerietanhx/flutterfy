import styles from "@/components/Content/content.module.css";
import Accordion from "@/components/Accordion/Accordion"
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

export default function Content() {
  return (
    <div>
      <h1 className={`${instrumentSerif.className} ${styles.title}`}>
        Your top songs as butterflies!
      </h1>
      <p>Here's some explanatory text.</p>
      <Accordion />
    </div>
  );
}
