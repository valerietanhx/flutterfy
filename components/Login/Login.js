import styles from "@/components/Login/login.module.css";
import { useRouter } from "next/navigation";
import { Instrument_Serif } from "next/font/google";
import { Instrument_Sans } from "next/font/google";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"] });
const instrumentSans = Instrument_Sans({ weight: "400", subsets: ["latin"] });

export default function Login() {
  const router = useRouter();
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
      <main className={styles.container}>
        <h1 className={`${instrumentSerif.className} ${styles.title}`}>
          Flutterfy
        </h1>
        <h2 className={`${instrumentSans.className} ${styles.description}`}>
          Visualise your Spotify top songs as butterflies.
        </h2>
        <button
          className={styles.loginButton}
          type="button"
          onClick={() => router.push("/login")}
        >
          Login to Spotify
        </button>
      </main>
    </>
  );
}
