import React, { useEffect, useRef, useState } from "react";
import styles from "./MenuStyles.module.css";
import { dataMenu } from "./dataMenu";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useMedia } from "../../../hooks/useMedia";
import request from "../../../utils/request";
import { useToggle } from "../../../hooks/useToggle";

const Menu = ({ activeMenuMb, handleCloseMenu, handleRedirectLink }) => {
  const [categroy, setCategory] = useState([]);
  const [activeMenu, toggle, setToggle] = useToggle();
  const [isTablet] = useMedia();
  useEffect(() => {
    const fetchDataCategory = async () => {
      const repsonse = await request.get("categogy");
      setCategory(repsonse.data);
    };
    fetchDataCategory();
  }, []);
  return (
    <>
      <nav
        className={`${isTablet ? styles.popupWrapper : ""} ${
          activeMenuMb ? `${styles.active} ${styles.navActive}` : ""
        }`}
      >
        {isTablet && <div className={`bg-opacity`}></div>}

        <div
          className={`${styles.navMenuWrapper} ${
            isTablet ? styles.popupContent : ""
          }`}
        >
          {isTablet && (
            <div className={styles.menuTitlepopup}>
              <h3>Menu</h3>
              <span
                className={styles.btnCloseMenu}
                onClick={activeMenu ? () => setToggle(false) : handleCloseMenu}
              >
                {activeMenu ? (
                  <Icon icon="icon-park-outline:left" />
                ) : (
                  <Icon icon="iconamoon:close" />
                )}
              </span>
            </div>
          )}
          <div className={styles.headerMenuItemCategory}>
            <span
              className={styles.headerMenuItem}
              onClick={isTablet ? () => setToggle(true) : ""}
            >
              Danh mục <Icon icon="formkit:down" />
            </span>
            {categroy.length > 0 && (
              <ul
                className={`${styles.headerMenuChildren} ${
                  activeMenu ? styles.active : ""
                }`}
              >
                {categroy.map((item) => (
                  <li key={item.id}>
                    <NavLink to={item.path}>{item.title}</NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <ul className={`${styles.headerMenu} header-menu`}>
            {dataMenu.length > 0 &&
              dataMenu.map((item) => (
                <li key={item.id}>
                  <NavLink to={item.path} onClick={handleRedirectLink}>
                    {item.title} {item.icon ? <Icon icon={item.icon} /> : ""}
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Menu;
