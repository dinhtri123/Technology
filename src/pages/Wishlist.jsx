import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import axios from 'axios';
import Product from '../components/Product/Product';
import SkeletonProduct from '../components/Skeleton/SkeletonProduct';

const Wishlist = () => {
  const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([]);

    useEffect(() => {
      const fetchDataProductWishlist = async () => {
        try {
          setLoading(true)
          const repsonse = await axios.get("http://localhost:3000/product");
          setProduct(repsonse.data);
          setLoading(false);
        } catch (error) {
          setLoading(true);
        }
      };
      fetchDataProductWishlist();
    }, []);
    return (
      <div>
        <Breadcrumb title={"Yêu thích"}></Breadcrumb>
        <div className="container">
          <ul className={"productWishlist"}>
            {loading ? (
              <>
                <SkeletonProduct />
                <SkeletonProduct />
                <SkeletonProduct />
                <SkeletonProduct />
                <SkeletonProduct />
                <SkeletonProduct />
                <SkeletonProduct />
                <SkeletonProduct />
              </>
            ) : (
              <>
                {product.length > 0 &&
                  product.map((product) => (
                    <li key={product.id}>
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
              </>
            )}
          </ul>
        </div>
      </div>
    );
};

export default Wishlist;