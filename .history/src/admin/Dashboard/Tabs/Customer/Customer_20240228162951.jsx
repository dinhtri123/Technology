import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../../../context/ThemeContext';
import styles from './Customer.module.css';
import { Icon } from "@iconify/react";

const Customer = () => {
    const themes = useContext(ThemeContext);
    const [showPopup, setShowPopup] = useState(false)
    const handleCloseViewCustomer = () => {
        setShowPopup(false)
    };
    const handleSetShowPopupDetail = () => {
        setShowPopup(true);
    };
    const handleShowOrderView = (e) => {
        const orderContent = e.currentTarget.parentNode.lastChild;
        console.log(orderContent.style.maxHeight);
        if(orderContent.style.maxHeight) {
            orderContent.style.maxHeight = null;
        }else {
            orderContent.style.maxHeight = `${orderContent.scrollHeight}px`
        }
    }
    return (
      <div
        className={`${styles.customer} tabWrapper ${
          themes.activeSidebar ? "activeSidebar" : ""
        }`}
      >
        <h2>Quản lý khách hàng</h2>
        <div className={styles.customerList}>
          <table>
            <thead>
              <tr>
                <th>Tên người dùng</th>
                <th>Họ & tên</th>
                <th>Ngày tạo</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className={styles.userImage}>
                    <img src="../../../../../public/user-2 1.png" alt="" />
                  </span>
                  <span>dinhtri123</span>
                </td>
                <td>Phạm Đình Trí</td>
                <td>28/02/2024 14:25 PM</td>
                <td>dinhtriqs111@gmail.com</td>
                <td
                  className={styles.viewCustomerDetail}
                  onClick={handleSetShowPopupDetail}
                >
                  Xem chi tiết
                </td>
              </tr>
              <tr>
                <td>
                  <span className={styles.userImage}>
                    <img src="../../../../../public/user-2 1.png" alt="" />
                  </span>
                  <span>dinhtri123</span>
                </td>
                <td>Phạm Đình Trí</td>
                <td>28/02/2024 14:25 PM</td>
                <td>dinhtriqs111@gmail.com</td>
                <td className={styles.viewCustomerDetail}>Xem chi tiết</td>
              </tr>
            </tbody>
          </table>
          {showPopup && (
            <div className={`${styles.popupDetail}`}>
              <div className={`${styles.popupWrapper}`}>
                <div className={styles.popupDetailTitle}>
                  <h3>Thông tin khách hàng</h3>
                  <span
                    className={styles.popupViewClose}
                    onClick={handleCloseViewCustomer}
                  >
                    <Icon icon="iconamoon:close-duotone" />
                  </span>
                </div>
                <div className={styles.popupContent}>
                  <div className={styles.inforItem}>
                    <b>Tên người dùng: </b> <span>dinhtri123</span>
                  </div>
                  <div className={styles.inforItem}>
                    <b>Họ & tên: </b> <span>Phạm Đình Trí</span>
                  </div>
                  <div className={styles.inforItem}>
                    <b>Số điện thoại: </b> <span>012 345 678</span>
                  </div>
                  <div className={styles.inforItem}>
                    <b>Email: </b> <span>dinhtriqs111@gmail.com</span>
                  </div>
                  <div className={styles.inforItem}>
                    <b>Ngày tạo: </b> <span>28/02/2024 14:25PM</span>
                  </div>
                  <div className={styles.inforItem}>
                    <b>Ngày sinh: </b> <span>10/06/2001</span>
                  </div>
                  <div className={styles.inforItem}>
                    <b>Địa chỉ: </b>{" "}
                    <span>
                      Tổ 2, thôn Tam Hòa, TT Đông Phú, huyện Quế Sơn, tỉnh Quảng
                      Nam
                    </span>
                  </div>
                </div>
                <h4>Thông tin đơn hàng</h4>
                <div className={styles.inforOrder}>
                  <div className={styles.inforOrderItem}>
                    <div className={styles.inforOrderItemTitle} onClick={handleShowOrderView}>
                      <span>Đơn hàng #1234</span>
                      <span>
                        <Icon icon="icon-park-outline:down" />
                      </span>
                    </div>
                    <div className={styles.inforOrderItemContent}>
                      <table>
                        <thead>
                          <tr>
                            <th>Sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Tổng tiền</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h4>Tai nghe Bluetooth chụp tai Sony WH-CH520</h4>
                              <div className={styles.option}>
                                <span>
                                  <b>Màu sắc:</b>Đen
                                </span>
                                <span>
                                  <b>Loại:</b>Bluetooth
                                </span>
                              </div>
                            </td>
                            <td>2</td>
                            <td>560.000 VND</td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Tai nghe Bluetooth chụp tai Sony WH-CH520</h4>
                              <div className={styles.option}>
                                <span>
                                  <b>Màu sắc:</b>Đen
                                </span>
                                <span>
                                  <b>Loại:</b>Bluetooth
                                </span>
                              </div>
                            </td>
                            <td>2</td>
                            <td>560.000 VND</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

export default Customer;