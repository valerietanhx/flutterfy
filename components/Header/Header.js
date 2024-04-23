import LogoutButton from "../LogoutButton/LogoutButton";
import { Instrument_Serif } from "next/font/google";
import styles from "@/components/Header/header.module.css";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={`${instrumentSerif.className} ${styles.siteName}`}>Flutterfy</div>
      <LogoutButton />
    </div>
  );
}
