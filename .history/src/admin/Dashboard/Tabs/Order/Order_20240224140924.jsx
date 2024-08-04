import React, { useContext, useState } from 'react';
import styles from './Order.module.css';
import { ThemeContext } from "../../../../context/ThemeContext";


const Order = () => {
  const themes = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState("Tất cả");
  
    return (
      <div
        className={`${styles.order} tabWrapper ${
          themes.activeSidebar ? "activeSidebar" : ""
        }`}
      >
        <h2>Quản lý đơn hàng</h2>
        <div className={styles.orderContent}>
          <div className={styles.orderTab}>
            <TabItem>Tất cả</TabItem>
            <TabItem>Chờ xử lý</TabItem>
            <TabItem>Đang giao hàng</TabItem>
            <TabItem>Hoàn thành</TabItem>
          </div>
        </div>
      </div>
    );
};

export default Order;


function TabItem({children, activeTab, }) {
    const handleActiveTab = (e) => {
      

    }
    return (
      <span
        className={`${styles.tabItem} ${activeTab == children ? styles.active : ''}`}
        data-id={children}
        onClick={handleActiveTab}
      >
        {children}
      </span>
    );
}