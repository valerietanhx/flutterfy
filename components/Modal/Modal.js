"use client";

import styles from "@/components/Modal/modal.module.css";
import { useState, useEffect } from "react";

export default function Modal() {
  const [open, setisOpen] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    setisOpen(!hasVisited);
  }, []);

  const closeModal = async () => {
    setisOpen((open) => !open);
    localStorage.setItem("hasVisited", true);
  };

  return (
    open && (
      <>
        <dialog className={styles.modal}>
          <h3 className={styles.greeting}>Hello!</h3>
          <p>
            This app is in <span className="bold">development mode</span>. This
            means only 25 users can use it.
          </p>
          <p>
            To try the app out, contact{" "}
            <a href="mailto:valerietanhx@gmail.com">valerietanhx@gmail.com</a>{" "}
            with the email associated with your Spotify account.
          </p>
          <button
            type="button"
            className={styles.modalButton}
            onClick={closeModal}
          >
            Got it
          </button>
        </dialog>
        <div className={styles.overlay}></div>
      </>
    )
  );
}
