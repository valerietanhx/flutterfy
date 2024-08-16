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
  openGraph: {
    title: "Flutterfy",
    description:
      "A website that visualises your Spotify top tracks as butterflies.",
    url: "https://flutterfy-viz.vercel.app/",
    siteName: "Flutterfy",
    type: "website",
    images: [
      {
        url: "https://raw.githubusercontent.com/valerietanhx/flutterfy/main/app/og-card.png",
        secureUrl:
          "https://raw.githubusercontent.com/valerietanhx/flutterfy/main/app/og-card.png",
        width: 1200,
        height: 628,
        alt: "Preview image for Flutterfy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flutterfy",
    description:
      "A website that visualises your Spotify top tracks as butterflies.",
    images: {
      url: "https://raw.githubusercontent.com/valerietanhx/flutterfy/main/app/og-card.png",
      alt: "Preview image for Flutterfy",
    },
  },
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
