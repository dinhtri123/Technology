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
  const [toggle, handleToggle] = useToggle();
  const [isTablet] = useMedia();
  const [isActiveSubmenu, setIsActiveSubmenu] = useState(false);
  useEffect(() => {
    const fetchDataCategory = async () => {
      const repsonse = await request.get("categogy");
      setCategory(repsonse.data);
    };
    fetchDataCategory();
  }, []);
  const handleClickSubmenu = () => {
    handleToggle;
  };
  const handleCloseSubMenu = () => {
    setIsActiveSubmenu(false);
  };
  return (
    <>
      <nav
        className={`${isTablet ? "popupWrapper" : ""} ${
          activeMenuMb ? `active ${styles.navActive}` : ""
        }`}
      >
        {isTablet && <div className={`bg-opacity`}></div>}

        <div
          className={`${styles.navMenuWrapper} ${
            isTablet ? "popupContent" : ""
          }`}
        >
          {isTablet && (
            <div className={styles.menuTitlepopup}>
              <h3>Menu</h3>
              <span
                className={styles.btnCloseMenu}
                onClick={isActiveSubmenu ? handleCloseSubMenu : handleCloseMenu}
              >
                {isActiveSubmenu ? (
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
              onClick={isTablet ? handleClickSubmenu : ""}
            >
              Danh mục <Icon icon="formkit:down" />
            </span>
            {categroy.length > 0 && (
              <ul
                className={`${styles.headerMenuChildren} ${
                  isActiveSubmenu ? styles.active : ""
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
