import styles from "@/components/Song/song.module.css";

export default function Song(props) {
  const rank = props.rank;
  const title = props.title;
  const artist = props.artist;

  return (
    <div className={styles.card}>
      <div className={styles.rank}>{rank}</div>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.artist}>{artist}</p>
      </div>
    </div>
  );
}
