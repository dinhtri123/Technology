import React, { useContext } from 'react';
import { ThemeContext } from '../../../../context/ThemeContext';
import styles from './Customer.module.css';

const Customer = () => {
    const themes = useContext(ThemeContext);
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
                <th>Tên</th>
                <th>Ngày tạo</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className={styles.userImage}>
                    <img src="../..//user-2 1.png" alt="" />
                  </span>
                  <span>dinhtri123</span>
                </td>
                <td>
                    Phạm Đình Trí
                </td>
                <td>
                    28/02/2024 14:25 PM
                </td>
                <td>
                    dinhtriqs111@gmail.com
                </td>
                <td>Xem chi tiết</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Customer;