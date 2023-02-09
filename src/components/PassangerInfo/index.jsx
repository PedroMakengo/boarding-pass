import styles from "./styles.module.css";

export function PassangerInfo() {
  return (
    <div className={styles.passagerInfo}>
      <div className={styles.userPassager}>
        <span>Passageiro</span>
        <strong>Rodrigo Terron</strong>
      </div>
      <div className={styles.positions}>
        <span>Assento</span>
        <strong>28A</strong>
      </div>
    </div>
  );
}
