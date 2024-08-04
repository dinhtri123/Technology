import { useEffect, useState } from 'react';
import styles from "./ProductStyles.module.css";
import { Icon } from "@iconify/react";
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { formatPrice } from './FormatPrice';
import { PercentDiscount } from './PercentDiscount';
import Quickview from './Quickview';
import SkeletonProduct from '../Skeleton/SkeletonProduct';


const Product = ({
  loading,
  thumbnail,
  title,
  sale = false,
  news = false,
  inStock = true,
  category,
  priceOld,
  priceNew,
  idProduct,
  wishlist,
}) => {
  const [quickview, setQuickview] = useState(false);
  const [id, setId] = useState(null);

  const handleShowQuickview = () => {
    setQuickview(true);
    setId(idProduct);
  };
  const handleClosePopupQuickview = () => {
    setQuickview(false);
  };

  return (
    <>
      {loading ? (
        <SkeletonProduct />
      ) : (
        <>
          <div className={styles.product}>
            <div className={styles.productImageWrapper}>
              <Link
                to={`/chitietsanpham/${idProduct}`}
                className={styles.productImage}
              >
                <img src={thumbnail} width={230} height={230} alt={title} />
              </Link>
              {sale && (
                <span className={styles.productPercent}>
                  <Icon icon="foundation:burst-sale" />
                </span>
              )}
              {news && (
                <span className={styles.productNews}>
                  <Icon icon="clarity:new-solid" />
                </span>
              )}
              {!inStock && (
                <span className={styles.productInStock}>Hết hàng</span>
              )}
              <div className={`${styles.productAction} md`}>
                <div className={styles.productActionWishlist}>
                  {wishlist ? (
                    <Icon icon="solar:heart-bold" color="#db003b" />
                  ) : (
                    <Icon icon="solar:heart-linear" />
                  )}

                  <span>Yêu thích</span>
                </div>
                <div
                  className={styles.productActionQuickView}
                  onClick={handleShowQuickview}
                >
                  <Icon icon="solar:eye-broken" />
                  <span>Xem nhanh</span>
                </div>
              </div>
            </div>
            <div className={styles.productContent}>
              <div className={styles.productContentTop}>
                <div className={styles.productContentCategory}>
                  <h4>{category}</h4>
                  <div className={styles.productContentReview}>
                    <span className={styles.productContentReviewIcon}>
                      <Icon icon="ic:round-star" />
                      <Icon icon="ic:round-star" />
                      <Icon icon="ic:round-star" />
                      <Icon icon="ic:round-star" />
                      <Icon icon="ic:round-star" />
                    </span>
                    <span>(60)</span>
                  </div>
                </div>
                <h3 className={styles.productContentTitle}>{title}</h3>
              </div>

              <div className={styles.productContentBottom}>
                <div className={styles.productContentPrice}>
                  <span className={styles.priceNew}>
                    {formatPrice(priceNew)}đ
                  </span>
                  <div>
                    <span className={styles.priceOld}>
                      {formatPrice(priceOld)}đ
                    </span>
                    <span className={styles.percent}>
                      - {PercentDiscount(priceNew, priceOld)}
                    </span>
                  </div>
                </div>
                <Link>
                  <Button className={styles.productActionBtn}>
                    Thêm giỏ hàng <Icon icon="el:shopping-cart-sign"/>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          {quickview ? (
            <Quickview id={id} btnClose={handleClosePopupQuickview}></Quickview>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default Product;