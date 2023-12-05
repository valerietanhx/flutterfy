"use client";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import querystring from "querystring";
import useHash from "@/utils/useHash";

export default function Home() {
  const router = useRouter();

  const hash = useHash();
  const access_token = querystring.parse(hash)["access_token"];
  // const refresh_token = querystring.parse(hash)["refresh_token"]

  if (hash) {
    // need to figure data fetching + rendering out
    router.push(`/spotify?access_token=${access_token}`);
  }

  return (
    <main className={styles.main}>
      <h1>Flutterfy</h1>
      <h2>Visualise your Spotify top songs as butterflies.</h2>
      {
        // shift stuff into a component
        // i think even the h1 and h2 belong into the "login" component. they're not reused
        // u know what u want this to look like :p
        hash ? (
          <h1>Authorised!</h1>
        ) : (
          <button
            className={styles.login}
            type="button"
            onClick={() => router.push("/login")}
          >
            Login to Spotify
          </button>
        )
      }
    </main>
  );
}
