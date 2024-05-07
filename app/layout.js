import { Instrument_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  weight: ["400", "600"],
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Flutterfy",
  description:
    "A website that visualises your Spotify top tracks as butterflies.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${instrumentSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
