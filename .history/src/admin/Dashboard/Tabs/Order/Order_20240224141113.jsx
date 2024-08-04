import React, { useContext, useState } from 'react';
import styles from './Order.module.css';
import { ThemeContext } from "../../../../context/ThemeContext";


const Order = () => {
  const themes = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState("Tất cả");
  const handleActiveTab = (this) => {
    console.log(this)
  }
    return (
      <div
        className={`${styles.order} tabWrapper ${
          themes.activeSidebar ? "activeSidebar" : ""
        }`}
      >
        <h2>Quản lý đơn hàng</h2>
        <div className={styles.orderContent}>
          <div className={styles.orderTab}>
            <TabItem activeTab={activeTab} handleActiveTab={handleActiveTab}>
              Tất cả
            </TabItem>
            <TabItem activeTab={activeTab} handleActiveTab={handleActiveTab}>
              Chờ xử lý
            </TabItem>
            <TabItem activeTab={activeTab} handleActiveTab={handleActiveTab}>
              Đang giao hàng
            </TabItem>
            <TabItem activeTab={activeTab} handleActiveTab={handleActiveTab}>
              Hoàn thành
            </TabItem>
          </div>
        </div>
      </div>
    );
};

export default Order;


function TabItem({ children, activeTab, handleActiveTab }) {
  const handleClick = () => {
    handleActiveTab(children);
  };
  return (
    <span
      className={`${styles.tabItem} ${
        activeTab == children ? styles.active : ""
      }`}
      data-id={children}
      onClick={handleClick}
    >
      {children}
    </span>
  );
}