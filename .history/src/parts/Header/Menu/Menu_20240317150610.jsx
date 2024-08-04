import React, { useEffect, useRef, useState } from "react";
import styles from "./MenuStyles.module.css";
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
        <div ref={menuMobileRef} className={`${styles.navMenuWrapper}`}>
          <div className={styles.headerMenuItemCategory}>
            <span className={styles.headerMenuItem}>
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
            <li>
              <NavLink to={'/sanpham'} onClick={handleRedirectLink}>
                  Sản phẩm
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Menu;
