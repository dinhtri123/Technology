import React, { useState } from "react";
import styles from "./MenuStyles.module.css";
import { useMediaMobile } from "../../../hooks/useMedia";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useToggle } from "../../../hooks/useToggle";

const MenuMobile = () => {
  const [isMobile] = useMediaMobile();
  const [activeMenuCate, toggleCategory, setCategory]= useToggle();
  const [cate, setCate] = useState('Laptop');
  const handleActiveCate = (e) => {
    setCate(e.target.textContent)
  }
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
            <div
              className={styles.menuStickyItem}
              onClick={() => toggleCategory(activeMenuCate)}
            >
              <Icon icon="mage:dashboard" />
              Danh mục
            </div>
            <Link to={"/sanpham"} className={styles.menuStickyItem}>
              <Icon icon="clarity:store-solid" />
              Cửa hàng
            </Link>
            <div className={styles.menuStickyItem}>
              <Icon icon="material-symbols:account-circle-outline" />
              Tài khoản
            </div>
            <div className={styles.menuStickyItem}>
              <Icon icon="iconoir:more-horiz-circle" />
              Thêm
            </div>
          </div>
          {/* popup category */}
          {activeMenuCate && (
            <div
              className={`${styles.categoryPopupWrapper} ${
                activeMenuCate ? styles.active : ""
              }`}
            >
              <div className={styles.categoryPopupWrapperTitle}>
                <h3>
                  Danh mục sản phẩm{" "}
                  <span onClick={() => setCategory(false)}>
                    <Icon icon="iconamoon:close-light" />
                  </span>
                </h3>
              </div>
              <div className={styles.categoryPopup}>
                <div className={styles.categoryList}>
                  <span
                    className={`${styles.categoryListItem} ${
                      cate == "Laptop" ? styles.active : ""
                    }`}
                    onClick={handleActiveCate}
                  >
                    <span>
                      <img src="..//img_cate_1.png" alt="" />
                    </span>
                    Laptop
                  </span>
                  <span
                    className={`${styles.categoryListItem} ${
                      cate == "Điện thoại" ? styles.active : ""
                    }`}
                    onClick={handleActiveCate}
                  >
                    <span>
                      <img src="..//img_cate_2.png" alt="" />
                    </span>
                    Điện thoại
                  </span>
                  <span
                    className={`${styles.categoryListItem} ${
                      cate == "Tai nghe" ? styles.active : ""
                    }`}
                    onClick={handleActiveCate}
                  >
                    <span>
                      <img src="..//img_cate_3.png" alt="" />
                    </span>
                    Tai nghe
                  </span>
                  <span
                    className={`${styles.categoryListItem} ${
                      cate == "Phụ kiện" ? styles.active : ""
                    }`}
                    onClick={handleActiveCate}
                  >
                    <span>
                      <img src="..//img_cate_4.png" alt="" />
                    </span>
                    Phụ kiện
                  </span>
                </div>
                <div className={styles.categoryContent}>
                  {cate == "Laptop" && (
                    <div className={styles.categoryContentItem}>
                      <h3 className={styles.categoryContentItemTitle}>
                        Laptop
                        <Icon icon="formkit:right" />
                      </h3>
                      <div className={styles.categoryContentItemList}>
                        <h4>Thương hiệu</h4>
                        <div
                          className={`${styles.categoryContentItemListInner} ${styles.brand}`}
                        >
                          <Link>
                            <img src="..//macbook.png" alt="" />
                          </Link>
                          <Link>
                            <img src="..//acer.png" alt="" />
                          </Link>
                          <Link>
                            <img src="..//asus.png" alt="" />
                          </Link>
                          <Link>
                            <img src="..//hp.png" alt="" />
                          </Link>
                          <Link>
                            <img src="..//lenovo.png" alt="" />
                          </Link>
                          <Link>
                            <img src="..//dell.png" alt="" />
                          </Link>
                          <Link>
                            <img src="..//msi.png" alt="" />
                          </Link>
                        </div>
                      </div>
                      <div className={styles.categoryContentItemList}>
                        <h4>Tầm giá</h4>
                        <div
                          className={`${styles.categoryContentItemListInner}`}
                        >
                          <Link>Dưới 10 triệu</Link>
                          <Link>Từ 10 - 15 triệu</Link>
                          <Link>Từ 15 - 20 triệu</Link>
                          <Link>Từ 20 - 25 triệu</Link>
                          <Link>Từ 25 - 30 triệu</Link>
                          <Link>Trên 30 triệu</Link>
                        </div>
                      </div>
                      <div className={styles.categoryContentItemList}>
                        <h4>Nhu cầu</h4>
                        <div
                          className={`${styles.categoryContentItemListInner} ${styles.demand}`}
                        >
                          <Link>
                            <span>
                              <img
                                src="..//vanphong.png"
                                alt=""
                              />
                            </span>
                            Văn phòng
                          </Link>
                          <Link>
                            <span>
                              <img src="..//gaming.png" alt="" />
                            </span>
                            Gaming
                          </Link>
                          <Link>
                            <span>
                              <img
                                src="..//mongnhe.png"
                                alt=""
                              />
                            </span>
                            Mỏng nhẹ
                          </Link>
                          <Link>
                            <span>
                              <img
                                src="..//sinhvien.png"
                                alt=""
                              />
                            </span>
                            Sinh viên
                          </Link>
                          <Link>
                            <span>
                              <img src="..//camung.png" alt="" />
                            </span>
                            Cảm ứng
                          </Link>
                        </div>
                      </div>
                      <div className={styles.categoryContentItemList}>
                        <h4>Kích thước</h4>
                        <div
                          className={`${styles.categoryContentItemListInner}`}
                        >
                          <Link>Dưới 13 inch</Link>
                          <Link>Từ 13 - 15 inch</Link>
                          <Link>Trên 15 inch</Link>
                        </div>
                      </div>
                      <div className={styles.categoryContentItemList}>
                        <h4>Cấu hình</h4>
                        <div
                          className={`${styles.categoryContentItemListInner}`}
                        >
                          <Link>Intel Core i3</Link>
                          <Link>Intel Core i5</Link>
                          <Link>Intel Core i7</Link>
                          <Link>Intel Core i9</Link>
                          <Link>Intel Core i9</Link>
                          <Link>AMD Ryzen 3</Link>
                          <Link>AMD Ryzen 5</Link>
                          <Link>AMD Ryzen 7</Link>
                          <Link>AMD Ryzen 9</Link>
                        </div>
                      </div>
                    </div>
                  )}
                  {cate == "Điện thoại" && (
                    <div className={styles.categoryContentItem}>
                      <h3 className={styles.categoryContentItemTitle}>
                        Điện thoại
                        <Icon icon="formkit:right" />
                      </h3>
                      <div className={styles.categoryContentItemList}>
                        <h4>Thương hiệu</h4>
                        <div
                          className={`${styles.categoryContentItemListInner} ${styles.brand}`}
                        >
                          <Link>
                            <img src="..//iphone.png" alt="" />
                          </Link>
                          <Link>
                            <img src="..//samsung.png" alt="" />
                          </Link>
                          <Link>
                            <img src="..//oneplus.png" alt="" />
                          </Link>
                          <Link>
                            <img src="..//xiaomi.png" alt="" />
                          </Link>
                          <Link>
                            <img src="..//vivo.png" alt="" />
                          </Link>
                          <Link>
                            <img src="..//realme.png" alt="" />
                          </Link>
                        </div>
                      </div>
                      <div className={styles.categoryContentItemList}>
                        <h4>Tầm giá</h4>
                        <div
                          className={`${styles.categoryContentItemListInner}`}
                        >
                          <Link>Dưới 2 triệu</Link>
                          <Link>Từ 2 - 4 triệu</Link>
                          <Link>Từ 4 - 7 triệu</Link>
                          <Link>Từ 7 - 13 triệu</Link>
                          <Link>Từ 13 - 20 triệu</Link>
                          <Link>Trên 20 triệu</Link>
                        </div>
                      </div>
                    </div>
                  )}
                  {cate == "Tai nghe" && (
                    <div className={styles.categoryContentItem}>
                      <h3 className={styles.categoryContentItemTitle}>
                        Tai nghe
                        <Icon icon="formkit:right" />
                      </h3>
                      <div className={styles.categoryContentItemList}>
                        <h4>Thương hiệu</h4>
                        <div
                          className={`${styles.categoryContentItemListInner} ${styles.brand}`}
                        >
                          <Link>
                            <img src="..//jbl.png" alt="" />
                          </Link>
                          <Link>
                            <img src="..//monster.png" alt="" />
                          </Link>
                          <Link>
                            <img src="..//mozard.png" alt="" />
                          </Link>
                          <Link>
                            <img src="..//soul.png" alt="" />
                          </Link>
                          <Link>
                            <img src="..//baseus.png" alt="" />
                          </Link>
                          <Link>
                            <img src="..//sony.png" alt="" />
                          </Link>
                        </div>
                      </div>
                      <div className={styles.categoryContentItemList}>
                        <h4>Tầm giá</h4>
                        <div
                          className={`${styles.categoryContentItemListInner}`}
                        >
                          <Link>Dưới 500 ngàn</Link>
                          <Link>Từ 2 - 4 triệu</Link>
                          <Link>Từ 4 - 7 triệu</Link>
                          <Link>Từ 7 - 13 triệu</Link>
                          <Link>Từ 13 - 20 triệu</Link>
                          <Link>Trên 20 triệu</Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default MenuMobile;
