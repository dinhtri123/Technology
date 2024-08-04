import React from 'react';
import styles from './MenuStyles.module.css'
import { useMediaMobile } from '../../../hooks/useMedia';
import { Link } from 'react-router-dom';
import { Icon } from "@iconify-icon/react";

const MenuMobile = () => {
    const [isMobile] = useMediaMobile();
    return (
      <>
        {isMobile && (
          <div className={styles.menuSticky}>
            <Link to={"/"}>
              <Icon icon="system-uicons:home-door" />
              Trang chủ
            </Link>
            <div>
              <span>
                <Icon icon="mage:dashboard" />
                
              </span>
            </div>
          </div>
        )}
      </>
    );
};

export default MenuMobile;