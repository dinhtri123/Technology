import React, { useState } from 'react';
import styles from "./AccountStyles.module.css";
import { Icon } from "@iconify/react";
import { dataList } from './DataTabList';
import Profile from './ContentTab/Profile';
import Address from './ContentTab/Address';
import Order from './ContentTab/Order';
import ChangePassword from './ContentTab/ChangePassword';
const AccountPage = () => {
    const [activeItem, setActiveItem] = useState("Hồ sơ")
    const handleActiveTab = (e) => {
        setActiveItem(e)
    }
    return (
      <div className={styles.accountPage}>
        <div className={`container ${styles.accountPageWrapper}`}>
          <ul className={styles.accountPageList}>
            {dataList.length > 0 &&
              dataList.map((item) => (
                <li
                  key={item.id}
                  className={activeItem == item.title ? styles.active : ""}
                  onClick={() => handleActiveTab(item.title)}
                >
                  <Icon icon={item.icon} />
                  {item.title}
                </li>
              ))}
          </ul>
          <div className={styles.accountPageContent}>
            {activeItem == "Hồ sơ" && <Profile></Profile>}
            {activeItem == "Dashboard" && <></>}
            {activeItem == "Địa chỉ" && <Address></Address>}
            {activeItem == "Đơn hàng" && <Order></Order>}
            {activeItem == "Thay đổi mật khẩu" && <ChangePassword></ChangePassword>}
          </div>
        </div>
      </div>
    );
};

export default AccountPage;