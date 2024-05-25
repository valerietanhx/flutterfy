import styles from "@/components/Track/track.module.css";

export default function Track(props) {
  const rank = props.rank;
  const title = props.title;
  const url = props.url;
  const artist = props.artist;

  return (
    <a href={url} className={styles.track}>
      <div className={styles.rank}>{rank}</div>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.artist}>{artist}</p>
      </div>
    </a>
  );
}
