import React, { useContext } from 'react';
import { ThemeContext } from '../../../../context/ThemeContext';

const Information = () => {
    const themes = useContext(ThemeContext);
    return (
      <div
        className={`tabWrapper ${themes.activeSidebar ? "activeSidebar" : ""}`}
      ></div>
    );
};

export default Information;