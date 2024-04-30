"use client";

import { Instrument_Serif } from "next/font/google";
import NotFoundButton from "@/components/NotFoundButton/NotFoundButton";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

export default function NotFound() {
  return (
    <div className="notFoundContainer">
      <h1 className={`${instrumentSerif.className} notFound`}>404 Not Found</h1>

      <NotFoundButton />
    </div>
  );
}
