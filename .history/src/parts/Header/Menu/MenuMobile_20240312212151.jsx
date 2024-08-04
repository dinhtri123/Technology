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
                <Icon
                  icon="material-symbols:account-circle-outline"
                 
                />
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
        )}
      </>
    );
};

export default MenuMobile;