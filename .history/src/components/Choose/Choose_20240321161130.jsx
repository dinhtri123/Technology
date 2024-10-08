import React from 'react';
import styles from "./ChooseStyles.module.css";
import Title from '../Title/Title';
import ChooseItem from './ChooseItem';
import { Icon } from "@iconify/react";

const Choose = () => {
    return (
      <div className={styles.choose}>
        <div className={`container ${styles.chooseWrapper}`}>
          <Title
            icon={<Icon icon="icon-park-solid:circle-four"  />}
            childrenSubtitle={"Tại sao là chúng tôi"}
            className={styles.chooseTitle}
          >
            Tại sao mọi người chọn chúng tôi
          </Title>
          <div className={styles.chooseContent}>
            <ChooseItem
              image={"/gift-box 1.png"}
              title={`Giao hàng nhanh chóng và an toàn`}
            ></ChooseItem>
            <ChooseItem
              image={"/price-tag 1.png"}
              title={"Đảm bảo 100% về sản phẩm"}
            ></ChooseItem>
            <ChooseItem
              image={"/tips 1.png"}
              title={"Chính sách hoàn trả sản phẩm 24h"}
            ></ChooseItem>
            <ChooseItem
              image={"/quality 1.png"}
              title={"Chất lượng sản phẩm và dịch vụ uy tín"}
            ></ChooseItem>
            <ChooseItem
              image={"/24-hours 1.png"}
              title={"Tư vấn và hỗ trợ khách hàng 24h"}
            ></ChooseItem>
          </div>
        </div>
      </div>
    );
};

export default Choose;