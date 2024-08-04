import React from 'react';
import styles from "../Checkout/CheckoutStyles.module.css"

const SkeletonCheckoutInfor = () => {
    return (
      <form action="">
        <div
          className={`${styles.checkoutLeftItem} ${styles.skeletoncheckoutLeftItem}`}
        >
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </div>
        <div
          className={`${styles.checkoutLeftItem} ${styles.skeletoncheckoutLeftItem}`}
        >
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </div>
        <div
          className={`${styles.checkoutLeftItem} ${styles.skeletoncheckoutLeftItem}`}
        >
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </div>
        <div
          className={`${styles.checkoutLeftItem} ${styles.skeletoncheckoutLeftItem}`}
        >
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </div>
        <div
          className={`${styles.checkoutLeftItem} ${styles.skeletoncheckoutLeftItem} ${styles.skeletoncheckoutLeftItemTextArea}`}
        >
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </div>
        <div className={`${styles.checkoutLeftItemButton} ${styles.skeletoncheckoutLeftItemButton} btnDoubleCustom`}>
            <span className="skeleton"></span>
            <span className="skeleton"></span>
        </div>
      </form>
    );
};

export default SkeletonCheckoutInfor;