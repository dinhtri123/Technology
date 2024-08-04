import React, { useEffect, useState } from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import styles from './ProductStyles.module.css';
import Product from './Product';
import request from '../../utils/request';
import { Link } from 'react-router-dom';
import { Icon } from "@iconify/react";

const ProductPage = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fecthAPI = async () => {
            const response = await request.get("product?_limit=4");
            setProduct(response.data)
        };
        fecthAPI()
    },[])
    return (
      <>
        <Breadcrumb title={"Sản phẩm"}></Breadcrumb>
        <div className={`${styles.productPage} container`}>
          <div className={styles.productPageItem}>
            <div className={styles.productPageItemTop}>
              <h3>Laptop</h3>
              <Link>Xem tất cả <Icon icon="formkit:right" /></Link>
            </div>

            <ul className={styles.productPageList}>
              {product.length > 0 &&
                product.map((product) => (
                  <li key={product.idProduct}>
                    <Product
                      thumbnail={product.thumbnail}
                      title={product.title}
                      category={product.category}
                      sale={false}
                      priceOld={product.priceOld}
                      priceNew={product.priceNew}
                      idProduct={product.idProduct}
                    ></Product>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </>
    );
};

export default ProductPage;