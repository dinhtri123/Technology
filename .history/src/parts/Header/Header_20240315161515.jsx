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
import MenuMobile from "./Menu/MenuMobile";

const Header = () => {
  const [activeSearch, search, setSearch] = useToggle();
  const [activeSearchMobile, searchMobile, setSearchMobile] = useToggle();
  const [activeLogin, login, setLogin] = useToggle();
  const [activeSignUp, signUp, setSignUp] = useToggle();
  const [hasLogin, setHasLogin] = useState(false);
  const inputRef = useRef();
  const searchRef = useRef();
  const menuMobileRef = useRef();
  const subMenuRef = useRef();
  const [isMobile] = useMediaMobile();
  const [isTablet] = useMedia();
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();

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

  const handleRedirectLink = (e) => {
    menuMobileRef.current.style.maxHeight = null;
    theme.setDoSearch("");
    // check show text active menu
    let getTextMenuClick = e.currentTarget.textContent;
    let getDataMenuActive = document.querySelector(
      "[data-text-menu-active]"
    );
    getDataMenuActive.textContent = getTextMenuClick;
  };
  const handleClickProductSearch = () => {
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
  const handleKeyEnterSearch = (e) => {
    if (e.key === "Enter") {
      handleAfterSearch();
    }
  };
  const handleClickIconSearch = () => {
    if (searchRef.current.value !== "") {
      handleAfterSearch();
    }
    if (isMobile) {
      setSearchMobile(false);
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
                src="/Logo.png"
                width={140}
                height={140}
                alt="Logo Technology"
              />
            </Link>
            {isTablet && (
              <Menu
                subMenuRef={subMenuRef}
                menuMobileRef={menuMobileRef}
                handleShowSubMenu={handleShowSubMenu}
                handleRedirectLink={handleRedirectLink}
              ></Menu>
            )}
            {isMobile && <MenuMobile></MenuMobile>}
          </div>
          <div className={styles.headerRight}>
            <div
              className={`${isMobile ? "popupWrapper" : ""} ${
                styles.headerRightSearch
              } ${activeSearchMobile ? `active ${styles.active}` : ""} ${
                activeSearch ? styles.headerRightSearchActive : ""
              }`}
              ref={inputRef}
            >
              <div
                className={`${styles.headerRightSearchContent} ${
                  isMobile ? "popupContent" : ""
                }`}
              >
                <div className={styles.headerRightSearchForm}>
                  <span
                    className={styles.btnCloseSearch}
                    onClick={() => setSearchMobile(false)}
                  >
                    <Icon icon="ph:caret-left-bold" />
                  </span>
                  <div className={styles.headerSearchInput}>
                    <input
                      type="text"
                      id="search"
                      placeholder="Bạn muốn mua gì hôm nay?"
                      onFocus={() => setSearch(true)}
                      onKeyUp={theme.handleShowResultSearch}
                      ref={searchRef}
                      autoComplete="off"
                      onKeyDown={handleKeyEnterSearch}
                    />
                    <span
                      className={styles.headerRightIconSearch}
                      onClick={handleClickIconSearch}
                    >
                      <Icon icon="ion:search-outline" />
                    </span>
                  </div>
                </div>
                <Search
                  activeSearch={activeSearch}
                  handleClickProductSearch={handleClickProductSearch}
                ></Search>
              </div>
            </div>
            {isMobile && (
              <div
                className={styles.headerIconSearchMobile}
                onClick={() => setSearchMobile(true)}
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
                    <div onClick={() => setLogin(true)}>
                      <Icon icon="solar:user-linear" />
                      <span className={styles.headerRightInforItemText}>
                        Tài khoản
                      </span>
                    </div>
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
        </div>
      </header>
    </>
  );
};

export default Header;
