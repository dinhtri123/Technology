import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import styles from './ProductStyles.module.css';

const ProductPage = () => {
    return (
      <>
        <Breadcrumb title={"Sản phẩm"}></Breadcrumb>
        <div className={styles.productPage}></div>
      </>
    );
};

export default ProductPage;