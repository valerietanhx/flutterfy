"use client";

import { useRouter } from "next/navigation";
import styles from "@/components/LoginButton/loginButton.module.css";

export default function LoginButton() {
  const router = useRouter();

  return (
    <button
      className={styles.loginButton}
      type="button"
      onClick={() => router.push("/login")}
    >
      Log into Spotify
    </button>
  );
}
