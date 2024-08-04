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
                        <th>Tên khách hàng</th>
                        <th>Tên</th>
                    </tr>
                </thead>
            </table>
        </div>
      </div>
    );
};

export default Customer;