import React from 'react';
import styles from "./Keyvisual.Styles.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Keyvisual = () => {

    return (
      <div className={styles.keyvisual}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={styles.mySwiper}
        >
          <SwiperSlide>
            <img src="../../../public/banner_1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../../../public/banner_2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../../../public/banner_3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../../../public/banner_4.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../../../public/banner_5.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../../../public/banner_6.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Keyvisual;