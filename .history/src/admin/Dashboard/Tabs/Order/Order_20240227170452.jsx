import React, { useContext, useState } from 'react';
import styles from './Order.module.css';
import { ThemeContext } from "../../../../context/ThemeContext";
import { Icon } from "@iconify/react";


const Order = () => {
  const themes = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState("Tất cả");
  const [showOrderView, setShowOrderView] = useState(false)
  const handleActiveTab = (tab) => {
    setActiveTab(tab)
  }
  const handleCloseViewOrder = () => {
    setShowOrderView(false);
  }
  const handleSetShowViewOrder = () => {
    setShowOrderView(true);
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
                  <td>27/02/2024 09:38 AM</td>
                  <td className={styles.processing}>
                    <span>Đang xử lý</span>
                  </td>
                  <td>200.000 VND</td>
                  <td
                    className={styles.viewDetailOrder}
                    onClick={handleSetShowViewOrder}
                  >
                    Xem chi tiết
                  </td>
                </tr>
                <tr>
                  <td>#1234</td>
                  <td>Phạm Đình Trí</td>
                  <td>27/02/2024 09:38 AM</td>
                  <td className={styles.delivery}>
                    <span>Đang giao hàng</span>
                  </td>
                  <td>200.000 VND</td>
                  <td className={styles.viewDetailOrder}>Xem chi tiết</td>
                </tr>
                <tr>
                  <td>#1234</td>
                  <td>Phạm Đình Trí</td>
                  <td>27/02/2024 09:38 AM</td>
                  <td className={styles.complete}>
                    <span>Hoàn thành</span>
                  </td>
                  <td>200.000 VND</td>
                  <td className={styles.viewDetailOrder}>Xem chi tiết</td>
                </tr>
              </tbody>
            </table>
            {showOrderView && (
              <div className={styles.orderViewWrapper}>
                <div className={styles.orderViewContent}>
                  <div className={styles.orderViewTop}>
                    <div className={styles.orderViewTopContent}>
                      <span>
                        Đơn hàng #1234 - <h3>Phạm Đình Trí</h3>
                      </span>
                      <div className={styles.processing}>
                        <span>Đang xử lý</span>
                      </div>
                    </div>
                    <span
                      className={styles.orderViewClose}
                      onClick={handleCloseViewOrder}
                    >
                      <Icon icon="iconamoon:close-duotone" />
                    </span>
                  </div>
                  <div className={styles.orderViewMain}>
                    <div className={styles.orderViewMainInfor}>
                      <div className={styles.orderViewMainInforItem}>
                        <h4>Thông tin khách hàng</h4>
                        <div>
                          <span>Phạm Đình Trí</span>
                          <span>0385394673</span>
                          <span>dinhtriqs111@gmail.com</span>
                          <span>Tổ 2, thôn Tam Hòa, TT Đông Phú, huyện Quế Sơn, tỉnh Quảng Nam</span>
                        </div>
                        <div className={styles.orderViewInforNote}>Ghi chú: <span>Gói trong 1 kiện hàng</span></div>
                      </div>
                      <div className={styles.orderViewMainInforItem}>
                        <div>
                          <h4>Phương thức giao hàng</h4>
                          <span>Giao hàng miễn phí</span>
                        </div>
                        <div>
                          <h4>Phương thức thanh toán</h4>
                          <span>Chuyển khoản ngân hàng</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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