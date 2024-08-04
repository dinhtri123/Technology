import React, { useEffect, useRef, useState } from "react";
import styles from "./MenuStyles.module.css";
import { dataMenu } from "./dataMenu";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useMedia } from "../../../hooks/useMedia";
import request from "../../../utils/request";
import { useToggle } from "../../../hooks/useToggle";

const Menu = ({menuMobileRef,subMenuRef,handleShowSubMenu, handleRedirectLink }) => {
  const [categroy, setCategory] = useState([]);
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
      <nav>
        <div
          ref={menuMobileRef}
          className={`${styles.navMenuWrapper} ${
            isTablet ? styles.popupContent : ""
          }`}
        >
          {isTablet && (
            <NavLink
              to={"/"}
              className={`${styles.menuHome} menuHome`}
              onClick={handleRedirectLink}
            >
              Trang chủ
            </NavLink>
          )}
          <div className={styles.headerMenuItemCategory}>
            <span
              className={styles.headerMenuItem}
              onClick={isTablet ? handleShowSubMenu : ""}
            >
              Danh mục
              <span>
                <Icon data-sub-icon icon="formkit:down" />
              </span>
            </span>
            {categroy.length > 0 && (
              <ul ref={subMenuRef} className={`${styles.headerMenuChildren}`}>
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
