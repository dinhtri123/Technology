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
        <h2>Quản lý đơn hàng</h2>
      </div>
    );
};

export default Customer;