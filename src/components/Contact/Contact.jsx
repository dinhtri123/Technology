import React from 'react';
import styles from "./ContactStyles.module.css";
import { Icon } from "@iconify/react";
import Button from '../Button/Button';

const Contact = () => {
    return (
      <div className={styles.contact}>
        <div className={`container ${styles.contactWrapper}`}>
          <h3>Hãy liên hệ với chúng tôi</h3>
          <div className={styles.contactContent}>
            <div className={styles.contactForm}>
              <h4>Liên hệ</h4>
              <p>
                Địa chỉ email của bạn sẽ không được công bố. Các trường bắt buộc
                được đánh dấu *
              </p>
              <form action="">
                <div className={styles.contactFormItem}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Họ và tên *"
                  />
                </div>
                <div className={styles.contactFormItem}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email *"
                  />
                </div>
                <div className={styles.contactFormItem}>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Số điện thoại *"
                  />
                </div>
                <div className={styles.contactFormItem}>
                  <textarea
                    name="note"
                    id="note"
                    cols="30"
                    rows="10"
                    placeholder="Nhập nội dung của bạn *"
                  ></textarea>
                </div>
                <div className={styles.contactFormItemSubmit}>
                  <Button className={"btnCustom"}>Gửi tin nhắn</Button>
                </div>
              </form>
            </div>
            <div className={styles.contactInfor}>
              <div className={styles.contactInforItem}>
                <div className={styles.contactInforItemImage}>
                  <img src="/contact-icon-1.png" alt="" />
                </div>
                <a
                  className={styles.contactInforItemEmail}
                  href="mailto:dinhtriqs111@gmail.com"
                >
                  dinhtriqs111@gmail.com
                </a>
                <a
                  className={styles.contactInforItemPhone}
                  href="tel:0385396473"
                >
                  (+84) 385 396 473
                </a>
              </div>
              <div className={styles.contactInforItem}>
                <div className={styles.contactInforItemImage}>
                  <img src="/contact-icon-2.png" alt="" />
                </div>
                <p>
                  Tổ 2, Thôn Tam Hòa, Thị trấn Đông Phú, Huyện Quế Sơn, Tỉnh
                  Quảng Nam
                </p>
              </div>
              <div className={styles.contactInforItem}>
                <div className={styles.contactInforItemImage}>
                  <img src="/contact-icon-3.png" alt="" />
                </div>
                <p>Các trang mạng xã hội</p>
                <div className={styles.contactInforItemSocial}>
                  <Icon icon="logos:facebook" />
                  <Icon icon="skill-icons:instagram" />
                  <Icon icon="skill-icons:twitter" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.084587045315!2d108.22493121146995!3d16.061099784552983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219d2f38ce45d%3A0xbfa47dd116d4db88!2zQ-G6p3UgUuG7k25nLCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1701436917160!5m2!1svi!2s"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    );
};

export default Contact;