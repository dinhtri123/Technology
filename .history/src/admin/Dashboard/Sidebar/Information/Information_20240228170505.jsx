import React, { useContext } from 'react';
import { ThemeContext } from '../../../../context/ThemeContext';
import styles from './Information.module.css';
import { Icon } from "@iconify/react";
import Input from '../../Components/Input/Input';

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
              <img src="../..//user-2.png" alt="" />
            </span>
            <span className={styles.avatarIcon}>
              <Icon icon="solar:camera-broken" />
            </span>
          </div>
          <div className={styles.inforContent}>
            <Input
              type="text"
              label={"user"}
              name={"user"}
              placeholder={"admin"}
            />
            <Input
              type="text"
              label={"name"}
              name={"name"}
              placeholder={"Phạm Đình Trí"}
            />
            <Input
              type="text"
              label={"name"}
              name={"name"}
              placeholder={"Phạm Đình Trí"}
            />
          </div>
        </div>
      </div>
    );
};

export default Information;