import { Instrument_Sans } from "next/font/google";

import "./globals.css";

const instrumentSans = Instrument_Sans({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Flutterfy",
  description:
    "A website that visualises your Spotify top songs as butterflies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={instrumentSans.className}>{children}</body>
    </html>
  );
}
