import React from 'react';
import styles from './LoginStyles.module.css';
import { Icon } from "@iconify/react";
import Button from '../../../components/Button/Button';

const PopupLogin = ({ activeAccount, handleClosePopup, handleClickSignUp, handleClickSignIn }) => {
console.log("🚀 ~ PopupLogin ~ handleClickSignUp:", handleClickSignUp)

  return (
    <>
      {activeAccount && (
        <div className={`${styles.accountPopup}`}>
          <div className={`bg-opacity`}></div>
          <div
            className={`${styles.accountPopupInner}  ${
              activeAccount ? styles.active : ""
            }`}
          >
            <span
              className={styles.accountPopupClose}
              onClick={handleClosePopup}
            >
              <Icon icon="ep:circle-close-filled" />
            </span>
            <h3>
              Vui lòng đăng nhập tài khoản để xem ưu đãi và thanh toán dễ dàng
              hơn
            </h3>
            <div className={`btnTwoAction`}>
              <Button
                onClick={handleClickSignUp}
              >
                Đăng ký
              </Button>
              <Button
                onClick={handleClickSignIn}
              >
                Đăng nhập
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupLogin;