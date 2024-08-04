import React from 'react';
import styles from "../Account/AccountStyles.module.css"

const SkeletonProfile = () => {
    return (
      <div className={styles.profile}>
        <div className={`skeleton ${styles.profileImage}`}></div>
        <form className={styles.profileContent}>
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

          <div className={`skeleton btnCustom ${styles.skeletonbtnCustom}`}></div>
        </form>
      </div>
    );
};

export default SkeletonProfile;