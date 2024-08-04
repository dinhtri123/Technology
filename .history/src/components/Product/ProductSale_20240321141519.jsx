import React, { useEffect, useState } from 'react';
import styles from "./ProductStyles.module.css"
import Title from '../Title/Title';
import { Icon } from "@iconify/react";
import Product from './Product';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import request from '../../utils/request';


const ProductSale = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const repsonse = await request.get(`product/`);
        setProduct(repsonse.data);
        setLoading(false);
      } catch (error) {
        setLoading(true)
      }
    };
    getData();
  },[]);
  
    return (
      <div className={styles.productSale}>
        <div className={`container ${styles.productSaleWrapper}`}>
          <Title
            src={"/icon-title04.svg"}
            childrenSubtitle={"Sản phẩm"}
          >
            Gợi ý hôm nay
          </Title>
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
            {product.length > 0 &&
              product.map((item) => (
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
        </div>
      </div>
    );
};

export default ProductSale;

