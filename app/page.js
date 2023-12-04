"use client";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <h1>Flutterfy</h1>
      <h2>Visualise your Spotify top songs as butterflies.</h2>
      <button
        className={styles.login}
        type="button"
        onClick={() => router.push("/login")}
      >
        Login to Spotify
      </button>
    </main>
  );
}
