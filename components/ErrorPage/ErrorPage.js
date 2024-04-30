"use client";

import { Instrument_Serif } from "next/font/google";
import ErrorButton from "@/components/ErrorButton/ErrorButton";
import styles from "@/components/ErrorPage/errorPage.module.css"

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

export default function ErrorPage(props) {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorSpotifyEmbedContainer}>
        <iframe
          className={styles.errorSpotifyEmbed}
          src={props.spotifyEmbedUrl}
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      <h1 className={`${instrumentSerif.className} ${styles.error}`}>{props.message}</h1>

      <ErrorButton>{props.buttonMessage}</ErrorButton>
    </div>
  );
}
