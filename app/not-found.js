"use client";

import { Instrument_Serif } from "next/font/google";
import NotFoundButton from "@/components/NotFoundButton/NotFoundButton";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

export default function NotFound() {
  return (
    <div className="notFoundContainer">
      <div className="notFoundEmbedContainer">
        <iframe
          className="notFoundEmbed"
          src="https://open.spotify.com/embed/track/2sTOL1uzMEkB5iFNXe6ehJ?utm_source=generator&theme=0"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      <h1 className={`${instrumentSerif.className} notFound`}>
        Oops! We can't find what you're looking for...
      </h1>

      <NotFoundButton />
    </div>
  );
}
