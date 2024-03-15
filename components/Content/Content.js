import styles from "@/components/Content/content.module.css";
import Accordion from "@/components/Accordion/Accordion";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

export default function Content(props) {
  const songs = props.songs;
  const titles = songs.map((song) => song["name"]);
  const artists = songs
    .map((s) => s["artists"])
    .map((artists) => artists.map((artist) => artist.name))
    .map((names) => names.join(", "));

  const pairs = titles.map((title, idx) => title + " — " + artists[idx]);

  return (
    <div>
      <h1 className={`${instrumentSerif.className} ${styles.title}`}>
        Your top songs as butterflies!
      </h1>
      {pairs.map((pair) => (
        <p>{pair}</p>
      ))}
      <Accordion />
    </div>
  );
}
