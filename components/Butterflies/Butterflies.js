"use client";

import styles from "@/components/Butterflies/butterflies.module.css";
import SketchContainer from "@/components/SketchContainer/SketchContainer";
import Content from "@/components/Content/Content";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import LogoutButton from "@/components/LogoutButton/LogoutButton";
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
      <div className={styles.outerContainer}>
        <Header>
          <LogoutButton />
        </Header>
        <main className={styles.container}>
          <SketchContainer data={audioFeatures} />
          <Content tracks={topTracks} />
        </main>
        <Footer />
      </div>
    )
  );
}
