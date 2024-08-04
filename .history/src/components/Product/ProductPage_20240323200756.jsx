import React, { useState } from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import styles from './ProductStyles.module.css';
import Product from './Product';

const ProductPage = () => {
    const [product, setProduct] = useState([]);
    return (
      <>
        <Breadcrumb title={"Sản phẩm"}></Breadcrumb>
        <div className={styles.productPage}>
          <div className={styles.productPageItem}>
            <h3>Laptop</h3>
            <ul className={styles.productPageList}>
            {product.length > 0 && product.map(product => (
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