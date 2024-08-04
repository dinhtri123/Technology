import { useEffect, useState } from 'react';
import styles from "./ProductStyles.module.css"
import ProductDetailTop from './ProductDetailTop';
import { Icon } from "@iconify/react";
import ReactDOM from "react-dom";
import request from '../../utils/request';

const Quickview = ({id, btnClose}) => {
  const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([]);
    useEffect(() => {
      const getData = async () => {
        try {
          setLoading(true)
          const repsonse = await request.get(`product?idProduct=${id}`);
          setProduct(repsonse.data);
          setLoading(false);
        } catch (error) {
          setLoading(true);
        }
      };
      getData();
    }, []);  
    return ReactDOM.createPortal(
      <div className={`${styles.quickview}`}>
        <div className={`bg-opacity ${styles.quickviewOpacity}`}></div>
        <div className={styles.quickviewWrapper}>
          <span className={styles.btnClosePopup} onClick={btnClose}>
            <Icon icon="iconamoon:close" />
          </span>
          <ProductDetailTop
            loading={loading}
            idProduct={product}
          ></ProductDetailTop>
        </div>
      </div>,
      document.querySelector("body")
    );
      
};

export default Quickview;