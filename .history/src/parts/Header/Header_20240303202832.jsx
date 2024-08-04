import { useContext, useEffect, useRef, useState } from "react";
import styles from "./HeaderStyle.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import CartPopup from "./CartPopup/CartPopup";
import Menu from "./Menu/Menu";
import Search from "./Search/Search";
import Login from "./SignIn/Login";
import SignUp from "./SignIn/SignUp";
import { useMedia, useMediaMobile } from "../../hooks/useMedia";
import { ThemeContext } from "../../context/ThemeContext";
import { useToggle } from "../../hooks/useToggle";

const Header = () => {
  const [activeSearch, search, setSearch] = useToggle();
  const [activeMenuMobile, menuMobile, setMenuMobile] = useToggle();
  const [activeLogin, setActiveLogin] = useState(false);
  const [activeSignUp, setActiveSignUp] = useState(false);
  const [hasLogin, setHasLogin] = useState(true);
  const [openPopupSearch, setOpenPopupSearch] = useState(false);
  const inputRef = useRef();
  const searchRef = useRef();
  const menuMobileRef = useRef();
  const subMenuRef = useRef();
  const [isMobile] = useMediaMobile();
  const [isTablet] = useMedia();
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleShowLogin = () => {
    setActiveLogin(true);
    setActiveSignUp(false);
  };
  const handleCloseLogin = () => {
    setActiveLogin(false);
    setActiveSignUp(false);
  };
  const handleShowSignUp = () => {
    setActiveSignUp(true);
    setActiveLogin(false);
  };
  useEffect(() => {
    const hanldeClickOutside = (e) => {
      if (!activeSearch) return;
      if (!inputRef.current.contains(e.target)) {
        setSearch(false);
      }
    };
    document.addEventListener("click", hanldeClickOutside);
    return () => {
      document.removeEventListener("click", hanldeClickOutside);
    };
  }, [activeSearch]);
  const handleOpenPopupSearch = () => {
    setOpenPopupSearch(true);
  };
  const handleCloseSearch = () => {
    setOpenPopupSearch(false);
  };
  const handleRedirectLink = (e) => {
    menuMobileRef.current.style.maxHeight = null;
    theme.setDoSearch("");
  };
  const handleRedirectLinkProductSearch = () => {
    setSearch(false);
    theme.setKeywords("");
    searchRef.current.value = "";
    history.listen(() => {
      window.location.reload();
    });
  };
  const handleAfterSearch = () => {
    navigate("/sanpham");
    setSearch(false);
    theme.setDoSearch(searchRef.current.value);
    theme.setKeywords("");
    searchRef.current.value = "";
    searchRef.current.blur();
  };
  const handleSubmitSearch = (e) => {
    if (e.key === "Enter") {
      handleAfterSearch();
    }
  };
  const handleClickSubmitSearch = () => {
    if (searchRef.current.value !== "") {
      handleAfterSearch();
    }
  };
  const handleShowMenuMobile = (e) => {
    // toggle class active icon
    let getDataIcon = e.currentTarget.querySelector("[data-icon]");
    if (getDataIcon.classList.contains(styles.active)) {
      getDataIcon.classList.remove(styles.active);
    } else {
      getDataIcon.classList.add(styles.active);
    }
    // toggle menu mobile
    if (menuMobileRef.current.style.maxHeight) {
      menuMobileRef.current.style.maxHeight = null;
    } else {
      menuMobileRef.current.style.maxHeight = `${menuMobileRef.current.scrollHeight}px`;
    }
    // check show text active menu
    let getTextMenuActive =  menuMobileRef.current.querySelector("a.active");
    console.log(getTextMenuActive);
  };
  const handleShowSubMenu = (e) => {
    let getDataSubIcon =
      e.currentTarget.parentNode.querySelector("[data-sub-icon]");

    if (getDataSubIcon.style.transform == "rotate(0deg)") {
      getDataSubIcon.style.transform = "rotate(-90deg)";
    } else {
      getDataSubIcon.style.transform = "rotate(0deg)";
    }
    if (subMenuRef.current.style.maxHeight) {
      subMenuRef.current.style.maxHeight = null;
    } else {
      subMenuRef.current.style.maxHeight = `${subMenuRef.current.scrollHeight}px`;
      menuMobileRef.current.style.maxHeight = `${
        subMenuRef.current.scrollHeight + menuMobileRef.current.scrollHeight
      }px`;
    }
  };
  return (
    <>
      <header>
        <div className={`container ${styles.headerWrapper}`}>
          <div className={styles.headerLeft}>
            <Link to={"/"} className={styles.headerLogo}>
              <img
                src="../../../public/Logo.png"
                width={140}
                height={140}
                alt="Logo Technology"
              />
            </Link>
            <Menu
              subMenuRef={subMenuRef}
              menuMobileRef={menuMobileRef}
              handleShowSubMenu={handleShowSubMenu}
              handleRedirectLink={handleRedirectLink}
            ></Menu>
          </div>
          <div className={styles.headerRight}>
            <div
              className={`${isMobile ? "popupWrapper" : ""} ${
                styles.headerRightSearch
              } ${openPopupSearch ? `active ${styles.active}` : ""} ${
                activeSearch ? styles.headerRightSearchActive : ""
              }`}
              ref={inputRef}
            >
              {isMobile && <div className={`bg-opacity`}></div>}

              <div
                className={`${styles.headerRightSearchContent} ${
                  isMobile ? "popupContent" : ""
                }`}
              >
                {isMobile && (
                  <div className={styles.headerSearchPopup}>
                    <h3>Tìm kiếm</h3>
                    <span
                      className={styles.btnCloseSearch}
                      onClick={handleCloseSearch}
                    >
                      <Icon icon="iconamoon:close" />
                    </span>
                  </div>
                )}

                <div className={styles.headerSearchInput}>
                  <input
                    type="text"
                    id="search"
                    placeholder="Tìm kiếm sản phẩm"
                    onFocus={() => setSearch(true)}
                    onKeyUp={theme.handleShowResultSearch}
                    ref={searchRef}
                    autoComplete="off"
                    onKeyDown={handleSubmitSearch}
                  />
                  <span
                    className={styles.headerRightIconSearch}
                    onClick={handleClickSubmitSearch}
                  >
                    <Icon icon="ion:search-outline" />
                  </span>
                </div>
                <Search
                  activeSearch={activeSearch}
                  handleRedirectLinkProductSearch={
                    handleRedirectLinkProductSearch
                  }
                ></Search>
              </div>
            </div>
            {isMobile && (
              <div
                className={styles.headerIconSearchMobile}
                onClick={handleOpenPopupSearch}
              >
                <Icon icon="ion:search-outline" />
              </div>
            )}
            <div className={styles.headerRightInfor}>
              <div className={`${styles.headerRightInforItem}`}>
                {hasLogin ? (
                  <NavLink to={"/taikhoan"}>
                    <Icon icon="solar:user-linear" />
                    <span className={styles.headerRightInforItemText}>
                      Tài khoản
                    </span>
                  </NavLink>
                ) : (
                  <>
                    <div onClick={handleShowLogin}>
                      <Icon icon="solar:user-linear" />
                      <span className={styles.headerRightInforItemText}>
                        Tài khoản
                      </span>
                    </div>
                    <Login
                      activeLogin={activeLogin}
                      handleCloseLogin={handleCloseLogin}
                      handleShowSignUp={handleShowSignUp}
                    ></Login>
                    <SignUp
                      activeSignUp={activeSignUp}
                      handleCloseLogin={handleCloseLogin}
                      handleShowLogin={handleShowLogin}
                    ></SignUp>
                  </>
                )}
              </div>
              <div className={`${styles.headerRightInforItem}`}>
                <NavLink to={"/yeuthich"}>
                  <Icon icon="solar:heart-linear" />
                  <span className={styles.headerRightInforItemText}>
                    Yêu thích
                  </span>
                </NavLink>
              </div>
              <div className={`${styles.headerRightInforItem} `}>
                <CartPopup></CartPopup>
              </div>
            </div>
          </div>
          {isTablet && (
            <div className={styles.headerIconMenuMobile}>
              <div
                className={styles.headerIconMenuMobileWrapper}
                onClick={handleShowMenuMobile}
              >
                <span className={styles.iconMenu}>
                  <Icon icon="gg:menu" />
                </span>
                <div className={styles.menuItemActive}>
                  <span className={styles.itemActive}>Menu</span>
                  <span className={styles.itemIcon} data-icon>
                    <Icon icon="formkit:down" />
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
