import React from 'react';
import styles from "../Cart/CartStyles.module.css"
const SkeletonCart = () => {
    return (
      <tr>
        <td
          className={`${styles.cartLeftProductImage} ${styles.skeletoncartLeftProductImage}`}
        >
          <div className={`skeleton`}></div>
        </td>
        <td className={styles.cartLeftProductTitle}>
          <h4
            className={`skeleton ${styles.skeletoncartLeftProductTitle}`}
          ></h4>
        </td>
        <td>
          <span className={`skeleton ${styles.skeletonCartLeftPrice}`}></span>
        </td>
        <td>
          <div className={`skeleton ${styles.inforCartProductQuantity}`}></div>
        </td>
        <td>
          <span className={`skeleton ${styles.skeletonCartLeftPrice}`}></span>
        </td>
        <td className={`${styles.trash}`}>
          <div className={`skeleton ${styles.skeletonTrash}`}></div>
        </td>
      </tr>
    );
};

export default SkeletonCart;