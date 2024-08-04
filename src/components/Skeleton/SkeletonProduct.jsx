import React from 'react';
import styles from "../Product/ProductStyles.module.css"

const SkeletonProduct = () => {
    return (
      <div>
        <div className={`skeleton ${styles.productImageWrapper}`}></div>
        <div className={`${styles.productContent}`}>
          <div
            className={` ${styles.productContentTop}`}
          >
            <h4 className={`skeleton ${styles.skeletonProductTopCategory}`}></h4>
            <div className={`skeleton ${styles.skeletonproductContentReview}`}></div>
          </div>
          <h3 className={`skeleton ${styles.productContentTitle}`}></h3>
          <div className={`${styles.productContentPrice}`}>
            <span className={`skeleton ${styles.skeletonpriceNew}`}></span>
            <span className={`skeleton ${styles.skeletonpriceOld}`}></span>
          </div>
          <div className={`skeleton ${styles.productActionBtn} ${styles.skeletonproductActionBtn}`}></div>
        </div>
      </div>
    );
};

export default SkeletonProduct;