import styles from "@/components/Header/header.module.css";

export default function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.siteName}>
        Flutterfy
      </div>
      {props.children}
    </header>
  );
}
