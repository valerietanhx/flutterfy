"use client";

import ErrorPage from "@/components/ErrorPage/ErrorPage";

export default function NotFound() {
  return (
    <ErrorPage
      spotifyEmbedUrl="https://open.spotify.com/embed/track/2sTOL1uzMEkB5iFNXe6ehJ?utm_source=generator&theme=0"
      message="Oops! We can't find what you're looking for..."
      buttonMessage="Take me home"
    />
  );
}