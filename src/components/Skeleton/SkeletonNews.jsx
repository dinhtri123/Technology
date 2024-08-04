import React from 'react';
import styles from "../News/NewsStyles.module.css";

const SkeletonNews = () => {
    return (
      <div className={`${styles.news}`}>
        <div className={`skeleton ${styles.skeletonnewsImage}`}></div>
        <div className={`${styles.newsTop} ${styles.skeletonnewsTop}`}>
          <span className="skeleton"></span>
          <span className="skeleton"></span>
        </div>
        <div className={styles.newsContent}>
          <h3 className={`skeleton ${styles.skeletonnewsTitle}`}></h3>
          <p className={`skeleton ${styles.skeletonnewsDetail}`}></p>
        </div>
        <div className={`skeleton btnCustom ${styles.skeletonbtnNews}`}></div>
      </div>
    );
};

export default SkeletonNews;