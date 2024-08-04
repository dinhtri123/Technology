import React, { useState } from 'react';
import styles from "./CheckoutStyles.module.css"
import Input from '../Input/Input';
import { Icon } from "@iconify/react";
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import SkeletonCheckoutInfor from '../Skeleton/SkeletonCheckoutInfor';
import SkeletonCheckoutPayment from '../Skeleton/SkeletonCheckoutPayment';
import SkeletonCartCheckout from '../Skeleton/SkeletonCartCheckout';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
    return (
      <div className={styles.checkout}>
        <div className={`container ${styles.checkoutWrapper}`}>
          <div className={styles.checkoutLeft}>
            <h3>Chi tiết thanh toán</h3>
            <div className={styles.checkoutLeftContent}>
              {loading ? (
                <SkeletonCheckoutInfor />
              ) : (
                <form action="">
                  <div className={styles.checkoutLeftItem}>
                    <label htmlFor="name">Họ và tên</label>
                    <Input name={"name"} defaultValue={"Phạm Đình Trí"}>
                      <Icon icon="basil:user-solid" />
                    </Input>
                  </div>
                  <div className={styles.checkoutLeftItem}>
                    <label htmlFor="email">Email</label>
                    <Input
                      type={"email"}
                      name={"email"}
                      defaultValue={"dinhtriqs111@gmail.com"}
                    >
                      <Icon icon="carbon:email-new" />
                    </Input>
                  </div>
                  <div className={styles.checkoutLeftItem}>
                    <label htmlFor="phone">Số điện thoại</label>
                    <Input
                      type={"number"}
                      name={"phone"}
                      defaultValue={"012345678"}
                    >
                      <Icon icon="heroicons:phone-solid" />
                    </Input>
                  </div>
                  <div className={styles.checkoutLeftItem}>
                    <label htmlFor="address">Địa chỉ</label>
                    <Input
                      name={"address"}
                      defaultValue={
                        "Tổ 2 - Thôn Tam Hòa, TT. Đông Phú - H.Quế Sơn - T. Quảng Nam"
                      }
                    >
                      <Icon icon="mdi:address-marker" />
                    </Input>
                  </div>
                  <div className={styles.checkoutLeftItem}>
                    <label htmlFor="note">Ghi chú</label>
                    <textarea
                      name="note"
                      id="note"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                  <div
                    className={`${styles.checkoutLeftItemButton} btnDoubleCustom`}
                  >
                    <span>
                      <Button className={"btnCustom"}>Cập nhật</Button>
                    </span>
                    <span>
                      <Button className={"btnCustom"}>Chỉnh sửa</Button>
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
          <div className={styles.checkoutRight}>
            <h3>Đơn hàng của bạn</h3>
            <div className={styles.checkoutRightContent}>
              <div className={styles.checkoutProduct}>
                {loading ? (
                  <SkeletonCheckoutPayment />
                ) : (
                  <div className={styles.checkoutProductItem}>
                    <div className={styles.checkoutProductItemImage}>
                      <img src="../../../public/headphone1.png" alt="" />
                    </div>
                    <div className={styles.checkoutProductItemContent}>
                      <h4>Tai nghe Bluetooth chụp tai Sony WH-CH520</h4>
                      <p>Trắng - Bluetooth</p>
                      <span>1.690.000 đ x 2</span>
                    </div>
                  </div>
                )}
              </div>
              {loading ? <SkeletonCartCheckout/> : (<div className={styles.cartTotalContent}>
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
                  <Button>Đặt hàng</Button>
                  <Link to={"/sanpham"}>Tiếp tục mua sắm</Link>
                </div>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Checkout;