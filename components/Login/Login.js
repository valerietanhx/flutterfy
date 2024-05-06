import styles from "@/components/Login/login.module.css";
import { Instrument_Serif } from "next/font/google";
import LoginButton from "@/components/LoginButton/LoginButton";
import Modal from "@/components/Modal/Modal";
import Banner from "@/components/Banner/Banner";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });

export default function Login() {
  return (
    <>
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
      <Modal />
      <Banner />
      <main className={styles.container}>
        <h1 className={`${instrumentSerif.className} ${styles.title}`}>
          Flutterfy
        </h1>
        <h2 className={styles.description}>
          Visualise your Spotify top tracks as butterflies.
        </h2>
        <LoginButton />
      </main>
    </>
  );
}
