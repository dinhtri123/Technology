import React from 'react';
import styles from "../Account/AccountStyles.module.css"

const SkeletonOrder = () => {
    return (
      <tr>
        <td className={`skeleton ${styles.skeletonOrderItem}`}></td>
        <td className={`skeleton ${styles.skeletonOrderItem}`}></td>
        <td className={`skeleton ${styles.skeletonOrderItem}`}></td>
        <td className={`skeleton ${styles.skeletonOrderItem}`}></td>
        <td className={`skeleton ${styles.skeletonOrderItem}`}></td>
      </tr>
    );
};

export default SkeletonOrder;