import React, { useContext } from 'react';
import { ThemeContext } from '../../../../context/ThemeContext';

const Information = () => {
    const themes = useContext(ThemeContext);
    return (
      <div
        className={`tabWrapper ${themes.activeSidebar ? "activeSidebar" : ""}`}
      >
        <h2>Thông tin của tôi</h2>
      </div>
    );
};

export default Information;