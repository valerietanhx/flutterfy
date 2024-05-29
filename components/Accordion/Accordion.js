import styles from "@/components/Accordion/accordion.module.css";
import AccordionItem from "@/components/AccordionItem/AccordionItem";

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
            The butterfly's <span className="bold">size</span> represents the
            track's <span className="bold">rank</span>. The higher the track's
            rank, the bigger the butterfly.
          </li>

          <li>
            The butterfly's <span className="bold">x-coordinate</span>{" "}
            represents the track's <span className="bold">danceability</span>.
            The higher the track's danceability, the greater the x-coordinate of
            the butterfly.
          </li>

          <li>
            The butterfly's <span className="bold">y-coordinate</span>{" "}
            represents the track's <span className="bold">energy</span>. The
            higher the track's energy, the greater the y-coordinate of the
            butterfly.
          </li>

          <li>
            The butterfly's <span className="bold">top wing colour</span>{" "}
            represents the track's <span className="bold">acousticness</span>.
            The higher the track's likeliness of being acoustic, the closer the
            top wing colour is to the end of the rainbow.
          </li>

          <li>
            The butterfly's <span className="bold">bottom wing colour</span>{" "}
            represents the track's <span className="bold">valence</span>{" "}
            (musical positiveness). The higher the track's valence, the closer
            the bottom wing colour is to the end of the rainbow.
          </li>

          <li>
            The butterfly's <span className="bold">wing-flapping speed</span>{" "}
            represents the track's <span className="bold">tempo</span>. The
            faster the track, the faster the butterfly.
          </li>
        </ol>

        <p>
          You can learn more about the audio features Spotify provides in their{" "}
          <a href="https://developer.spotify.com/documentation/web-api/reference/get-audio-features">
            documentation
          </a>
          .
        </p>
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
        <p>
          For more details, you can check out this site's{" "}
          <a href="https://github.com/valerietanhx/flutterfy">GitHub repo</a>.
        </p>
      </AccordionItem>
      <AccordionItem title="Why butterflies?">
        <p>
          "Spotify" and "butterfly" sounded similar to me, so I thought a little
          website with their portmanteau as its name would be nice. I was also
          inspired by <a href="https://receiptify.herokuapp.com/">Receiptify</a>
          , which visualises your Spotify top tracks as a receipt, and generally
          interested in pursuing a data art / visualisation project. From there
          came the idea of visualising Spotify top tracks as butterflies!
        </p>
        <p>
          Sadly, Spotify doesn't allow third-party apps to start with "Spot" or
          sound / look like "Spotify", so I had to go for a different name that
          doesn't sound like a portmanteau of "Spotify" and "butterfly". Stuck
          with the concept, though :)
        </p>
      </AccordionItem>
    </div>
  );
}
