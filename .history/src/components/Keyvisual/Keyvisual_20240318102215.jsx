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
import { Link } from 'react-router-dom';


const Keyvisual = () => {

    return (
      <div className={"keyvisual"}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={"mySwiper"}
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
        <div className="container">
          <div className='keyvisual_list'>
            <Link to={"/sanpham"}>
              <img src="../../../public/banner_item1.png" alt="" />
            </Link>
            <Link to={"/sanpham"}>
              <img src="../../../public/banner_item2.png" alt="" />
            </Link>
            <Link to={"/sanpham"}>
              <img src="../../../public/banner_item3.png" alt="" />
            </Link>
            <Link to={"/sanpham"}>
              <img src="../../../public/banner_item4.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Keyvisual;