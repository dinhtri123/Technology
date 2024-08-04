import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./SearchStyles.module.css";
import request from "../../../utils/request";
import {Link} from "react-router-dom"
import { formatPrice } from "../../../components/Product/FormatPrice";
import { useDebounce } from "../../../hooks/useDebounce";
import Loading from "../../../components/Loading/Loading";
import { ThemeContext } from "../../../context/ThemeContext";
import { Icon } from "@iconify/react";

const Search = ({ activeSearch, handleClickProductSearch }) => {
  const theme = useContext(ThemeContext);
  const [product, setProduct] = useState([]);
  const [searchDebounce, loading] = useDebounce(theme.keywords, 500);

  useEffect(() => {
    const fetchDataCategory = async () => {
      let response;
      if (searchDebounce) {
        response = await request.get(`product?title_like=${searchDebounce}`);
      } else if (searchDebounce == "") {
        response = await request.get("product");
      }
      setProduct(response.data);
    };
    fetchDataCategory();
  }, [searchDebounce]);
  return (
    <>
      <div
        className={`${styles.searchResult} ${
          activeSearch ? styles.active : ""
        }`}
      >
        <div
          className={`${styles.searchResultWrapper}`}
        >
          {loading ? (
            <Loading></Loading>
          ) : (
            <>
              {theme.keywords == "" && (
                <div className={styles.searchResultTopInner}>
                  <h3>Từ khóa phổ biến</h3>
                  <ul>
                    <li>
                      <a href="">
                        <Icon icon="ion:search-outline" />
                        <span>Laptop</span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Icon icon="ion:search-outline" />
                        <span>Điện thoại</span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Icon icon="ion:search-outline" />
                        <span>Tai nghe</span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Icon icon="ion:search-outline" />
                        <span>Đồng hồ</span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Icon icon="ion:search-outline" />
                        <span>Smartphone</span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Icon icon="ion:search-outline" />
                        <span>Smartwatch</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}

              <ul className={styles.searchResultList}>
                {theme.keywords !== "" &&
                  product.map((item) => (
                    <li key={item.idProduct}>
                      <ProductItem
                        id={item.idProduct}
                        thumbnail={item.thumbnail}
                        title={item.title}
                        priceNew={item.priceNew}
                        priceOld={item.priceOld}
                        inStock={item.inStock}
                        handleClickProductSearch={handleClickProductSearch}
                        searchDebounce={searchDebounce}
                      ></ProductItem>
                    </li>
                  ))}
              </ul>
              {product.length == 0 && theme.keywords !== "" && (
                <p className={styles.searchResultNotFound}>
                  <img src="../../../../public/no_product_found.jpg" alt="" />
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

function ProductItem({
  id,
  thumbnail,
  title,
  priceNew,
  priceOld,
  inStock,
  handleClickProductSearch,
  searchDebounce,
}) {
  const titleRef = useRef();
  useEffect(() => {
    const lowerCaseTextSearch = searchDebounce.toLowerCase();
    const index = title.toLowerCase().indexOf(lowerCaseTextSearch);

    if (index != -1) {
      titleRef.current.innerHTML = `${title.substring(
        0,
        index
      )}<b>${title.substring(
        index,
        index + searchDebounce.length
      )}</b>${title.substring(index + searchDebounce.length)}`;
    }
  }, [searchDebounce]);
  return (
    <div className={styles.searchResultContent}>
      <div className={styles.searchResultContentImage}>
        <img src={thumbnail} alt={title} />
      </div>
      <div className={styles.searchResultContentText}>
        <Link to={`/chitietsanpham/${id}`} onClick={handleClickProductSearch}>
          <h4 ref={titleRef}>{title}</h4>
        </Link>
        <div className={styles.searchResultContentTextPrice}>
          <span>{formatPrice(priceNew)} đ</span>
          <span>{formatPrice(priceOld)} đ</span>
        </div>
        <p className={`${styles.searchResultContentTextStatus} md`}>
          Tình trạng:{" "}
          <span className={styles.inStock}>
            {inStock > 0 ? "Còn hàng" : "Hết hàng"}
          </span>
        </p>
      </div>
    </div>
  );
}
 

export default Search;
