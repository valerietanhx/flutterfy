import styles from "@/app/page.module.css";
import { useRouter } from "next/navigation";

// there's probably a better way of handling all the css; to fix

export default function Login() {
    const router = useRouter();
  return (
    <>
      <h1>Flutterfy</h1>
      <h2>Visualise your Spotify top songs as butterflies.</h2>
      <button
        className={styles.login}
        type="button"
        onClick={() => router.push("/login")}
      >
        Login to Spotify
      </button>
    </>
  );
}
