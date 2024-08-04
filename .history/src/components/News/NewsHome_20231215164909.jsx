import React, { useEffect, useState } from 'react';
import styles from "./NewsStyles.module.css"
import Title from '../Title/Title';
import NewsItem from './NewsItem';
import axios from 'axios';
import { Icon } from "@iconify/react";
import Button from '../Button/Button';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {Link} from "react-router-dom"


const NewsHome = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true)
    const endPoint = "http://localhost:3000/news"
    useEffect(() => {
        const getData = async() => {
            try {
              setLoading(true)
              const response = await axios.get(endPoint);
              setNews(response.data);
              setLoading(false);
            } catch (error) {
              setLoading(true);
            }
        }
        getData();
    },[endPoint])
    return (
      <div className={styles.newsHome}>
        <div className={`container ${styles.newsHomeWrapper}`}>
          <Title
            src={"../../../public/icon-title06.svg"}
            childrenSubtitle={"Tin tức"}
          >
            Tin tức mới nhất
          </Title>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={40}
            breakpoints={{
              375: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1180: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="slider-custom"
          >
            {news.length > 0 &&
              news.map((item) => (
                <SwiperSlide key={item.id}>
                  <NewsItem
                    loading={loading}
                    thumbnail={item.thumbnail}
                    date={item.time}
                    review={item.review}
                    title={item.title}
                    detail={item.detail}
                  ></NewsItem>
                </SwiperSlide>
              ))}
          </Swiper>
          <Link to={"/tintuc"}>
            <Button className={`btnCustom ${styles.newsBtnAll}`}>
              Xem tất cả <Icon icon="bi:arrow-right" />
            </Button>
          </Link>
        </div>
      </div>
    );
};

export default NewsHome;
