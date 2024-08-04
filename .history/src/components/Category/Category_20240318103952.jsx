import React, { useEffect, useState } from 'react';
import styles from "./CategoryStyles.module.css";
import Title from '../Title/Title';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import request from '../../utils/request';


const Category = () => {
  useEffect(() => {
    const btnPrevSlider = Array.from(
      document.querySelectorAll(".swiper-button-prev")
    );

    btnPrevSlider.map((item) => {
      item.classList.add("btn-slider-custom");
      item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>`;
    });
    const btnNextSlider = Array.from(
      document.querySelectorAll(".swiper-button-next")
    );
    btnNextSlider.map((item) => {
      item.classList.add("btn-slider-custom");
      item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>`;
    });
  });

  useEffect(() => {
    const fetchDataCate = request.get('category');
    console.log(fetchDataCate)
  },[])

    return (
      <div className={styles.category}>
        <div className={`container ${styles.categoryWrapper}`}>
          <Title
            src={"/icon-title02.svg"}
            childrenSubtitle={"Danh mục"}
          >
            Tất cả danh mục
          </Title>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              375: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            className="slider-custom"
          >
            <SwiperSlide className={styles.categorySlide}>
              <div className={styles.categorySlideImage}>
                <img src="/headphone1.png" alt="" />
              </div>
              <div className={styles.categorySlideContent}>
                <h3 className={styles.categoryTitle}>Laptop</h3>
                <p className={styles.categoryQuantity}>3 sản phẩm</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.categorySlide}>
              <div className={styles.categorySlideImage}>
                <img src="/headphone1.png" alt="" />
              </div>
              <div className={styles.categorySlideContent}>
                <h3 className={styles.categoryTitle}>Laptop</h3>
                <p className={styles.categoryQuantity}>3 sản phẩm</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.categorySlide}>
              <div className={styles.categorySlideImage}>
                <img src="/headphone1.png" alt="" />
              </div>
              <div className={styles.categorySlideContent}>
                <h3 className={styles.categoryTitle}>Laptop</h3>
                <p className={styles.categoryQuantity}>3 sản phẩm</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.categorySlide}>
              <div className={styles.categorySlideImage}>
                <img src="/headphone1.png" alt="" />
              </div>
              <div className={styles.categorySlideContent}>
                <h3 className={styles.categoryTitle}>Laptop</h3>
                <p className={styles.categoryQuantity}>3 sản phẩm</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.categorySlide}>
              <div className={styles.categorySlideImage}>
                <img src="/headphone1.png" alt="" />
              </div>
              <div className={styles.categorySlideContent}>
                <h3 className={styles.categoryTitle}>Laptop</h3>
                <p className={styles.categoryQuantity}>3 sản phẩm</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.categorySlide}>
              <div className={styles.categorySlideImage}>
                <img src="/headphone1.png" alt="" />
              </div>
              <div className={styles.categorySlideContent}>
                <h3 className={styles.categoryTitle}>Laptop</h3>
                <p className={styles.categoryQuantity}>3 sản phẩm</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.categorySlide}>
              <div className={styles.categorySlideImage}>
                <img src="/headphone1.png" alt="" />
              </div>
              <div className={styles.categorySlideContent}>
                <h3 className={styles.categoryTitle}>Laptop</h3>
                <p className={styles.categoryQuantity}>3 sản phẩm</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
};

export default Category;
