import React, { useContext, useState } from 'react';
import styles from './Order.module.css';
import { ThemeContext } from "../../../../context/ThemeContext";


const Order = () => {
  const themes = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState("Tất cả");
  const handleActiveTab = (tab) => {
    setActiveTab(tab)
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
              Đang xử lý
            </TabItem>
            <TabItem activeTab={activeTab} handleActiveTab={handleActiveTab}>
              Đang giao hàng
            </TabItem>
            <TabItem activeTab={activeTab} handleActiveTab={handleActiveTab}>
              Hoàn thành
            </TabItem>
          </div>
          <div className={styles.orderTabList}>
            <table>
              <thead>
                <tr>
                  <th>Mã đơn hàng</th>
                  <th>Tên khách hàng</th>
                  <th>Ngày tạo</th>
                  <th>Tình trạng</th>
                  <th>Tổng tiền</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1234</td>
                  <td>Phạm Đình Trí</td>
                  <td>27/02/2024 09:38 CH</td>
                  <td>Đang xử lý</td>
                  <td>200.000 VND</td>
                  <td>Xem chi tiết</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default Order;


function TabItem({ children, activeTab, handleActiveTab }) {

  const handleClick = () => {
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