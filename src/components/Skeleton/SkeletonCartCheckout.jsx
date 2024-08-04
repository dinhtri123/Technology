import React from 'react';
import styles from "../Cart/CartStyles.module.css";

const SkeletonCartCheckout = () => {
    return (
      <>
        <div className={` ${styles.cartTotalItem}`}>
          <span className={` skeleton ${styles.skeletoncartTotalItem}`}></span>
        </div>
        <div className={`${styles.cartTotalItem}`}>
          <span className={` skeleton ${styles.skeletoncartTotalItem}`}></span>
        </div>
        <div className={` ${styles.coupon}`}>
          <span className={` skeleton ${styles.skeletoncoupon}`}></span>
        </div>
        <div className={` ${styles.cartTotalItem}`}>
          <span className={` skeleton ${styles.skeletoncartTotalItem}`}></span>
        </div>
        <div className={`${styles.cartTotalButton} ${styles.skeletoncartTotalButton}`}>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </div>
      </>
    );
};

export default SkeletonCartCheckout;