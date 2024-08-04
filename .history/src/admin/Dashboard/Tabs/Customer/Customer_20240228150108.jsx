import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../../../context/ThemeContext';
import styles from './Customer.module.css';
import { Icon } from "@iconify/react";

const Customer = () => {
    const themes = useContext(ThemeContext);
    const [showPopup, setShowPopup] = useState(false)
    const handleCloseViewCustomer = () => {
        setShowPopup(false)
    };
    const handleSetShowPopupDetail = () => {
        setShowPopup(true);
    }
    return (
      <div
        className={`${styles.customer} tabWrapper ${
          themes.activeSidebar ? "activeSidebar" : ""
        }`}
      >
        <h2>Quản lý khách hàng</h2>
        <div className={styles.customerList}>
          <table>
            <thead>
              <tr>
                <th>Tên người dùng</th>
                <th>Họ & tên</th>
                <th>Ngày tạo</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className={styles.userImage}>
                    <img src="../../../../../public/user-2 1.png" alt="" />
                  </span>
                  <span>dinhtri123</span>
                </td>
                <td>Phạm Đình Trí</td>
                <td>28/02/2024 14:25 PM</td>
                <td>dinhtriqs111@gmail.com</td>
                <td
                  className={styles.viewCustomerDetail}
                  onClick={handleSetShowPopupDetail}
                >
                  Xem chi tiết
                </td>
              </tr>
              <tr>
                <td>
                  <span className={styles.userImage}>
                    <img src="../../../../../public/user-2 1.png" alt="" />
                  </span>
                  <span>dinhtri123</span>
                </td>
                <td>Phạm Đình Trí</td>
                <td>28/02/2024 14:25 PM</td>
                <td>dinhtriqs111@gmail.com</td>
                <td className={styles.viewCustomerDetail}>Xem chi tiết</td>
              </tr>
            </tbody>
          </table>
          {showPopup && (
            <div className={`${styles.popupDetail}`}>
              <div className={`${styles.popupWrapper}`}>
                <div className={styles.popupDetailTitle}>
                  <h3>Thông tin khách hàng</h3>
                  <span
                    className={styles.popupViewClose}
                    onClick={handleCloseViewCustomer}
                  >
                    <Icon icon="iconamoon:close-duotone" />
                  </span>
                </div>
                <div className={styles.popupContent}>
                  <div className={styles.inforItem}>
                    <b>Tên người dùng: </b> <span>dinhtri123</span>
                  </div>
                  <div className={styles.inforItem}>
                    <b>Họ & tên: </b> <span>Phạm Đình Trí</span>
                  </div>
                  <div className={styles.inforItem}>
                    <b>Số điện thoại: </b> <span>012 345 678</span>
                  </div>
                  <div className={styles.inforItem}>
                    <b>Email: </b> <span>dinhtriqs111@gmail.com</span>
                  </div>
                  <div className={styles.inforItem}>
                    <b>Ngày tạo: </b> <span>28/02/2024 14:25PM</span>
                  </div>
                  <div className={styles.inforItem}>
                    <b>Ngày sinh: </b> <span>10/06/2001</span>
                  </div>
                  <div className={styles.inforItem}>
                    <b>Địa chỉ: </b> <span>Tổ 2, thôn Tam Hòa, TT Đông Phú, huyện Quế Sơn, tỉnh Quảng Nam</span>
                  </div>
                </div>
                <h4>Thông tin đơn hàng</h4>
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

export default Customer;