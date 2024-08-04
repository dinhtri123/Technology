import React, { useEffect, useRef, useState } from 'react';
import styles from "./ProductStyles.module.css"
import Title from '../Title/Title';
import Product from './Product';
import request from '../../utils/request';
import { useMedia } from '../../hooks/useMedia';
import { Icon } from "@iconify/react";



const ProductOut = () => {
    const [isTablet] = useMedia();
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("Laptop");
    const ActiveTabRef = useRef();
    const widthTabRef = useRef()
    useEffect(() => {
        const fetchDataProduct = async () => {
          try {
              setLoading(true);
              const repsonse = await request.get("product");
              setProduct(repsonse.data);
              setLoading(false);
            } catch (error) {
              setLoading(true);
            }
        };
        fetchDataProduct();

        const fetchDataCategory = async () => {
            const repsonse = await request.get(
              "categogy"
            );
            setCategory(repsonse.data);
        };
        fetchDataCategory();

        
    },[]);
    const handleClickTab = (e) => {
        setActiveTab(e.target.textContent);
        const getLeft = e.currentTarget.offsetLeft;
        const getWidth = e.currentTarget.getBoundingClientRect();
        ActiveTabRef.current.style.left = `${Math.floor(getLeft)}px`; 
        ActiveTabRef.current.style.width = `${getWidth.width}px`; 
    }
    return (
      <div className={styles.productOut}>
        <div className={`container ${styles.productOutWrapper}`}>
        <div className={styles.productOutBanner}>
          <span>
            <img src="../../../public/banner_out1.png" alt="" />
          </span>
          <span>
            <img src="../../../public/banner_out2.png" alt="" />
          </span>
        </div>
          <Title
           icon={<Icon icon="la:product-hunt" />}
            childrenSubtitle={"Sản phẩm"}
            className={styles.productOutTitle}
          >
            Sản phẩm nổi bật
          </Title>
          <div className={styles.productOutContent}>
            <div className={styles.productOutTab} ref={widthTabRef}>
              <ul className={styles.productOutTabList}>
                {isTablet && (
                  <span
                    className={styles.productOutTabActive}
                    ref={ActiveTabRef}
                  ></span>
                )}

                {category.length > 0 &&
                  category.map((category) => (
                    <li
                      key={category.id}
                      onClick={handleClickTab}
                      className={
                        activeTab == category.title ? styles.active : ""
                      }
                    >
                      {category.title}
                    </li>
                  ))}
              </ul>
            </div>
            <div className={styles.productOutTabContent}>
              <ul className={styles.productOutTabContentList}>
                {product.length > 0 &&
                  product.map((product) => (
                      activeTab == product.category && (
                        <li key={product.idProduct}>
                          <Product
                            loading={loading}
                            thumbnail={product.thumbnail}
                            title={product.title}
                            category={product.category}
                            sale={false}
                            priceOld={product.priceOld}
                            priceNew={product.priceNew}
                            idProduct={product.idProduct}
                          ></Product>
                        </li>
                      )
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductOut;