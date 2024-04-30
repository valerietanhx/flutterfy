"use client";

import ErrorPage from "@/components/ErrorPage/ErrorPage";

// TODO: test

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <ErrorPage
          spotifyEmbedUrl="https://open.spotify.com/embed/track/0d6ckKhnm32elAg8AbaRgq?utm_source=generator&theme=0"
          message="Oh no, something went wrong. Clear your cookies and have another go..."
          buttonMessage="Try again"
        />
      </body>
    </html>
  );
}
