import styles from "@/components/Accordion/accordion.module.css";
import AccordionItem from "@/components/AccordionItem/AccordionItem";
import { Instrument_Sans } from "next/font/google";

const instrumentSans = Instrument_Sans({ weight: ["600"], subsets: ["latin"] });

export default function Accordion() {
  return (
    <div className={styles.accordion}>
      {/* would be neater to write in a separate data file,
      e.g. import faq from "./faq.json" then map,
      but not sure how to manage html elements, e.g. lists*/}

      <AccordionItem title="How does the visualisation work?">
        <p>
          Each butterfly corresponds to a top track and seven of its audio
          features provided by Spotify.
        </p>
        <ol>
          <li>
            The butterfly's{" "}
            <span className={instrumentSans.className}>size</span> represents
            the track's <span className={instrumentSans.className}>rank</span>.
            The higher the track's rank, the bigger the butterfly.
          </li>

          <li>
            The butterfly's{" "}
            <span className={instrumentSans.className}>x-coordinate</span>{" "}
            represents the track's{" "}
            <span className={instrumentSans.className}>danceability</span>. The
            higher the track's danceability, the greater the x-coordinate of the
            butterfly.
          </li>

          <li>
            The butterfly's{" "}
            <span className={instrumentSans.className}>y-coordinate</span>{" "}
            represents the track's{" "}
            <span className={instrumentSans.className}>energy</span>. The higher
            the track's energy, the greater the y-coordinate of the butterfly.
          </li>

          <li>
            The butterfly's{" "}
            <span className={instrumentSans.className}>top wing colour</span>{" "}
            represents the track's{" "}
            <span className={instrumentSans.className}>acousticness</span>.
          </li>

          <li>
            The butterfly's{" "}
            <span className={instrumentSans.className}>bottom wing colour</span>{" "}
            represents the track's{" "}
            <span className={instrumentSans.className}>valence</span>.
          </li>

          <li>
            The butterfly's{" "}
            <span className={instrumentSans.className}>
              wing-flapping speed
            </span>{" "}
            represents the track's{" "}
            <span className={instrumentSans.className}>tempo</span>. The faster
            the track, the faster the butterfly.
          </li>
        </ol>
      </AccordionItem>
      <AccordionItem title="How was this website built?">
        <p>
          This website was built using <a href="https://nextjs.org/">Next.js</a>{" "}
          and <a href="https://p5js.org/">p5.js</a>. It also relies on{" "}
          <a href="https://developer.spotify.com/documentation/web-api">
            Spotify's Web API
          </a>{" "}
          to get users' top tracks and their audio features.
        </p>
      </AccordionItem>
    </div>
  );
}
