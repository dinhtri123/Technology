import React, { useEffect, useState } from 'react';
import styles from "./CountdownStyles.module.css"
import Title from '../Title/Title';
import Button from '../Button/Button';
import {Link} from "react-router-dom"
import request from '../../utils/request';
import { Icon } from "@iconify/react";
import Product from '../Product/Product';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";


const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const [productSale, setProductSale] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const endTime = new Date("Tue Mar 30 2024 21:09:30 GMT+0700").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = new Date().getTime();
      const timer = endTime - newDate;
      const days = Math.floor(timer / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (timer % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      );
      const minutes = Math.floor((timer % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((timer % (60 * 1000)) / 1000);

      if (timer < 0) {
        clearInterval(interval);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [endTime]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(false)
        const response = await request.get("product");
        setProductSale(response.data);
      } catch (error) {
        setLoading(true);
      }
    };
    fetchData();
  },[])

    return (
      <div className={styles.productFlashSale}>
        <div className={`container`}>
          <div className={styles.productFlashSaleTop}>
            <span className={styles.productFlashSaleImage}>
              <img src="/flashsale.png" alt="" />
            </span>
            <div className={styles.countdownTime}>
              <span>
                Kết thúc sau <b>{timerDays}</b> ngày :
              </span>
              <span>
                {timerHours < 10 ? `0${timerHours}` : `${timerHours}`}
              </span>
              <span>
                {timerMinutes < 10 ? `0${timerMinutes}` : `${timerMinutes}`}
              </span>
              <span>
                {timerSeconds < 10 ? `0${timerSeconds}` : `${timerSeconds}`}
              </span>
            </div>
          </div>
          <div className={styles.productFlashSaleContent}>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              breakpoints={{
                375: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1180: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              className="slider-custom"
            >
              {productSale.length > 0 &&
                productSale.map((item) => (
                  <SwiperSlide key={item.idProduct}>
                    <Product
                      loading={loading}
                      thumbnail={item.thumbnail}
                      title={item.title}
                      sale={true}
                      category={item.category}
                      priceOld={item.priceOld}
                      priceNew={item.priceNew}
                      idProduct={item.idProduct}
                      wishlist={item.wishlist}
                    ></Product>
                  </SwiperSlide>
                ))}
            </Swiper>
            <Button className={`${styles.btnProductSale} btnCustom`}>Xem tất cả <Icon icon="ph:arrow-right-light" /></Button>
          </div>
        </div>
      </div>
    );
};

export default Countdown;