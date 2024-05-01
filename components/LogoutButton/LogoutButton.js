"use client";

import { useRouter } from "next/navigation";
import styles from "@/components/LogoutButton/logoutButton.module.css";
import { logout } from "@/actions/logout";

export default function LogoutButton() {
  const router = useRouter();
  return (
    <button
      className={styles.logoutButton}
      type="button"
      onClick={() => {
        logout();
        const url = "https://accounts.spotify.com/logout";
        const side = window.outerHeight / 2;
        const spotifyLogoutWindow = window.open(
          url,
          "Log out of Spotify",
          `toolbar=no, location=no, width=${side},height=${side},top=${
            (screen.height - side) / 3 // account for browser header
          },left=${(screen.width - side) / 2}`
        );
        setTimeout(() => {
          spotifyLogoutWindow.close();
        }, 2000);
        router.refresh();
      }}
    >
      Log out
    </button>
  );
}
