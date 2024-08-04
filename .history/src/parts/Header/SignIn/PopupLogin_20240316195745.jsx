import React from 'react';
import styles from './LoginStyles.module.css'

const PopupLogin = () => {
    return (
      <div className={`${styles.accountPopup}`}>
        <div className={`bg-opacity`}></div>
        <div
          className={`${styles.accountPopupInner}  ${
            activeAccount ? styles.active : ""
          }`}
        >
          <span
            className={styles.accountPopupClose}
            onClick={() => setActiveAccount(false)}
          >
            <Icon icon="ep:circle-close-filled" />
          </span>
          <h3>
            Vui lòng đăng nhập tài khoản để xem ưu đãi và thanh toán dễ dàng hơn
          </h3>
          <div className={`btnTwoAction`}>
            <Button
              onClick={() => {
                setSignUp(true);
                setActiveAccount(false);
              }}
            >
              Đăng ký
            </Button>
            <Button
              onClick={() => {
                setLogin(true);
                setActiveAccount(false);
              }}
            >
              Đăng nhập
            </Button>
          </div>
        </div>
      </div>
    );
};

export default PopupLogin;