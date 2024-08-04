import React, { useState } from 'react';
import styles from "./LoginStyles.module.css";
import { Icon } from "@iconify/react";
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';


const Login = ({ activeLogin, handleCloseLogin, handleShowSignUp }) => {
  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  return (
    <div
      className={`${styles.login} ${activeLogin ? styles.active : ""}`}>
      <div className={`bg-opacity`}></div>
      <div className={styles.loginWrapper}>
        <div
          className={`clickBtn ${styles.LoginBtnClose}`}
          onClick={handleCloseLogin}
        >
          <Icon icon="ion:close" />
        </div>
        <h3 className={styles.loginTitle}>Đăng Nhập</h3>
        <form className={styles.loginForm}>
          <Input type="email" name={"email"} placeholder={"Địa chỉ email"}>
            <Icon icon="solar:user-linear" />
          </Input>
          <Input
            type={showPass ? "text" : "password"}
            name={"password"}
            placeholder={"Mật khẩu"}
            IconPass={true}
            handleShowPass={handleShowPass}
            showPass={showPass}
          >
            <Icon icon="simple-line-icons:lock" />
          </Input>
          <Button>Đăng nhập</Button>
        </form>
        <p className={styles.loginForgetPass}>Quên mật khẩu?</p>
        <div className={styles.loginSocial}>
          <p className={styles.loginTextOr}>hoặc</p>
          <div className={styles.loginSocialBtn}>
            <div className={styles.loginSocialItem}>
              <Icon icon="devicon:google" />
              Google
            </div>
            <div className={styles.loginSocialItem}>
              <Icon icon="logos:facebook" />
              Facebook
            </div>
          </div>
        </div>
        <div className={styles.logintoCreate}>
          <p>
            Bạn chưa có tài khoản?{" "}
            <span onClick={handleShowSignUp}>Đăng ký</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;