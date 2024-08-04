import React from "react";
import styles from "../Product/ProductStyles.module.css";
const SkeletonPRoductDetailTop = () => {
  return (
    <div className={styles.productDetailTop}>
      <div className={styles.productDetailTopLeft}>
        <div
          className={`skeleton ${styles.productDetailTopLeftThumbnail}`}
        ></div>
        <div className={`${styles.skeletonproductDetailTopLeftGallery}`}>
          <span className="skeleton"></span>
          <span className="skeleton"></span>
          <span className="skeleton"></span>
          <span className="skeleton"></span>
        </div>
      </div>
      <div
        className={`${styles.productDetailTopContent} ${styles.skeletonproductDetailTopContent}`}
      >
        <h2 className="skeleton"></h2>
        <h1 className="skeleton"></h1>
        <div
          className={`${styles.productDetailTopContentReview} ${styles.skeletonproductDetailTopContentReview}`}
        >
          <span className="skeleton"></span>
          <div
            className={`${styles.productDetailTopContentReviewRight} ${styles.skeletonproductDetailTopContentReviewRight}`}
          >
            <span className="skeleton"></span>
            <span className="skeleton"></span>
          </div>
        </div>
        <p
          className={`skeleton ${styles.productDetailTopContentDesc} ${styles.skeletonproductDetailTopContentDesc}`}
        ></p>
        <div className={styles.productDetailTopContentPrice}>
          <span
            className={`skeleton ${styles.priceNew} ${styles.skeletonpriceNew}`}
          ></span>
          <span
            className={`skeleton ${styles.priceOld} ${styles.skeletonpriceOld}`}
          ></span>
        </div>
        <div className={styles.productDetailTopContentOption}>
          <div className={styles.productDetailTopContentOptionColor}>
            <div
              className={`skeleton ${styles.optionColorShow} ${styles.skeletonoptionColorShow}`}
            ></div>
            <div
              className={`skeleton ${styles.optionColor} ${styles.skeletonoptionColor}`}
            ></div>
          </div>
          <div className={styles.productDetailTopContentOptionColor}>
            <div
              className={`skeleton ${styles.optionColorShow} ${styles.skeletonoptionColorShow}`}
            ></div>
            <div
              className={`skeleton ${styles.optionColor} ${styles.skeletonoptionColor}`}
            ></div>
          </div>
        </div>
        <div
          className={`skeleton ${styles.productDetailTopContentQuantity} ${styles.skeletonproductDetailTopContentQuantity}`}
        ></div>
        <div className={`btnDoubleCustom ${styles.skeletonbtnDoubleCustom}`}>
          <span className="skeleton"></span>
          <span className="skeleton"></span>
        </div>
        <div className={styles.productDetailTopContentIntro}>
          <div className={styles.productDetailTopContentIntroItem}>
            <h4>Miễn phí vận chuyển</h4>
            <p>Với các đơn hàng tên 1.000.000 đ</p>
          </div>
          <div className={styles.productDetailTopContentIntroItem}>
            <h4>Chất lượng dịch vụ</h4>
            <p>Chất lượng sản phẩm luôn đặt lên hàng đầu</p>
          </div>
          <div className={styles.productDetailTopContentIntroItem}>
            <h4>Giao hàng toàn quốc</h4>
            <p>Giao hàng nhanh chóng trên toàn quốc</p>
          </div>
          <div className={styles.productDetailTopContentIntroItem}>
            <h4>Chính sách hoàn tiền</h4>
            <p>60 ngày hoàn trả với bất kỳ lý do gì</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonPRoductDetailTop;
