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
  const [activeSearch, toggle, setToggle] =  useToggle();
  const [activeMenuMb, setActiveMenuMb] = useState(false)
  const [activeLogin, setActiveLogin] = useState(false);
  const [activeSignUp, setActiveSignUp] = useState(false);
  const [hasLogin, setHasLogin] = useState(true);
  const [openPopupSearch, setOpenPopupSearch] = useState(false)
  const inputRef = useRef();
  const searchRef = useRef()
  const [isMobile] = useMediaMobile();
  const [isTablet] = useMedia();
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleShowLogin = () => {
    setActiveLogin(true);
    setActiveSignUp(false);
    
  }
  const handleCloseLogin = () => {
    setActiveLogin(false);
    setActiveSignUp(false)
  }
  const handleShowSignUp = () => {
      setActiveSignUp(true);
      setActiveLogin(false);
  }
  useEffect(() => {
    const hanldeClickOutside = (e) => {
      if (!activeSearch) return;
      if (!inputRef.current.contains(e.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("click", hanldeClickOutside);
    return () => {
      document.removeEventListener("click", hanldeClickOutside);
    };
  }, [activeSearch]);
  const handlePopupMenu = () => {
    setActiveMenuMb(true)
  }
  const handleCloseMenu = () => {
    setActiveMenuMb(false);
  }
  const handleOpenPopupSearch = () => {
setOpenPopupSearch(true);
  }
  const handleCloseSearch = () => {
    setOpenPopupSearch(false);
  }
  const handleRedirectLink = () => {
    setActiveMenuMb(false);
    theme.setDoSearch("")
  }
  const handleRedirectLinkProductSearch = () => {
      setToggle(false);
      theme.setKeywords("");
      searchRef.current.value = "";
      history.listen(() => {
        window.location.reload();
      });
  }
  const handleAfterSearch = () => {
    navigate("/sanpham");
    setToggle(false);
    theme.setDoSearch(searchRef.current.value);
    theme.setKeywords("");
    searchRef.current.value = "";
    searchRef.current.blur();
  }
  const handleSubmitSearch = (e) => {
    if (e.key === "Enter") {
      handleAfterSearch()
    }
  }
  const handleClickSubmitSearch = () => {
      if (searchRef.current.value !== "") {
        handleAfterSearch()
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
            <Menu
              activeMenuMb={activeMenuMb}
              handleCloseMenu={handleCloseMenu}
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
                    onFocus={() => setToggle(true)}
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
              {isTablet && (
                <div
                  className={styles.headerIconMenuMobile}
                  onClick={handlePopupMenu}
                >
                  <Icon icon="gg:menu-right-alt" />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
