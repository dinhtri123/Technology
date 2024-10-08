import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./SearchStyles.module.css";
import request from "../../../utils/request";
import {Link, NavLink} from "react-router-dom"
import { formatPrice } from "../../../components/Product/FormatPrice";
import { useDebounce } from "../../../hooks/useDebounce";
import Loading from "../../../components/Loading/Loading";
import { ThemeContext } from "../../../context/ThemeContext";

const Search = ({ activeSearch, handleClickProductSearch }) => {
  const theme = useContext(ThemeContext);
  const [product, setProduct] = useState([]);
  const [searchDebounce, loading] = useDebounce(theme.keywords, 500);
  const limitProduct = product.slice(0, 2);

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
        <div className={styles.searchResultWrapper}>
          {loading ? (
            <Loading></Loading>
          ) : (
            <div className={styles.searchResultTop}>
              {theme.keywords == "" && (
                <>
                  <div className={styles.searchResultPopular}>
                    <p>Tìm kiếm nhanh:</p>
                    <ul className={styles.searchResultPopularList}>
                      <li>
                        <a href="#">Laptop</a>
                      </li>
                      <li>
                        <a href="#">Điện thoại</a>
                      </li>
                      <li>
                        <a href="#">Tai nghe</a>
                      </li>
                    </ul>
                  </div>
                  <h3>Có thể bạn sẽ thích</h3>
                </>
              )}
              <ul className={styles.searchResultList}>
                {theme.keywords == "" &&
                  limitProduct.map((item) => (
                    <li key={item.idProduct}>
                      <ProductItem
                        id={item.idProduct}
                        thumbnail={item.thumbnail}
                        title={item.title}
                        priceNew={item.priceNew}
                        inStock={item.inStock}
                        handleClickProductSearch={handleClickProductSearch}
                        searchDebounce={searchDebounce}
                      ></ProductItem>
                    </li>
                  ))}

                {theme.keywords !== "" &&
                  product.map((item) => (
                    <li key={item.idProduct}>
                      <ProductItem
                        id={item.idProduct}
                        thumbnail={item.thumbnail}
                        title={item.title}
                        priceNew={item.priceNew}
                        inStock={item.inStock}
                        handleClickProductSearch={handleClickProductSearch}
                        searchDebounce={searchDebounce}
                      ></ProductItem>
                    </li>
                  ))}
              </ul>
              {product.length == 0 && theme.keywords !== "" && (
                <p className={styles.searchResultNotFound}>
                  Không tìm thấy sản phẩm
                </p>
              )}
            </div>
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
        <p className={styles.searchResultContentTextPrice}>
          {formatPrice(priceNew)} đ
        </p>
        <p className={`${styles.searchResultContentTextStatus} md`}>
          Tình trạng:{" "}
          <span className={styles.inStock}>
            {inStock > 0 ? "Còn hàng" : "Hết hàng"}
          </span>
        </p>
      </div>
      <NavLink
        to={`/chitietsanpham/${id}`}
        className={`${styles.searchResultContentRedirect} md`}
        onClick={handleClickProductSearch}
      >
        Xem chi tiết
      </NavLink>
    </div>
  );
}
 

export default Search;
