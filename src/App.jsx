import styles from "./styles/App.module.css";

export function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.boardingPass}>
        <header>
          <span>Cartão de embarque</span>
        </header>
        <article className={styles.ticket}>
          <h1>Ticket</h1>
        </article>
        <footer>
          <p>
            Qualquer problema procure o balcão de atendimento da sua companhia
            aérea
          </p>
        </footer>
      </div>
    </div>
  );
}
