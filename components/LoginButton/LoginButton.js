"use client";

import { useRouter } from "next/navigation";
import styles from "@/components/LoginButton/loginButton.module.css";

function LoginButton() {
  const router = useRouter();

  return (
    <button
      className={styles.loginButton}
      type="button"
      onClick={() => router.push("/login")}
    >
      Login to Spotify
    </button>
  );
}

export default LoginButton;
