import React, { useState } from 'react';
import styles from "./CartStyles.module.css";
import { Icon } from "@iconify/react";
import Button from '../Button/Button';
import {Link} from "react-router-dom"
import SkeletonCart from '../Skeleton/SkeletonCart';
import SkeletonCartCheckout from '../Skeleton/SkeletonCartCheckout';

const Cart = () => {
  const [loading, setLoading] = useState(false)
    return (
      <div className={styles.cart}>
        <div className={`container ${styles.cartWrapper}`}>
          <div className={styles.cartLeft}>
            <div className={styles.cartLeftTop}>
              <h3>Giỏ hàng của bạn</h3>
              <span>Xóa giỏ hàng</span>
            </div>
            <div className={styles.cartLeftProduct}>
              <table>
                <tr>
                  <td className={styles.cartLeftProductImage}>
                    <img src="/headphone1.png" alt="" />
                  </td>
                  <td className={styles.cartLeftProductContent}>
                    <h4 className={styles.cartLeftProductTitle}>
                      Tai nghe Bluetooth chụp tai Sony WH-CH520
                    </h4>
                    <span className={styles.cartLeftProductDelete}>
                      <Icon icon="ic:round-close" />
                    </span>
                    <div className={styles.cartLeftProductOption}>
                      <span>Màu: <strong>Trắng</strong></span>
                      <span>Loại: <strong>Bluetooth</strong></span>
                    </div>
                    <div className={styles.cartLeftProductBottom}>
                      <div className={styles.inforCartProductQuantity}>
                        <span>
                          <Icon icon="fa6-solid:minus" />
                        </span>
                        <input
                          type="text"
                          name="quantity"
                          id="quantity"
                          value={2}
                          disabled
                        />
                        <span>
                          <Icon icon="fa6-solid:plus" />
                        </span>
                      </div>
                      <span className={styles.cartLeftProductPrice}>
                        3.690.000 đ
                      </span>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className={styles.cartTotal}>
            <h3>Tóm tắt đơn hàng</h3>
            <div className={styles.cartTotalContent}>
              {loading ? (
                <SkeletonCartCheckout />
              ) : (
                <>
                  <div className={styles.cartTotalItem}>
                    <h4>Tổng tiền</h4>
                    <span>3.338.000 đ</span>
                  </div>
                  <div className={styles.cartTotalItem}>
                    <h4>Phí vận chuyển</h4>
                    <span>20.000 đ</span>
                  </div>
                  <div className={styles.coupon}>
                    <input type="text" placeholder="Nhập mã giảm giá" />
                    <button>Áp dụng</button>
                  </div>
                  <div className={styles.cartTotalItem}>
                    <h4>Tổng thành tiền</h4>
                    <span>3.358.000 đ</span>
                  </div>
                  <div className={styles.cartTotalButton}>
                    <Link to={"/thanhtoan"}>
                      <Button>Thanh toán</Button>
                    </Link>
                    <Link to={"/sanpham"}>Tiếp tục mua sắm</Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cart;