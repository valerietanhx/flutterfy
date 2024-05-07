import styles from "@/components/Content/content.module.css";
import Accordion from "@/components/Accordion/Accordion";
import Track from "@/components/Track/Track";

export default function Content(props) {
  const tracks = props.tracks;
  const titles = tracks.map((track) => track["name"]);
  const artists = tracks
    .map((s) => s["artists"])
    .map((artists) => artists.map((artist) => artist.name))
    .map((names) => names.join(", "));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Your top tracks as butterflies!
      </h1>
      <div className={styles.trackContainer}>
        {titles.map((title, idx) => (
          <Track
            key={idx + 1}
            rank={idx + 1}
            title={title}
            artist={artists[idx]}
          />
        ))}
      </div>
      <Accordion />
    </div>
  );
}
