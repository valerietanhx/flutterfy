"use client"

import styles from "@/components/Butterflies/butterflies.module.css";
import SketchContainer from "@/components/SketchContainer/SketchContainer";
import Sketch from "@/components/Sketch/Sketch";
import Content from "@/components/Content/Content";
import Header from "@/components/Header/Header";
import useSpotifyApi from "@/hooks/useSpotifyApi";

export default function Butterflies(props) {
  const access_token = props.access_token;
  const options = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  const topTracks = useSpotifyApi(
    "https://api.spotify.com/v1/me/top/tracks",
    options,
    "items",
    []
  );

  const audioFeatures = useSpotifyApi(
    topTracks
      ? `https://api.spotify.com/v1/audio-features?ids=${Object.keys(topTracks)
          .map((d) => topTracks[d]["id"])
          .join()}`
      : "",
    options,
    "audio_features",
    [topTracks]
  );

  return (
    audioFeatures && (
      <>
        <Header />
        <main className={styles.container}>
          <SketchContainer sketch={Sketch} data={audioFeatures} />
          <Content tracks={topTracks} />
        </main>
      </>
    )
  );
}
