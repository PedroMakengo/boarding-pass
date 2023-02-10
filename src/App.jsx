import { FlighInfo } from "./components/FlighInfo";
import { PassangerInfo } from "./components/PassangerInfo";
import { BoardingInfo } from "./components/BoardingInfo";

import styles from "./styles/App.module.css";

export function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.boardingPass}>
        <header>
          <span>Cartão de embarque</span>
        </header>
        <article className={styles.ticket}>
          <header>
            <FlighInfo />
          </header>
          <div className={styles.passager}>
            <PassangerInfo />
          </div>
          <div className={styles.booardingInfo}>
            <BoardingInfo />
          </div>
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
