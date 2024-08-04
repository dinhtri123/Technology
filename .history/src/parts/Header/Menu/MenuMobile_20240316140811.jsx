import React, { useState } from "react";
import styles from "./MenuStyles.module.css";
import { useMediaMobile } from "../../../hooks/useMedia";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useToggle } from "../../../hooks/useToggle";
import Button from "../../../components/Button/Button";
import Login from "../SignIn/Login";
import SignUp from "../SignIn/SignUp";

const MenuMobile = () => {
  const [isMobile] = useMediaMobile();
  const [activeMenuCate, toggleCategory, setCategory]= useToggle();
  const [activeAccount, toggleAccount, setActiveAccount]= useToggle();
  const [activeMore, toggleMore, setACtiveMore]= useToggle();
  const [hasLogin, setHasLogin] = useState(false);
  const navigate = useNavigate();
  const [activeLogin, login, setLogin] = useToggle();
  const [activeSignUp, signUp, setSignUp] = useToggle();
  const [cate, setCate] = useState('Laptop');
  const [menuItem, setMenuItem] = useState("Trang chủ");
  const handleActiveCate = (e) => { 
    setCate(e.currentTarget.textContent)
  }
  const handleActiveMenu = (e) => {
    if (e.currentTarget.textContent == 'Danh mục') {
      toggleCategory(activeMenuCate);
    }else if (e.currentTarget.textContent == "Tài khoản") {
      hasLogin ? navigate("/taikhoan") : setActiveAccount(true);
      setCategory(false)
    }else if (e.currentTarget.textContent == "Thêm") {
      toggleMore(activeMore)
    }else {
      setCategory(false);
    }
    setMenuItem(e.currentTarget.textContent);
    const currentUrl = window.location.href;
    console.log("🚀 ~ handleActiveMenu ~ currentUrl:", currentUrl)
  }
  return (
    <>
      {isMobile && (
        <>
          <div className={styles.menuSticky}>
            <Link
              to={"/"}
              className={`${styles.menuStickyItem} ${
                menuItem == "Trang chủ" ? styles.active : ""
              }`}
              onClick={handleActiveMenu}
            >
              <Icon icon="heroicons:home" />
              Trang chủ
            </Link>
            <div
              className={`${styles.menuStickyItem} ${
                menuItem == "Danh mục" ? styles.active : ""
              }`}
              onClick={handleActiveMenu}
            >
              <Icon icon="mage:dashboard" />
              Danh mục
            </div>
            <Link
              to={"/sanpham"}
              className={`${styles.menuStickyItem} ${
                menuItem == "Cửa hàng" ? styles.active : ""
              }`}
              onClick={handleActiveMenu}
            >
              <Icon icon="clarity:store-solid" />
              Cửa hàng
            </Link>
            <div
              className={`${styles.menuStickyItem} ${
                menuItem == "Tài khoản" ? styles.active : ""
              }`}
              onClick={handleActiveMenu}
            >
              <Icon icon="material-symbols:account-circle-outline" />
              Tài khoản
            </div>
            <div
              className={`${styles.menuStickyItem} ${
                menuItem == "Thêm" ? styles.active : ""
              }`}
              onClick={handleActiveMenu}
            >
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
                      cate == "Smartwatch" ? styles.active : ""
                    }`}
                    onClick={handleActiveCate}
                  >
                    <span>
                      <img src="..//dongho.png" alt="" />
                    </span>
                    Smartwatch
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
                          <Link>Dưới 1 triệu</Link>
                          <Link>Từ 1 - 2 triệu</Link>
                          <Link>Từ 2 - 4 triệu</Link>
                          <Link>Trên 4 triệu</Link>
                        </div>
                      </div>
                    </div>
                  )}
                  {cate == "Smartwatch" && (
                    <div className={styles.categoryContentItem}>
                      <h3 className={styles.categoryContentItemTitle}>
                        Smartwatch
                        <Icon icon="formkit:right" />
                      </h3>
                      <div className={styles.categoryContentItemList}>
                        <h4>Thương hiệu</h4>
                        <div
                          className={`${styles.categoryContentItemListInner} ${styles.brand}`}
                        >
                          <Link>
                            <img
                              src="..//sm_amazfit.png"
                              alt=""
                            />
                          </Link>
                          <Link>
                            <img src="..//sm_apple.png" alt="" />
                          </Link>
                          <Link>
                            <img src="..//sm_befit.png" alt="" />
                          </Link>
                          <Link>
                            <img
                              src="..//sm_garmin.png"
                              alt=""
                            />
                          </Link>
                          <Link>
                            <img
                              src="..//sm_samsung.png"
                              alt=""
                            />
                          </Link>
                          <Link>
                            <img
                              src="..//sm_xiaomi.png"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className={styles.categoryContentItemList}>
                        <h4>Tầm giá</h4>
                        <div
                          className={`${styles.categoryContentItemListInner}`}
                        >
                          <Link>Dưới 1 triệu</Link>
                          <Link>Từ 1 - 4 triệu</Link>
                          <Link>Từ 4 - 8 triệu</Link>
                          <Link>Trên 8 triệu</Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          {/* popup account */}
          {activeAccount && (
            <div className={`${styles.accountPopup}`}>
              <div className={`bg-opacity`}></div>
              <div
                className={`${styles.accountPopupInner}  ${
                  activeAccount ? styles.active : ""
                }`}
              >
                <span
                  className={styles.accountPopupClose}
                  onClick={() => setActiveAccount(false)}
                >
                  <Icon icon="ep:circle-close-filled" />
                </span>
                <h3>
                  Vui lòng đăng nhập tài khoản để xem ưu đãi và thanh toán dễ
                  dàng hơn
                </h3>
                <div className={`btnTwoAction`}>
                  <Button
                    onClick={() => {
                      setSignUp(true);
                      setActiveAccount(false);
                    }}
                  >
                    Đăng ký
                  </Button>
                  <Button
                    onClick={() => {
                      setLogin(true);
                      setActiveAccount(false);
                    }}
                  >
                    Đăng nhập
                  </Button>
                </div>
              </div>
            </div>
          )}
          {/* popup account signup signin */}
          <Login
            activeLogin={activeLogin}
            handleCloseLogin={() => login(!activeLogin)}
            handleShowSignUp={() => {
              setSignUp(true);
              setLogin(false);
            }}
          ></Login>
          <SignUp
            activeSignUp={activeSignUp}
            handleCloseLogin={() => signUp(!activeSignUp)}
            handleShowLogin={() => {
              setSignUp(false);
              setLogin(true);
            }}
          ></SignUp>
          {/* popup More */}
          {activeMore && (
            <div className={styles.morePopup}>
              <Link to={"/tintuc"} onClick={() => toggleMore(activeMore)}>
                <Icon icon="iconamoon:news-light" />
                Tin tức
              </Link>
              <Link to={"/lienhe"} onClick={() => toggleMore(activeMore)}>
                <Icon icon="fluent:contact-card-16-regular" />
                Liên hệ
              </Link>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default MenuMobile;
