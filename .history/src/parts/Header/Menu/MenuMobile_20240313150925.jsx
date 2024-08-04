import React from "react";
import styles from "./MenuStyles.module.css";
import { useMediaMobile } from "../../../hooks/useMedia";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const MenuMobile = () => {
  const [isMobile] = useMediaMobile();
  return (
    <>
      {isMobile && (
        <>
          <div className={styles.menuSticky}>
            <Link
              to={"/"}
              className={`${styles.menuStickyItem} ${styles.active}`}
            >
              <Icon icon="heroicons:home" />
              Trang chủ
            </Link>
            <div className={styles.menuStickyItem}>
              <span>
                <Icon icon="mage:dashboard" />
                Danh mục
              </span>
            </div>
            <Link to={"/sanpham"} className={styles.menuStickyItem}>
              <Icon icon="clarity:store-solid" />
              Cửa hàng
            </Link>
            <div className={styles.menuStickyItem}>
              <span>
                <Icon icon="material-symbols:account-circle-outline" />
                Tài khoản
              </span>
            </div>
            <div className={styles.menuStickyItem}>
              <span>
                <Icon icon="iconoir:more-horiz-circle" />
                Thêm
              </span>
            </div>
          </div>
          <div className={styles.categoryPopupWrapper}>
            <div className={styles.categoryPopupWrapperTitle}>
              <h3>
                Danh mục sản phẩm <Icon icon="iconamoon:close-light" />
              </h3>
            </div>
            <div className={styles.categoryPopup}>
              <div className={styles.categoryList}>
                <span className={styles.categoryListItem}>
                  <span>
                    <img src="..//img_cate_1.jpg" alt="" />
                  </span>
                  Laptop
                </span>
                <span className={styles.categoryListItem}>Điện thoại</span>
                <span className={styles.categoryListItem}>Tai nghe</span>
                <span className={styles.categoryListItem}>Phụ kiện</span>
              </div>
              <div className={styles.categoryContent}>
                <div className={styles.categoryContentItem}></div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MenuMobile;
