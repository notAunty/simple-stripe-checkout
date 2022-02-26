import CenterPage from "../components/Center-page";
import styles from "./Cancelled.module.css";

export default () => {
  return (
    <CenterPage>
      <div className={styles.card}>
        <div className={styles.inner_card}>
          <i className={styles.checkmark}>✘</i>
        </div>
        <h1>Canceled</h1>
        <p>
          The payment was cancelled.
          <br />
          Nothing was charged.
        </p>
      </div>
    </CenterPage>
  );
};
