import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./ProductStyles.module.css";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { Icon } from "@iconify/react";
import Product from "./Product";
import TitleAccordion from "./TitleAccordion";
import CheckboxFilter from "./CheckboxFilter";
import FilterPrice from "./FilterPrice";
import request from "../../utils/request";
import SkeletonProduct from "../Skeleton/SkeletonProduct";
import { useMedia, useMediaMobile } from "../../hooks/useMedia";
import { ThemeContext } from "../../context/ThemeContext";
import Loading from "../Loading/Loading";


let numberProduct = 9;
const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isTablet] = useMedia();
  const [isMobile] = useMediaMobile();
  const [showFilter, setShowFilter] = useState(false);
  const theme = useContext(ThemeContext);
  const [loadmore, setLoadmore] = useState(false);
  const [activeSort, setActiveSort] = useState("1");
  const [showSort, setShowSort] = useState(false);
  const textSortRef = useRef();
  const api = `product?&_limit=${numberProduct}&title_like=${theme.doSearch}&_sort=idProduct&_order=desc`;
  const [endPoint, setEndPoint] = useState(api);
  const [productLength, setProductLength] = useState()
  
  useEffect(() => {
    const fetchDataProduct = async () => {
      try {
        setLoading(true);
        let responseLength;
        let response
        if(theme.doSearch) {
          response = await request.get(
            `product?&_limit=${numberProduct}&title_like=${theme.doSearch}&_sort=idProduct&_order=desc`
          );
        }else {
          response = await request.get(endPoint);
        }
        setProduct(response.data);
        setLoading(false);
        // get length product
        responseLength = await request.get("product");
        setProductLength(responseLength.data.length)
      } catch (error) {
        setLoading(true);
      }
    };
    fetchDataProduct();
    const getHeightItemFilter = Array.from(
      document.querySelectorAll(".listFilterItem")
    );
    getHeightItemFilter.map((item) => {
      item.style.maxHeight = item.scrollHeight + "px";
    });
  }, [theme.doSearch, endPoint]);

  const handleShowSort = (e) => {
    const getNextElm = e.currentTarget.nextElementSibling;
    if (getNextElm.style.maxHeight) {
      getNextElm.style.maxHeight = null;
      getNextElm.style.border = "1px solid transparent";
    } else {
      getNextElm.style.maxHeight = getNextElm.scrollHeight + "px";
      getNextElm.style.border = "1px solid var(--cl-gray)";
    }
    setShowSort(!showSort);
  };
  const handleSort = (e) => {
    textSortRef.current.textContent = e.target.textContent;
    const dataId = e.target.dataset.id
    setActiveSort(dataId);
    if(dataId == "2") {
        setEndPoint(
          `product?&_limit=${numberProduct}&title_like=${theme.doSearch}&_sort=idProduct&_order=asc`
        );
    }else if(dataId == "3") {
      setEndPoint(`product?&_limit=${numberProduct}&title_like=${theme.doSearch}&_sort=priceNew&_order=asc`);
    }else if(dataId == "4") {
      setEndPoint(`product?&_limit=${numberProduct}&title_like=${theme.doSearch}&_sort=priceNew&_order=desc`);
    }else {
      setEndPoint(
        `product?&_limit=${numberProduct}&title_like=${theme.doSearch}&_sort=idProduct&_order=desc`
      );
    }
    const getNextElm = e.currentTarget.parentNode;
    if (getNextElm.style.maxHeight) {
      getNextElm.style.maxHeight = null;
      getNextElm.style.border = "1px solid transparent";
    } else {
      getNextElm.style.maxHeight = getNextElm.scrollHeight + "px";
      getNextElm.style.border = "1px solid var(--cl-gray)";
    }
    setShowSort(!showSort);
  };

  const handleShowFilterPopup = () => {
    setShowFilter(true)
  }
  const handleClosePopupFilter = () => {
    setShowFilter(false);
  }
  const handleLoadmoreProduct = () => {
    setLoadmore(true);
    setTimeout(() => {
      setLoadmore(false);
      setEndPoint(
        `product?_limit=${(numberProduct += 9)}&title_like=${theme.doSearch}&_sort=idProduct&_order=desc`
      );
    },1000);

  }

  const handleFilterByCategory = (e) => {
    // active checkbox
    if (e.currentTarget.children[0].checked) {
      e.currentTarget.classList.add(styles.activeCheck);
    } else {
      e.currentTarget.classList.remove(styles.activeCheck);
    }
    // handle filter category
    const textFilter = e.currentTarget.textContent;
    const getDataId = e.currentTarget.dataset.id;
    if(textFilter == getDataId) {
      setEndPoint(
        `product?&_limit=${numberProduct}&category=${getDataId}&title_like=${theme.doSearch}&_sort=idProduct&_order=desc`
      );
    }
  }
  return (
    <div>
      <Breadcrumb title={"Sản phẩm"}></Breadcrumb>
      <div className={`container ${styles.productList}`}>
        <div
          className={`${styles.productListLeft} ${
            showFilter ? styles.active : ""
          }`}
        >
          {isMobile && (
            <div className={`bg-opacity ${styles.productFilterOpacity}`}></div>
          )}
          <div className={styles.productListFilter}>
            {isMobile && (
              <span
                className={styles.btnClosePopupFilter}
                onClick={handleClosePopupFilter}
              >
                <Icon icon="iconamoon:close" />
              </span>
            )}
            <div className={styles.productListFilterTitle}>
              <h3>Bộ lọc</h3>
              <div className={styles.productListFilterReset}>Đặt lại</div>
            </div>
            <div className={`${styles.productListFilterItem}`}>
              <TitleAccordion text={"Danh mục"}></TitleAccordion>
              <div
                className={`${styles.productListFilterItemContent} listFilterItem`}
              >
                <div className={styles.productListFilterOption}>
                  <CheckboxFilter
                    name={"Laptop"}
                    handleFilterByCategory={handleFilterByCategory}
                  >
                    Laptop
                  </CheckboxFilter>
                  <CheckboxFilter
                    name={"Điện thoại"}
                    handleFilterByCategory={handleFilterByCategory}
                  >
                    Điện thoại
                  </CheckboxFilter>
                  <CheckboxFilter
                    name={"Tai nghe"}
                    handleFilterByCategory={handleFilterByCategory}
                  >
                    Tai nghe
                  </CheckboxFilter>
                  <CheckboxFilter
                    name={"Phụ kiện"}
                    handleFilterByCategory={handleFilterByCategory}
                  >
                    Phụ kiện
                  </CheckboxFilter>
                </div>
              </div>
            </div>
            <div className={`${styles.productListFilterItem}`}>
              <FilterPrice></FilterPrice>
            </div>
            <div className={`${styles.productListFilterItem}`}>
              <TitleAccordion text={"Lọc nhanh"}></TitleAccordion>
              <div
                className={`${styles.productListFilterItemContent} listFilterItem`}
              >
                <div className={styles.productListFilterOption}>
                  <CheckboxFilter name={"sale"}>Best sallers</CheckboxFilter>
                  <CheckboxFilter name={"rating"}>Top Rating</CheckboxFilter>
                  <CheckboxFilter name={"conhang"}>Còn hàng</CheckboxFilter>
                  <CheckboxFilter name={"hethang"}>Hết hàng</CheckboxFilter>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productListContent}>
          <div className={styles.productListContentTop}>
            <div className={styles.productListContentTopLeft}>
              {isMobile && (
                <p
                  className={styles.btnOpenFilter}
                  onClick={handleShowFilterPopup}
                >
                  <Icon icon="mi:filter" />
                  Bộ lọc
                </p>
              )}
              <span className={styles.productListContentTopNumber}>
                {`Hiển thị 1 - ${
                  product.length < productLength
                    ? product.length
                    : productLength
                } của ${
                  theme.doSearch == "" ? productLength : product.length
                } sản phẩm`}
              </span>
              {/* {!isMobile && (
                <span className={styles.productListContentTopNumber}>
                  Hiển thị 1 - 20 của 120 sản phẩm
                </span>
              )} */}
            </div>
            <div className={styles.productListContentTopSort}>
              <div onClick={handleShowSort}>
                <span ref={textSortRef}>Sắp xếp theo mới nhất</span>
                <Icon icon="icon-park-outline:down" />
              </div>
              <ul className={showSort ? styles.activeShowSort : ""}>
                <li
                  data-id="1"
                  onClick={handleSort}
                  className={activeSort == "1" ? styles.activeSort : ""}
                >
                  Sắp xếp theo mới nhất
                </li>
                <li
                  data-id="2"
                  onClick={handleSort}
                  className={activeSort == "2" ? styles.activeSort : ""}
                >
                  Sắp xếp theo cũ nhất
                </li>
                <li
                  data-id="3"
                  onClick={handleSort}
                  className={activeSort == "3" ? styles.activeSort : ""}
                >
                  Sắp xếp theo giá: thấp - cao
                </li>
                <li
                  data-id="4"
                  onClick={handleSort}
                  className={activeSort == "4" ? styles.activeSort : ""}
                >
                  Sắp xếp theo giá: cao - thấp
                </li>
              </ul>
            </div>
            {/* {isMobile && (
              <span className={styles.productListContentTopNumber}>
                Hiển thị 1 - 20 của 120 sản phẩm
              </span>
            )} */}
          </div>
          <ul className={styles.productListContentList}>
            {loading ? (
              <>
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
              </>
            )}
          </ul>
          {product.length < productLength && product.length > 8 && (
            <div
              className={`btnCustom ${styles.btnLoadmore}`}
              onClick={handleLoadmoreProduct}
            >
              <button>{loadmore ? <Loading /> : "Xem thêm"}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
