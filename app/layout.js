import { Instrument_Sans } from "next/font/google";

import "./globals.css";

const instrumentSans = Instrument_Sans({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Flutterfy",
  description:
    "A website that visualises your Spotify top tracks as butterflies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦋</text></svg>"
        />
      </head>
      <body className={instrumentSans.className}>{children}</body>
    </html>
  );
}
