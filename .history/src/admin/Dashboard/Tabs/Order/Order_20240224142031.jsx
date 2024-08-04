import React, { useContext, useState } from 'react';
import styles from './Order.module.css';
import { ThemeContext } from "../../../../context/ThemeContext";


const Order = () => {
  const themes = useContext(ThemeContext);
  // const [activeTab, setActiveTab] = useState("Tất cả");
  // const handleActiveTab = (tab) => {
  //   setActiveTab(tab)
  // }
  // console.log(activeTab)
    return (
      <div
        className={`${styles.order} tabWrapper ${
          themes.activeSidebar ? "activeSidebar" : ""
        }`}
      >
        <h2>Quản lý đơn hàng</h2>
        <div className={styles.orderContent}>
          <div className={styles.orderTab}>
            <TabItem activeTab={activeTab}>
              Tất cả
            </TabItem>
            <TabItem >
              Chờ xử lý
            </TabItem>
            <TabItem>
              Đang giao hàng
            </TabItem>
            <TabItem>
              Hoàn thành
            </TabItem>
          </div>
        </div>
      </div>
    );
};

export default Order;


function TabItem({ children, activeTab, handleActiveTab }) {

  const handleClick = (e) => {
    handleActiveTab(children)
  };
  return (
    <span
      className={`${styles.tabItem} ${
        activeTab == children ? styles.active : ""
      }`}
      onClick={handleClick}
    >
      {children}
    </span>
  );
}