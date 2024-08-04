import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./SidebarStyles.module.css";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { ThemeContext } from "../../../context/ThemeContext";

const Sidebar = () => {
  const [activeDrodown, setActiveDropdown] = useState(false);
  const themes = useContext(ThemeContext);
  const menuItemParentRef = useRef();
  const location = useLocation();
  const [url, setUrl] = useState('');
  const [activeMenu, setActiveMenu] = useState('');
  useEffect(() => {
    if (location.pathname == "/admin/dashboard") {
      setUrl("Dashboard");
    }
    if (location.pathname == "/admin/dashboard/addProduct") {
      setUrl("Thêm sản phẩm");
    }
    if (location.pathname == "/admin/dashboard/productlist") {
      setUrl("Quản lý sản phẩm");
    }
    if (location.pathname == "/admin/dashboard/AddCategory") {
      setUrl("Thêm danh mục");
    }
    if (location.pathname == "/admin/dashboard/AddParams") {
      setUrl("Thêm thông số");
    }
    if (location.pathname == "/admin/dashboard/AddAttr") {
      setUrl("Thêm thuộc tính");
    }
    if (location.pathname == "/admin/dashboard/Order") {
      setUrl("Quản lý đơn hàng");
    }
    if (location.pathname == "/admin/dashboard/Customer") {
      setUrl("Quản lý khách hàng");
    }
  }, [location]);
  useEffect(() => {
    // lưu giá trị active tab khi reload page
    setActiveMenu(url);
  },[url])
  const handleClickAccountUser = (e) => {
    const getNextElm = e.currentTarget.nextElementSibling;
    if (getNextElm.style.maxHeight) {
      getNextElm.style.maxHeight = null;
      setActiveDropdown(false);
    } else {
      getNextElm.style.maxHeight = getNextElm.scrollHeight + "px";
      setActiveDropdown(true);
    }
  };
  const handleClickActiveMenu = (e) => {
    setActiveMenu(e.currentTarget.textContent);
  }
  return (
    <>
      <div
        className={`${styles.header} ${
          themes.activeSidebar ? styles.activeCollapse : ""
        }`}
      >
        <div className={styles.headerSearch}>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Tìm kiếm"
          />
          <span className={styles.searchIcon}>
            <Icon icon="iconoir:search" />
          </span>
        </div>
        <div className={styles.headerAccount}>
          <span className={styles.accountNotiIcon}>
            <Icon icon="zondicons:notification" />
          </span>
          <div className={styles.accountUser}>
            <div
              className={styles.accountUserContent}
              onClick={handleClickAccountUser}
            >
              <span className={styles.userImage}>
                <img src="..//user-2 1.png" alt="" />
              </span>
              <span className={styles.userName}>Đình Trí</span>
              <span className={styles.userIcon}>
                <Icon icon="icon-park-outline:down" />
              </span>
            </div>
            <div
              className={`${styles.accountUserDropdown} ${
                activeDrodown ? styles.active : ""
              }`}
            >
              <div className={styles.accountUserDropdownName}>
                <span>
                  Chào mừng Admin! <b>Đình Trí</b>
                </span>
              </div>
              <div className={styles.accountUserProfile}>
                <span>My Profile</span>
                <span>
                  <Icon icon="solar:user-bold" />
                </span>
              </div>
              <div className={styles.accountUserProfile}>
                <span>Log Out</span>
                <span>
                  <Icon icon="solar:logout-2-bold" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.sidebar} ${
          themes.activeSidebar ? styles.activeCollapse : ""
        }`}
      >
        <div className={styles.sidebarTop}>
          <Link
            to={"/"}
            className={`${styles.sidebarTopLogo} ${
              themes.activeSidebar ? styles.activeCollapse : ""
            }`}
          >
            <img src="..//Logo.png" alt="" />
          </Link>
          <span className={styles.sidebarTopIconMenu}>
            <input
              id="checkbox"
              type="checkbox"
              onClick={themes.handleToggleSidebar}
            />
            <label className={styles.toggleMenu} htmlFor="checkbox">
              <div id={styles.bar1} className={styles.bars}></div>
              <div id={styles.bar2} className={styles.bars}></div>
              <div id={styles.bar3} className={styles.bars}></div>
            </label>
          </span>
        </div>
        <div className={styles.sidebarMenu}>
          <Link
            to={"/admin/dashboard"}
            className={`${styles.sidebarMenuItem} ${
              activeMenu == "Dashboard" ? styles.activeMenu : ""
            }`}
            onClick={handleClickActiveMenu}
          >
            <span className={styles.sidebarMenuItemIcon}>
              <Icon icon="iconamoon:category-light" />
            </span>
            <span
              className={`${styles.sidebarMenuItemLabel} ${
                themes.activeSidebar ? styles.activeLabelCollapse : ""
              }`}
            >
              Dashboard
            </span>
          </Link>
          <Link
            to={"/admin/dashboard/productlist"}
            className={`${styles.sidebarMenuItem} ${
              activeMenu == "Quản lý sản phẩm" ? styles.activeMenu : ""
            }`}
            onClick={handleClickActiveMenu}
          >
            <span className={styles.sidebarMenuItemIcon}>
              <Icon icon="iconoir:add-folder" />
            </span>
            <span
              ref={menuItemParentRef}
              className={`${styles.sidebarMenuItemLabel} ${
                themes.activeSidebar ? styles.activeLabelCollapse : ""
              }`}
            >
              Quản lý sản phẩm
            </span>
          </Link>
          <Link
            to={"/admin/dashboard/addProduct"}
            className={`${styles.sidebarMenuItem} ${
              activeMenu == "Thêm sản phẩm" ? styles.activeMenu : ""
            }`}
            onClick={handleClickActiveMenu}
          >
            <span className={styles.sidebarMenuItemIcon}>
              <Icon icon="fluent:cube-add-20-regular" />
            </span>
            <span
              className={`${styles.sidebarMenuItemLabel} ${
                themes.activeSidebar ? styles.activeLabelCollapse : ""
              }`}
            >
              Thêm sản phẩm
            </span>
          </Link>
          <Link
            to={"/admin/dashboard/AddCategory"}
            className={`${styles.sidebarMenuItem} ${
              activeMenu == "Thêm danh mục" ? styles.activeMenu : ""
            }`}
            onClick={handleClickActiveMenu}
          >
            <span className={styles.sidebarMenuItemIcon}>
              <Icon icon="solar:widget-add-broken" />
            </span>
            <span
              className={`${styles.sidebarMenuItemLabel} ${
                themes.activeSidebar ? styles.activeLabelCollapse : ""
              }`}
            >
              Thêm danh mục
            </span>
          </Link>
          <Link
            to={"/admin/dashboard/AddParams"}
            className={`${styles.sidebarMenuItem} ${
              activeMenu == "Thêm thông số" ? styles.activeMenu : ""
            }`}
            onClick={handleClickActiveMenu}
          >
            <span className={styles.sidebarMenuItemIcon}>
              <Icon icon="solar:add-circle-broken" />
            </span>
            <span
              className={`${styles.sidebarMenuItemLabel} ${
                themes.activeSidebar ? styles.activeLabelCollapse : ""
              }`}
            >
              Thêm thông số
            </span>
          </Link>
          <Link
            to={"/admin/dashboard/AddAttr"}
            className={`${styles.sidebarMenuItem} ${
              activeMenu == "Thêm thuộc tính" ? styles.activeMenu : ""
            }`}
            onClick={handleClickActiveMenu}
          >
            <span className={styles.sidebarMenuItemIcon}>
              <Icon icon="solar:add-square-broken" />
            </span>
            <span
              className={`${styles.sidebarMenuItemLabel} ${
                themes.activeSidebar ? styles.activeLabelCollapse : ""
              }`}
            >
              Thêm thuộc tính
            </span>
          </Link>

          <Link
            to={"/admin/dashboard/Order"}
            className={`${styles.sidebarMenuItem} ${
              activeMenu == "Quản lý đơn hàng" ? styles.activeMenu : ""
            }`}
            onClick={handleClickActiveMenu}
          >
            <span className={styles.sidebarMenuItemIcon}>
              <Icon icon="solar:notification-unread-lines-outline" />
            </span>
            <span
              className={`${styles.sidebarMenuItemLabel} ${
                themes.activeSidebar ? styles.activeLabelCollapse : ""
              }`}
            >
              Quản lý đơn hàng
            </span>
          </Link>
          <Link
            to={"/admin/dashboard/Customer"}
            className={`${styles.sidebarMenuItem} ${
              activeMenu == "Quản lý khách hàng" ? styles.activeMenu : ""
            }`}
            onClick={handleClickActiveMenu}
          >
            <span className={styles.sidebarMenuItemIcon}>
              <Icon icon="solar:user-check-broken" />
            </span>
            <span
              className={`${styles.sidebarMenuItemLabel} ${
                themes.activeSidebar ? styles.activeLabelCollapse : ""
              }`}
            >
              Quản lý khách hàng
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
