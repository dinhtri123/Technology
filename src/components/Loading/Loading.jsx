import React from "react";
import styles from "./Loading.module.css"

const Loading = () => {
  return (
    <div className={styles.dotSpinner}>
      <div className={styles.dotSpinner__dot}></div>
      <div className={styles.dotSpinner__dot}></div>
      <div className={styles.dotSpinner__dot}></div>
      <div className={styles.dotSpinner__dot}></div>
      <div className={styles.dotSpinner__dot}></div>
      <div className={styles.dotSpinner__dot}></div>
      <div className={styles.dotSpinner__dot}></div>
      <div className={styles.dotSpinner__dot}></div>
    </div>
  );
};

export default Loading;
