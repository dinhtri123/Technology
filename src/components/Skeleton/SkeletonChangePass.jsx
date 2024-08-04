import React from 'react';
import styles from "../Account/AccountStyles.module.css"

const SkeletonChangePass = () => {
    return (
      <div className={`${styles.password} ${styles.skeletonpassword}`}>
        <form action="">
          <div
            className={`${styles.profileContentItem} ${styles.skeletonprofileContentItem}`}
          >
            <div className="skeleton"></div>
            <div className="skeleton"></div>
          </div>
          <div
            className={`${styles.profileContentItem} ${styles.skeletonprofileContentItem}`}
          >
            <div className="skeleton"></div>
            <div className="skeleton"></div>
          </div>
          <div
            className={`${styles.profileContentItem} ${styles.skeletonprofileContentItem}`}
          >
            <div className="skeleton"></div>
            <div className="skeleton"></div>
          </div>
          <div
            className={`skeleton btnCustom ${styles.skeletonbtnCustom}`}
          ></div>
        </form>
      </div>
    );
};

export default SkeletonChangePass;