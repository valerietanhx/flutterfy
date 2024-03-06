import styles from "@/components/Butterflies/butterflies.module.css";
import useSpotifyAPI from "@/utils/useSpotifyAPI";
import SketchContainer from "@/components/SketchContainer";
import Sketch from "@/components/Sketch";
import Content from "@/components/Content/Content";

export default function Butterflies(props) {
  const access_token = props.access_token;
  const options = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  const topSongs = useSpotifyAPI(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term",
    options,
    "items",
    []
  );
  const audioFeatures = useSpotifyAPI(
    topSongs
      ? `https://api.spotify.com/v1/audio-features?ids=${Object.keys(topSongs)
          .map((d) => topSongs[d]["id"])
          .join()}`
      : "",
    options,
    "audio_features",
    [topSongs]
  );

  return (
    audioFeatures && (
      <main className={styles.container}>
        <SketchContainer sketch={Sketch} data={audioFeatures} />
        <Content />
      </main>
    )
  );
}
