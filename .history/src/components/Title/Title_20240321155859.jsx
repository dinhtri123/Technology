import React from 'react';
import styles from "./TitleStyles.module.css"
const Title = ({ className, children, childrenSubtitle, icon }) => {
  return (
    <>
      <div className={`${styles.title} ${className}`}>
        <p className={styles.subTitle}>
          <span>{icon}</span>
          {childrenSubtitle}
        </p>
        <h2>{children}</h2>
      </div>
    </>
  );
};

export default Title;