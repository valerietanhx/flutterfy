"use client"

import styles from "@/components/Butterflies/butterflies.module.css";
import SketchContainer from "@/components/SketchContainer/SketchContainer";
import Sketch from "@/components/Sketch/Sketch";
import Content from "@/components/Content/Content";
import Header from "@/components/Header/Header";
import useSpotifyApi from "@/utils/useSpotifyApi";

export default function Butterflies(props) {
  const access_token = props.access_token;
  const options = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  const topSongs = useSpotifyApi(
    "https://api.spotify.com/v1/me/top/tracks",
    options,
    "items",
    []
  );

  const audioFeatures = useSpotifyApi(
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
      <>
        <Header />
        <main className={styles.container}>
          <SketchContainer sketch={Sketch} data={audioFeatures} />
          <Content songs={topSongs} />
        </main>
      </>
    )
  );
}
