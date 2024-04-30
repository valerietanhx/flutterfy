"use client";

import styles from "@/components/ErrorButton/errorButton.module.css";
import { useRouter } from "next/navigation";

export default function ErrorButton(props) {
  const router = useRouter();
  return (
    <button
      className={styles.errorButton}
      type="button"
      onClick={() => router.push("/")}
    >
      {props.children}
    </button>
  );
}
