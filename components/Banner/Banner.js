import styles from "@/components/Banner/banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      App in development mode; contact{" "}
      <a href="mailto:valerietanhx@gmail.com">valerietanhx@gmail.com</a> for
      access 🤍
    </div>
  );
}
