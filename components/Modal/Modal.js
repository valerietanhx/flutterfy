"use client";

import styles from "@/components/Modal/modal.module.css";
import { Instrument_Serif, Instrument_Sans } from "next/font/google";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });
const instrumentSans = Instrument_Sans({ weight: "600", subsets: ["latin"] });

export default function Modal() {
  const [open, setisOpen] = useState(true);

  const closeModal = () => {
    setisOpen((open) => !open);
  };

  return (
    open && (
      <>
        <dialog className={styles.modal}>
          <button type="button" className={styles.closeButton} onClick={closeModal}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <h3 className={`${instrumentSerif.className} ${styles.greeting}`}>
            Hello!
          </h3>
          <p>
            This app is in{" "}
            <span className={instrumentSans.className}>development mode</span>.
            This means only 25 users can use it.
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
