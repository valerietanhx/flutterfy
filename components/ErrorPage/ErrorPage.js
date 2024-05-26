import ErrorButton from "@/components/ErrorButton/ErrorButton";
import Header from "@/components/Header/Header";
import styles from "@/components/ErrorPage/errorPage.module.css";

export default function ErrorPage(props) {
  return (
    <div className={styles.outerContainer}>
      <Header>
        <pre className={styles.butterfly}>
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣶⣿⣿⡿⠟⠛⠉⠉⠙⠻⣿⣿⣿⣿⣆
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣿⡿⠟⢻⣿⣦⣤⣤⣤⣤⣤⣤⣿⣿⣿⣿⣿
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣿⣿⣿⣿⣦⣶⠿⢿⣿⡉⠁⠀⠀⠀⢨⣿⣿⣿⣿⣿
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⠿⠛⠉⢁⣀⣠⡽⠷⣿⣿⠟⠒⠒⢶⣶⣾⣿⣿⣿⣿⠏
          ⠈⠓⢤⡀⠀⠘⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣾⣿⡟⠉⣠⠴⠒⠉⠉⠀⠀⢀⣀⣼⣿⣄⣀⣀⣿⣿⣿⣿⣿⣿⠏⠀
          ⠀⠀⠀⠉⠳⢄⡈⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣛⡿⠁⠀⠀⠀⢀⣠⡶⠚⠉⠁⠀⠈⢿⡀⠀⣽⣿⣿⣿⣿⡟⠁⠀⠀
          ⠀⠀⠀⠀⠀⠀⠉⠳⢄⡑⢦⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⠋⠀⠉⠀⠀⢀⣠⣴⣿⣷⣶⣶⣦⣤⣤⣤⣾⣷⣤⣿⣿⣿⣿⡿⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⢷⣄⠀⠀⠀⠀⠀⣠⣾⣿⣿⠃⠀⠀⣠⣴⣾⠿⠟⠛⢿⣿⣟⠉⠉⠉⠉⠻⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣙⣧⡀⠀⠀⣴⣿⣿⠋⠀⢀⣴⡿⠛⠁⠀⠀⣀⣠⠴⠿⠿⣷⣶⠶⠶⠶⠾⠿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣷⣾⣿⣿⠁⢸⣀⣿⠟⠀⢀⣠⡶⠛⠉⣀⣀⣀⣀⣠⣿⣦⡀⠀⠀⠀⠸⣿⣿⣿⣿⡄⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⢿⣿⣿⣿⡇⠀⢨⣿⡿⠖⠛⠛⠛⠾⣏⣉⣁⠀⠀⠀⠈⠙⣿⡟⠋⠛⠒⠲⠿⣿⣿⣿⣧⡀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣄⣀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠛⠒⠾⣿⣿⣤⣀⡀⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⠿⣦⣍⠙⠻⠶⢶⣤⣤⣤⣤⡤⠤⠤⣴⣿⣧⠀⠀⠉⠙⠺⣿⣿⣿⣿⠃⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⡇⠘⢿⡝⠲⣄⠀⠙⢷⣌⡙⠲⢤⣀⠀⢹⡿⠛⠶⣤⣀⣼⣿⣿⣿⣿⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠉⠹⡄⠀⠹⣦⡈⠙⢦⣀⠈⠻⣦⣀⠈⠙⢿⣷⣄⠀⠀⠉⢻⣿⣿⣿⡇⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢦⡀⠈⢻⣄⠀⠙⠷⣄⠀⠙⠳⣄⣀⣿⠉⠛⢦⣴⣿⣿⣿⣿⠇⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠢⣄⠙⣷⡀⠀⠈⢷⡀⠀⠈⢿⣷⣀⠀⣸⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠾⣿⣦⠀⠀⠹⣦⣠⡾⠈⢹⣷⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠓⠦⠤⠈⠿⠤⠴⠿⠿⠿⠿⠃⠀⠀⠀⠀⠀⠀⠀⠀
        </pre>
      </Header>
      <div className={styles.errorContainer}>
        <div className={styles.errorSpotifyEmbedContainer}>
          <iframe
            className={styles.errorSpotifyEmbed}
            src={props.spotifyEmbedUrl}
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        <h1 className={styles.error}>
          {props.message}
        </h1>

        <ErrorButton>{props.buttonMessage}</ErrorButton>
      </div>
    </div>
  );
}
