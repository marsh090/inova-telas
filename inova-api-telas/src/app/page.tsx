import styles from "./page.module.css";
import CardLogin from "./components/CardLogin/CardLogin.js";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>
      <header>
        <h1 className="styles.title">Inovaweek</h1>
      </header>
      <CardLogin />
      <div className={styles.grid}></div>
    </main>
  );
}
