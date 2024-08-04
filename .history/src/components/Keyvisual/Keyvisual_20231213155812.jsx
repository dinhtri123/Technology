import React from 'react';
import styles from "./Keyvisual.Styles.module.css";
import Button from '../Button/Button';
import Title from '../Title/Title';
import {Link} from "react-router-dom"


const Keyvisual = () => {

    return (
      <div className={styles.keyvisual}>
        <div className={`container ${styles.keyvisualWrapper}`}>
          <div className={styles.keyvisualLeft}>
            <Title
              src={"/icon-title01.svg"}
              className={styles.keyvisualTitle}
              childrenSubtitle={"Deal hot trong tuần này"}
            >
              Tai nghe Bluetooth chụp tai Sony WH-CH520
            </Title>
            <Link to={"/sanpham"}>
              <Button className="btnCustom">Mua ngay</Button>
            </Link>
          </div>
          <div className={styles.keyvisualRight}>
            <img src="/headphone1.png" alt="" />
          </div>
        </div>
      </div>
    );
};

export default Keyvisual;