import React from 'react';
import styles from "../Category/CategoryStyles.module.css"
const SkeletonCategory = () => {
    return (
      <>
        <div className={styles.categorySlideImage}>
          <img
            src="../../../public/headphone1.png"
            width={120}
            height={120}
            alt=""
          />
        </div>
        <div className={styles.categorySlideContent}>
          <h3 className={styles.categoryTitle}>Laptop</h3>
          <p className={styles.categoryQuantity}>3 sản phẩm</p>
        </div>
      </>
    );
};

export default SkeletonCategory;