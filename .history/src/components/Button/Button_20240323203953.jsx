import React, { useRef } from 'react';
import styles from "./ButtonStyles.module.css";
import { Icon } from "@iconify/react";

const Button = ({ children, className, onClick }) => {
  return (
    <>
      <button
        className={`clickBtn ${styles.button} ${className}`}
        onClick={onClick}
      >
        <span className={styles.btnText}>{children}</span>
        {children == "Mua ngay" || children == "Thêm giỏ hàng" ? (
          <span className={styles.btnHover}>
            <Icon icon="icons8:add-shopping-cart" />
          </span>
        ) : (
          <span className={styles.btnHover}>{children}</span>
        )}
      </button>
    </>
  );
};

export default Button;