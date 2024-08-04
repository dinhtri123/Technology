import React, { useState } from 'react';
import styles from './LoginStyles.module.css'
import Input from '../../components/Input/Input';
import { Icon } from "@iconify/react";
import Button from '../../components/Button/Button';

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
    return (
      <div className={styles.login}>
        <div className={styles.loginWrapper}>
          <h2>Chào mừng bạn đến với trang quản trị</h2>
          <h3>Đăng nhập</h3>
          <form action="" className={styles.form}>
            <Input name={"name"} placeholder={"Tên người dùng"}>
              <Icon icon="mingcute:user-4-fill" />
            </Input>
            <Input
              type={showPass ? "text" : "password"}
              name={"password"}
              placeholder={"Nhập mật khẩu"}
              IconPass={true}
              handleShowPass={handleShowPass}
              showPass={showPass}
            >
              <Icon icon="solar:lock-password-broken" />
            </Input>
            <a href="#" className={styles.formForgetPass}>
              Quên mật khẩu?
            </a>
            <Button>Đăng nhập</Button>
          </form>
        </div>
      </div>
    );
};

export default Login;      