import React, { useContext } from 'react';
import { ThemeContext } from '../../../../context/ThemeContext';
import styles from './Information.module.css';
import { Icon } from "@iconify/react";
import Input from '../../Components/Input/Input';
import { NavLink } from 'react-router-dom';

const Information = () => {
    const themes = useContext(ThemeContext);
    return (
      <div
        className={`${styles.information} tabWrapper ${
          themes.activeSidebar ? "activeSidebar" : ""
        }`}
      >
        <h2>Thông tin của tôi</h2>
        <div className={styles.inforWrapper}>
          <div className={styles.inforAvatar}>
            <span className={styles.avatarImg}>
              <img src="../../../../../public/user-2.png" alt="" />
            </span>
            <span className={styles.avatarIcon}>
              <Icon icon="solar:camera-broken" />
            </span>
          </div>
          <div className={styles.inforContent}>
            <Input
              type="text"
              label={"Tên người dùng"}
              name={"user"}
              placeholder={"admin"}
            />
            <Input
              type="text"
              label={"Họ & tên"}
              name={"name"}
              placeholder={"Phạm Đình Trí"}
            />
            <Input
              type="email"
              label={"Email"}
              name={"email"}
              placeholder={"dinhtriqs111@gmail.com"}
            />
            <Input type="password" label={"Mật khẩu cũ"} name={"password"} />
            <Input type="password" label={"Mật khẩu mới"} name={"password"} />
            <Input type="password" label={"Xác nhận mật khẩu"} name={"password"} />
          </div>
        </div>
      </div>
    );
};

export default Information;