import React from 'react';
import styles from './MenuStyles.module.css'
import { useMediaMobile } from '../../../hooks/useMedia';
import { Link } from 'react-router-dom';
import { Icon } from "@iconify/react";

const MenuMobile = () => {
    const [isMobile] = useMediaMobile();
    return (
      <>
        {isMobile && (
          <div className={styles.menuSticky}>
            <div className={styles.menuStickyItem}>
              <Link to={"/"}>
                <Icon icon="system-uicons:home-door" />
                Trang chủ
              </Link>
            </div>
            <div className={styles.menuStickyItem}>
              <span>
                <Icon icon="mage:dashboard" />
                Danh mục
              </span>
            </div>
            <div className={styles.menuStickyItem}>
              <Link to={"/sanpham"}>
                <Icon icon="clarity:store-solid" />
                Cửa hàng
              </Link>
            </div>
            <div className={styles.menuStickyItem}>
              <span>
                <Icon icon="codicon:account" />
                Tài khoản
              </span>
            </div>
            <div className={styles.menuStickyItem}>
              <span>
                <Icon icon="ri:more-fill" />
                Thêm
              </span>
            </div>
          </div>
        )}
      </>
    );
};

export default MenuMobile;