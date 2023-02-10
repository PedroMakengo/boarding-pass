import styles from "./styles.module.css";

import qrCodeImage from "../../assets/images/qrCode.svg";

export function BoardingInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.boarding}>
        <ul>
          <li>
            <span>Embarque</span>
            <time title="16h:15">16:15</time>
          </li>
          <li>
            <span>Terminal</span>
            <strong>2</strong>
          </li>
          <li>
            <span>Portão</span>
            <strong>15</strong>
          </li>
        </ul>
      </div>
      <div className={styles.qrCode}>
        <div>
          <img src={qrCodeImage} />
        </div>
        <span>Grupo de embarque: 3</span>
      </div>
      <footer>
        <p>
          <strong>Atenção</strong>: o portão fecha <time>16:45</time>
        </p>
      </footer>
    </div>
  );
}
