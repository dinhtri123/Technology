import React, { useContext } from 'react';
import { ThemeContext } from '../../../../context/ThemeContext';
import styles from './Information.module.css'

const Information = () => {
    const themes = useContext(ThemeContext);
    return (
      <div
        className={`${styles.information} tabWrapper ${themes.activeSidebar ? "activeSidebar" : ""}`}
      >
        <h2>Thông tin của tôi</h2>
        <div className={styles.inforWrapper}>
            <div className={styles.inforImg}></div>
        </div>
      </div>
    );
};

export default Information;