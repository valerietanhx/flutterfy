"use client";

import { useRouter } from "next/navigation";
import styles from "@/components/LogoutButton/logoutButton.module.css";

function LogoutButton() {
  const router = useRouter();
  return (
    <button
      className={styles.logoutButton}
      type="button"
      onClick={() => {
        router.push("/logout");
        router.refresh();
      }}
    >
      Log out
    </button>
  );
}

export default LogoutButton;