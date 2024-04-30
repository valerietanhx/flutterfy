"use client";

import styles from "@/components/NotFoundButton/notFoundButton.module.css";
import { useRouter } from "next/navigation";

export default function NotFoundButton() {
  const router = useRouter();
  return (
    <button
      className={styles.notFoundButton}
      type="button"
      onClick={() => router.push("/")}
    >
      Take me home
    </button>
  );
}
