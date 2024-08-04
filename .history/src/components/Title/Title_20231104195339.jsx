import React from 'react';
import styles from "./TitleStyles.module.css"
const Title = ({ className, children, childrenSubtitle, src }) => {
  return (
    <>
      <div className={`${styles.title} ${className}`}>
        <p className={styles.subTitle}>
          <img src={src} width={25} height={25} alt="icon" />
          {childrenSubtitle}
        </p>
        <h2>{children}</h2>
      </div>
    </>
  );
};

export default Title;