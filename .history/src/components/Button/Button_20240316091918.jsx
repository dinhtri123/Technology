import React, { useRef } from 'react';
import styles from "./ButtonStyles.module.css";
import { Icon } from "@iconify/react";

const Button = ({ children, className, onClick }) => {
  return (
    <>
      <button className={`clickBtn ${styles.button} ${className}`}>
        <span className={styles.btnText} onClick={onClick}>
          {children}
        </span>
        {children == "Mua ngay" || children == "Xem chi tiết" ? (
          <span className={styles.btnHover}>
            <Icon icon="heroicons:shopping-bag" />
          </span>
        ) : (
          <span className={styles.btnHover}>{children}</span>
        )}
      </button>
    </>
  );
};

export default Button;