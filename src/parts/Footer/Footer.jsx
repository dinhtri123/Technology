import React, { useEffect, useState } from "react";
import styles from "./FooterStyles.module.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Footer = () => {
	const [showScroll, setShowScroll] = useState(true)
	const handleScrollToTop = () => {
		window.scrollTo(0, 0);
	}
	useEffect(() => {
		const handleScrollShowBtn = () => {
			const valueTop = window.scrollY;
			valueTop > 500 ? setShowScroll(true) : setShowScroll(false)
		}
		window.addEventListener('scroll', handleScrollShowBtn);
		return () => {
		window.removeEventListener("scroll", handleScrollShowBtn);
		}
	},[])

  return (
    <footer>
      <div className={styles.footerNews}>
        <div className={`container ${styles.footerNewsWrapper}`}>
          <div className={styles.footerNewsLeft}>
            <p>Giảm giá 20% cho các sản phẩm</p>
            <h4>Đăng ký nhận bản tin của chúng tôi</h4>
          </div>
          <div className={styles.footerNewsRight}>
            <div className={styles.footerNewsRightImage}>
              <img src="/subscribe-shape-4.png" alt="" />
              <img src="/icon-fly.svg" alt="" />
              <span>
                <svg
                  width="399"
                  height="110"
                  viewBox="0 0 399 110"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.499634 1.00049C8.5 20.0005 54.2733 13.6435 60.5 40.0005C65.6128 61.6426 26.4546 130.331 15 90.0005C-9 5.5 176.5 127.5 218.5 106.5C301.051 65.2247 202 -57.9188 344.5 40.0003C364 53.3997 384 22 399 22"
                    stroke="white"
                    strokeOpacity="0.5"
                    strokeDasharray="3 3"
                  ></path>
                </svg>
              </span>
            </div>
            <form>
              <Input
                type="email"
                name={"newslater"}
                placeholder={"Nhập email của bạn"}
              />
              <Button className={` ${styles.btnNewslater}`}>
                Đăng ký
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className={`container ${styles.footerMain}`}>
        <div className={styles.footerMainItem}>
          <Link to={"/"}>
            <img
              src="/Logo.png"
              width={140}
              height={140}
              alt="Logo Technology"
            />
          </Link>
          <p>
            Chất lượng sản phẩm và dịch vụ uy tín giúp tạo nên giá trị cốt lõi
          </p>
          <div className={styles.footerMainItemSocial}>
            <span>
              <Icon icon="ri:facebook-fill" />
            </span>
            <span>
              <Icon icon="mingcute:github-fill" />
            </span>
            <span>
              <Icon icon="ri:linkedin-fill" />
            </span>
            <span>
              <Icon icon="teenyicons:reddit-solid" />
            </span>
            <span>
              <Icon icon="pajamas:discord" />
            </span>
          </div>
        </div>
        <div className={styles.footerMainItem}>
          <h3>Danh mục</h3>
          <ul>
            <li>
              <a href="#">Laptop</a>
            </li>
            <li>
              <a href="#">Điện thoại</a>
            </li>
            <li>
              <a href="#">Tai nghe</a>
            </li>
            <li>
              <a href="#">Phụ kiện</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerMainItem}>
          <h3>Tài khoản của tôi</h3>
          <ul>
            <li>
              <a href="#">Đơn hàng</a>
            </li>
            <li>
              <a href="#">Đang giao</a>
            </li>
            <li>
              <a href="#">Yêu thích</a>
            </li>
            <li>
              <a href="#">Tài khoản</a>
            </li>
            <li>
              <a href="#">Lịch sử đặt hàng</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerMainItem}>
          <h3>Thông tin</h3>
          <ul>
            <li>
              <Icon icon="carbon:phone-filled" />
              <a href="tel: 038 539 6473">Hotline: 038 539 6473</a>
            </li>
            <li>
              <Icon icon="clarity:email-solid-badged" />
              <a href="mailto:dinhtriqs111@gmail.com">
                Email: dinhtriqs111@gmail.com
              </a>
            </li>
            <li>
              <Icon icon="mingcute:map-pin-fill" />
              <a href="">Địa chỉ: Tổ 2, Thôn Tam Hòa, TT Đông Phú</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerSmall}>
        <small>
          © 2023 All Rights Reserved | React Template by <span>T&T</span>
        </small>
      </div>
      <div
        className={`${styles.backtotop} ${showScroll ? styles.active : ""}`}
        onClick={handleScrollToTop}
      >
          <Icon icon="bytesize:arrow-top" />
        </div>
    </footer>
  );
};

export default Footer;
