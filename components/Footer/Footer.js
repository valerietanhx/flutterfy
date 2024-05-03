import spotifyLogo from "@/components/Footer/spotify-logo.svg";
import styles from "@/components/Footer/footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Image src={spotifyLogo} alt="Spotify logo" className={styles.logo}></Image>
    </div>
  );
}
