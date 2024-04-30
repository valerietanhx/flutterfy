import styles from "@/components/Content/content.module.css";
import Accordion from "@/components/Accordion/Accordion";
import Song from "@/components/Song/Song";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

export default function Content(props) {
  const songs = props.songs;
  const titles = songs.map((song) => song["name"]);
  const artists = songs
    .map((s) => s["artists"])
    .map((artists) => artists.map((artist) => artist.name))
    .map((names) => names.join(", "));

  return (
    <div className={styles.container}>
      <h1 className={`${instrumentSerif.className} ${styles.title}`}>
        Your top songs as butterflies!
      </h1>
      <div className={styles.songContainer}>
        {titles.map((title, idx) => (
          <Song rank={idx + 1} title={title} artist={artists[idx]} />
        ))}
      </div>
      <Accordion />
    </div>
  );
}
