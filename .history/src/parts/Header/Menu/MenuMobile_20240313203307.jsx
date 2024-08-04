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
                <span className={`${styles.categoryListItem} ${styles.active}`}>
                  <span>
                    <img src="../../../../public/img_cate_1.png" alt="" />
                  </span>
                  Laptop
                </span>
                <span className={styles.categoryListItem}>
                  <span>
                    <img src="../../../../public/img_cate_2.png" alt="" />
                  </span>
                  Điện thoại
                </span>
                <span className={styles.categoryListItem}>
                  <span>
                    <img src="../../../../public/img_cate_3.png" alt="" />
                  </span>
                  Tai nghe
                </span>
                <span className={styles.categoryListItem}>
                  <span>
                    <img src="../../../../public/img_cate_4.png" alt="" />
                  </span>
                  Phụ kiện
                </span>
              </div>
              <div className={styles.categoryContent}>
                <div className={styles.categoryContentItem}>
                  <h3 className={styles.categoryContentItemTitle}>
                    Laptop
                    <Icon icon="formkit:right" />
                  </h3>
                  <div className={styles.categoryContentItemList}>
                    <h4>Thương hiệu</h4>
                    <div className={styles.categoryContentItemListInner}>
                      <Link>
                        <img src="../../../../public/macbook.png" alt="" />
                      </Link>
                      <Link>
                        <img src="../../../../public/acer.png" alt="" />
                      </Link>
                      <Link>
                        <img src="../../../../public/asus.png" alt="" />
                      </Link>
                      <Link>
                        <img src="../../../../public/hp.png" alt="" />
                      </Link>
                      <Link>
                        <img src="../../../../public/lenovo.png" alt="" />
                      </Link>
                      <Link>
                        <img src="../../../../public/dell.png" alt="" />
                      </Link>
                      <Link>
                        <img src="../../../../public/msi.png" alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className={styles.categoryContentItemList}>
                    <h4>Tầm giá</h4>
                    <div className={styles.categoryContentItemListInner}>
                      <Link>
                        Dưới 10 triệu
                      </Link>
                      <Link>
                        
                      </Link>
                      <Link>
                        <img src="../../../../public/asus.png" alt="" />
                      </Link>
                      <Link>
                        <img src="../../../../public/hp.png" alt="" />
                      </Link>
                      <Link>
                        <img src="../../../../public/lenovo.png" alt="" />
                      </Link>
                      <Link>
                        <img src="../../../../public/dell.png" alt="" />
                      </Link>
                      <Link>
                        <img src="../../../../public/msi.png" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MenuMobile;