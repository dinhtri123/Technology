import React, { useState } from "react";
import styles from "./LoginStyles.module.css";
import { Icon } from "@iconify/react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";

const SignUp = ({ activeSignUp, handleCloseLogin, handleShowLogin }) => {
  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <div className={`${styles.login} ${activeSignUp ? styles.active : ""}`} data-login>
      <div className={`bg-opacity ${styles.loginOpacity}`}></div>
      <div className={styles.loginWrapper}>
        <div
          className={`clickBtn ${styles.LoginBtnClose}`}
          onClick={handleCloseLogin}
        >
          <Icon icon="ion:close" />
        </div>
        <h3 className={styles.loginTitle}>Đăng Ký</h3>
        <form className={styles.loginForm}>
          <Input type="text" name={"fullName"} placeholder={"Họ và tên"}>
            <Icon icon="solar:user-linear" />
          </Input>
          <Input
            type="email"
            name={"emailSignUp"}
            placeholder={"Địa chỉ email"}
          >
            <Icon icon="iconamoon:email-light" />
          </Input>
          <Input
            type={showPass ? "text" : "password"}
            name={"passwordSignUp"}
            placeholder={"Mật khẩu"}
            IconPass={true}
            handleShowPass={handleShowPass}
            showPass={showPass}
          >
            <Icon icon="simple-line-icons:lock" />
          </Input>
          <Button>Đăng Ký</Button>
        </form>
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
            Bạn đã có tài khoản?{" "}
            <span onClick={handleShowLogin}>Đăng nhập</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
