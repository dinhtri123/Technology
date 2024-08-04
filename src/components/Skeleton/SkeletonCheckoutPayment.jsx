import React from 'react';
import styles from '../Checkout/CheckoutStyles.module.css'

const SkeletonCheckoutPayment = () => {
    return (
      <div className={styles.checkoutProductItem}>
        <div
          className={`skeleton ${styles.checkoutProductItemImage} ${styles.skeletoncheckoutProductItemImage}`}
        ></div>
        <div
          className={`${styles.checkoutProductItemContent} ${styles.skeletoncheckoutProductItemContent}`}
        >
          <h4 className={`skeleton`}></h4>
          <p className={`skeleton`}></p>
          <span className={`skeleton`}></span>
        </div>
      </div>
    );
};

export default SkeletonCheckoutPayment;