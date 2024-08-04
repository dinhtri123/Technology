import React from 'react';
import styles from "../News/NewsStyles.module.css"
const SkeletonNewsItemSmall = () => {
    return (
      <div className={styles.newsPageViewsItem}>
        <div className={`skeleton ${styles.newsPageViewsItemImage}`}></div>
        <div className={styles.newsPageViewsItemRight}>
          <h4 className={`skeleton`}></h4>
          <div className={`skeleton ${styles.newsPageViewsItemRightDate}`}></div>
        </div>
      </div>
    );
};

export default SkeletonNewsItemSmall;