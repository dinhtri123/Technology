import React, { useEffect, useState } from 'react';
import { Icon } from "@iconify/react";
import styles from "./ProductStyles.module.css";
import { formatPrice } from "./FormatPrice";
import { PercentDiscount } from "./PercentDiscount";
import Button from "../Button/Button";
import SkeletonPRoductDetailTop from "../Skeleton/SkeletonPRoductDetailTop"; 

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


const ProductDetailTop = ({idProduct, loading}) => {

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
  const [type, setType] = useState(null);
  const [typeColor, setTypeColor] = useState(null);
  const [activeType, setActiveType] = useState("Có dây");
  const [activeColor, setActiveColor] = useState("Black");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [thumbsSwiperpopup, setThumbsSwiperPopup] = useState(null);

 const handleChooseType = (e) => {
   const getDataSet = e.target.dataset.type;
   setType(getDataSet);
   setActiveType(getDataSet);
 };
  const handleChooseTypeColor = (e) => {
    const getDataSet = e.target.dataset.color;
    setTypeColor(getDataSet);
    setActiveColor(getDataSet);
  };
    return (
      <>
        {loading ? (
          <SkeletonPRoductDetailTop />
        ) : (
          <div className={styles.productDetailTop}>
            <div className={styles.productDetailTopLeft}>
              <div className={styles.productDetailTopLeftThumbnail}>
                <Swiper
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="sliderThumbnailProduct"
                >
                  {idProduct.length > 0 &&
                    idProduct.map((item, index) => (
                      <div key={index}>
                        {item.image.map((src, index) => (
                          <SwiperSlide key={index}>
                            <img src={src} alt="" />
                          </SwiperSlide>
                        ))}
                      </div>
                    ))}
                </Swiper>
                <span className={`${styles.productDetailTopLeftWishlist}`}>
                  {idProduct.length > 0 &&
                    idProduct.map((item, index) => (
                      <span key={index}>
                        {item.wishlist ? (
                          <Icon icon="solar:heart-bold" color="#f03b7a" />
                        ) : (
                          <Icon icon="solar:heart-linear" />
                        )}
                      </span>
                    ))}
                </span>
              </div>
              <div className={styles.productDetailTopLeftGallery}>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  breakpoints={{
                    375: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 5,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                  }}
                  className="sliderGalleryProduct"
                >
                  {idProduct.length > 0 &&
                    idProduct.map((item, index) => (
                      <div key={index}>
                        {item.image.map((src, index) => (
                          <SwiperSlide key={index}>
                            <img src={src} alt="" />
                          </SwiperSlide>
                        ))}
                      </div>
                    ))}
                </Swiper>
              </div>
              {/* Swiper popup */}
              <div className={styles.popupGallery}>
                <div className={styles.popupGalleryAction}>
                  <span className={styles.actionItem}>
                    <Icon icon="iconamoon:zoom-out-light" />
                  </span>
                  <span className={styles.actionItem}>
                    <Icon icon="iconamoon:zoom-in-light" />
                  </span>
                  <span className={styles.actionItem}>
                    <Icon icon="fluent:full-screen-maximize-28-filled" />
                  </span>
                  <span className={styles.actionItem}>
                    <Icon icon="fluent:full-screen-minimize-24-filled" />
                  </span>
                  <span className={styles.actionItem}>
                    <Icon icon="pajamas:close" />
                  </span>
                </div>
                <Swiper
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{
                    swiper:
                      thumbsSwiperpopup && !thumbsSwiperpopup.destroyed
                        ? thumbsSwiperpopup
                        : null,
                  }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className={`sliderThumbnailProduct sliderThumbnailPopup`}
                >
                  {idProduct.length > 0 &&
                    idProduct.map((item, index) => (
                      <div key={index}>
                        {item.image.map((src, index) => (
                          <SwiperSlide
                            key={index}
                            className={"sliderItemPopup"}
                          >
                            <img src={src} alt="" />
                          </SwiperSlide>
                        ))}
                      </div>
                    ))}
                </Swiper>
              </div>
            </div>
            {idProduct.map((item) => (
              <div
                className={styles.productDetailTopContent}
                key={item.idProduct}
              >
                <h2>{item.category}</h2>
                <h1>{item.title}</h1>
                <div className={styles.productDetailTopContentReview}>
                  {item.inStock > 0 ? (
                    <span>
                      <Icon icon="iconamoon:check-fill" />
                      Còn hàng
                    </span>
                  ) : (
                    <span>
                      <Icon icon="majesticons:close-line" />
                      Hết hàng
                    </span>
                  )}
                  <div className={styles.productDetailTopContentReviewRight}>
                    <span>
                      <Icon icon="ic:round-star" />
                      <Icon icon="ic:round-star" />
                      <Icon icon="ic:round-star" />
                      <Icon icon="ic:round-star" />
                      <Icon icon="ic:round-star" />
                    </span>
                    <span>({item.review} đánh giá)</span>
                  </div>
                </div>
                <p className={styles.productDetailTopContentDesc}>
                  {item.detail}
                </p>
                <div className={styles.productDetailTopContentPrice}>
                  <span className={styles.priceNew}>
                    {formatPrice(item.priceNew)} đ
                  </span>
                  <span className={styles.priceOld}>
                    {formatPrice(item.priceOld)} đ
                  </span>
                  <span className={styles.percent}>
                    - {PercentDiscount(item.priceNew, item.priceOld)}
                  </span>
                </div>
                <div className={styles.productDetailTopContentOption}>
                  <div className={styles.productDetailTopContentOptionColor}>
                    <div className={styles.optionColorShow}>
                      Chọn màu :{" "}
                      <span className={styles.optionColorShowClickType}>
                        {typeColor || "Black"}
                      </span>
                    </div>
                    <div className={styles.optionColor}>
                      <span
                        data-color="Black"
                        style={{ backgroundColor: "#000" }}
                        onClick={handleChooseTypeColor}
                        className={`${
                          activeColor == "Black" ? styles.active : ""
                        }`}
                      ></span>
                      <span
                        data-color="Red"
                        onClick={handleChooseTypeColor}
                        style={{ backgroundColor: "red" }}
                        className={`${
                          activeColor == "Red" ? styles.active : ""
                        }`}
                      ></span>
                      <span
                        data-color="Blue"
                        onClick={handleChooseTypeColor}
                        style={{ backgroundColor: "blue" }}
                        className={`${
                          activeColor == "Blue" ? styles.active : ""
                        }`}
                      ></span>
                      <span
                        data-color="Yellow"
                        onClick={handleChooseTypeColor}
                        style={{ backgroundColor: "yellow" }}
                        className={`${
                          activeColor == "Yellow" ? styles.active : ""
                        }`}
                      ></span>
                    </div>
                  </div>
                  <div className={styles.productDetailTopContentOptionColor}>
                    <div className={styles.optionColorShow}>
                      Chọn loại :{" "}
                      <span className={styles.optionColorShowClickType}>
                        {type || "Có dây"}
                      </span>
                    </div>
                    <div className={styles.optionType}>
                      <span
                        data-type="Có dây"
                        onClick={handleChooseType}
                        className={`${
                          activeType == "Có dây" ? styles.active : ""
                        }`}
                      >
                        Có dây
                      </span>
                      <span
                        data-type="Bluetooth"
                        onClick={handleChooseType}
                        className={`${
                          activeType == "Bluetooth" ? styles.active : ""
                        }`}
                      >
                        Bluetooth
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.productDetailTopContentQuantity}>
                  <span>Số lượng :</span>
                  <div className={styles.productDetailTopContentQuantityInput}>
                    <span>
                      <Icon icon="fa6-solid:minus" />
                    </span>
                    <input
                      type="text"
                      name="quantity"
                      id="quantity"
                      defaultValue={1}
                      disabled
                    />
                    <span>
                      <Icon icon="fa6-solid:plus" />
                    </span>
                  </div>
                </div>
                <div
                  className={`btnDoubleCustom ${styles.productDetailTopBtn}`}
                >
                  <span>
                    <Button>Mua ngay</Button>
                  </span>
                  <span>
                    <Button>Thêm vào giỏ hàng</Button>
                  </span>
                </div>
                <div className={styles.productDetailTopContentIntro}>
                  <div className={styles.productDetailTopContentIntroItem}>
                    <Icon icon="tabler:truck-delivery" />
                    <h4>Miễn phí vận chuyển</h4>
                    <p>Với các đơn hàng tên 1.000.000 đ</p>
                  </div>
                  <div className={styles.productDetailTopContentIntroItem}>
                    <Icon icon="lucide:badge-percent" />
                    <h4>Chất lượng dịch vụ</h4>
                    <p>Chất lượng sản phẩm luôn đặt lên hàng đầu</p>
                  </div>
                  <div className={styles.productDetailTopContentIntroItem}>
                    <Icon icon="fontisto:world-o" />
                    <h4>Giao hàng toàn quốc</h4>
                    <p>Giao hàng nhanh chóng trên toàn quốc</p>
                  </div>
                  <div className={styles.productDetailTopContentIntroItem}>
                    <Icon icon="material-symbols:currency-exchange-rounded" />
                    <h4>Chính sách hoàn tiền</h4>
                    <p>60 ngày hoàn trả với bất kỳ lý do gì</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    );
};

export default ProductDetailTop;