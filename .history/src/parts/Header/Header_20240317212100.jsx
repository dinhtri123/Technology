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
import PopupLogin from "./SignIn/PopupLogin";
import Button from "../../components/Button/Button";

const Header = () => {
  const [activeSearch, search, setSearch] = useToggle();
  const [clearTextValue, clearText, setClearText] = useToggle();
  const [activeSearchMobile, searchMobile, setSearchMobile] = useToggle();
  const [activeLogin, login, setLogin] = useToggle();
  const [activeSignUp, signUp, setSignUp] = useToggle();
  const [activeAccount, toggleAccount, setActiveAccount] = useToggle();
  const [hasLogin, setHasLogin] = useState(false);
  const inputRef = useRef();
  const searchRef = useRef();
  const menuMobileRef = useRef();
  const subMenuRef = useRef();
  const [isMobile] = useMediaMobile();
  const [isTablet] = useMedia();
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const refStickyHeader = useRef();

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

  useEffect(() => {
    window.onscroll = () => {
      const getHeightScroll = window.scrollY;
      console.log("🚀 ~ useEffect ~ getHeightScroll:", getHeightScroll)
    }
  },[])


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
    setSearchMobile(false);
    setClearText(false)

  };
  const handleKeyEnterSearch = (e) => {
    // hidden clear text when text search ''
    if (searchRef.current.value == "") {
      setClearText(false);
    } else {
      setClearText(true);
    }

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
  const handleClickClearText = () => {
    searchRef.current.value = "";
    setClearText(false);
    // reload data when clear text
    theme.setKeywords("");
  };
  
  return (
    <>
      <header>
        <div className={styles.headerTop}>
          <div className={styles.headerTopBanner}>
            <img src="../../../public/banner_top.gif" alt="" />
          </div>
          <div className={styles.headerTopContent}>
            <div className="container">
              <a href="tel:0385396473">
                <Icon icon="pepicons-pencil:headphone" />
                Liên hệ mua hàng
              </a>
              <Link to={"/tintuc"}>
                <img src="../../../public/top_news.svg" alt="" />
                Tin công nghệ
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.headerWrapper}`} ref={refStickyHeader}>
          <div className={"container"}>
            <div className={styles.headerLeft}>
              <Link to={"/"} className={styles.headerLogo}>
                <img
                  src="../../../public/Logo.png"
                  width={140}
                  height={140}
                  alt="Logo Technology"
                />
              </Link>
              {isTablet && (
                <Menu
                  subMenuRef={subMenuRef}
                  menuMobileRef={menuMobileRef}
                  handleRedirectLink={handleRedirectLink}
                ></Menu>
              )}
              {isMobile && <MenuMobile></MenuMobile>}
            </div>
            <div className={styles.headerRight}>
              <div
                className={`${styles.headerRightSearchOuter}`}
                ref={inputRef}
              >
                <div
                  className={` ${styles.headerRightSearch} ${
                    isMobile ? "popupWrapper" : ""
                  } ${activeSearchMobile ? `active ${styles.active}` : ""}  ${
                    activeSearch ? styles.headerRightSearchActive : ""
                  }`}
                >
                  {isMobile && <div className="bg-opacity"></div>}
                  <div
                    className={`${styles.headerRightSearchContent} ${
                      isMobile ? "popupContent" : ""
                    }`}
                  >
                    <div className={styles.headerRightSearchForm}>
                      {isMobile && (
                        <span
                          className={styles.btnCloseSearch}
                          onClick={() => setSearchMobile(false)}
                        >
                          <Icon icon="ph:caret-left-bold" />
                        </span>
                      )}

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
                        {clearTextValue && (
                          <span
                            className={styles.headerRightClearText}
                            onClick={handleClickClearText}
                          >
                            <Icon icon="ion:close-circle" />
                          </span>
                        )}

                        <span
                          className={styles.headerRightIconSearch}
                          onClick={handleClickIconSearch}
                        >
                          <Icon icon="ion:search-outline" />
                        </span>
                      </div>
                    </div>

                    {isMobile && (
                      <Search
                        activeSearch={activeSearch}
                        handleClickProductSearch={handleClickProductSearch}
                      ></Search>
                    )}
                  </div>
                </div>
                {isTablet && (
                  <Search
                    activeSearch={activeSearch}
                    handleClickProductSearch={handleClickProductSearch}
                  ></Search>
                )}
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
                {isTablet && (
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
                        <div onClick={() => setActiveAccount(true)}>
                          <Icon icon="solar:user-linear" />
                          <span className={styles.headerRightInforItemText}>
                            Tài khoản
                          </span>
                        </div>
                        <PopupLogin
                          activeAccount={activeAccount}
                          handleClosePopup={() => setActiveAccount(false)}
                          handleClickSignUp={() => {
                            setSignUp(true);
                            setActiveAccount(false);
                          }}
                          handleClickSignIn={() => {
                            setLogin(true);
                            setActiveAccount(false);
                          }}
                        ></PopupLogin>
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
                )}

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
        </div>
      </header>
    </>
  );
};

export default Header;
