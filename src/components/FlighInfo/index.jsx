import { AirplaneInFlight } from "phosphor-react";

import styles from "./styles.module.css";

export function FlighInfo() {
  return (
    <div className={styles.flighInfo}>
      <header>
        <div className={styles.voo}>
          <span>Voo</span>
          <strong>R$995</strong>
        </div>
        <div className={styles.data}>
          <span>Data</span>
          <time title="23 de 05 de 2023">23/05/2023</time>
        </div>
      </header>
      <main>
        <div className={styles.goCity}>
          <span>São Paulo, Brasil</span>
          <strong>Gro</strong>
          <time title="Às 17:00">17:00</time>
        </div>
        <div className={styles.icon}>
          <AirplaneInFlight size={24} />
        </div>
        <div className={styles.endCity}>
          <span>São Paulo, Brasil</span>
          <strong>SFO</strong>
          <time title="Às 17:00">
            17:00 <sup>+1</sup>
          </time>
        </div>
      </main>
    </div>
  );
}
