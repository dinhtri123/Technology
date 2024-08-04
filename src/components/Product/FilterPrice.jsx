import React, { useRef } from "react";
import styles from "./ProductStyles.module.css";
import { Icon } from "@iconify/react";
import { formatPrice } from "./FormatPrice";
import Button from "../Button/Button";
import TitleAccordion from "./TitleAccordion";
import CheckboxFilter from "./CheckboxFilter";

const FilterPrice = () => {
  const refs = {
    minPriceRef: useRef(),
    maxPriceRef: useRef(),
    minTextRef: useRef(),
    maxTextRef: useRef(),
    progressRef: useRef(),
  };
  const handleRangePrice = (e) => {
    let minVal = parseInt(refs.minPriceRef.current.value);
    let maxVal = parseInt(refs.maxPriceRef.current.value);
    let priceGap = 5000;

    if (maxVal - minVal < priceGap) {
      if (e.target.className == "range-min") {
        refs.minPriceRef.current.value = maxVal - priceGap;
      } else {
        refs.maxPriceRef.current.value = minVal + priceGap;
      }
    } else {
      refs.minTextRef.current.value = formatPrice(minVal);
      refs.maxTextRef.current.value = formatPrice(maxVal);
      refs.progressRef.current.style.left =
        (minVal / refs.minPriceRef.current.max) * 100 + "%";
      refs.progressRef.current.style.right =
        100 - (maxVal / refs.maxPriceRef.current.max) * 100 + "%";
    }
  };
  const handleTextPrice = (e) => {
    let minVal = refs.minTextRef.current.value.replaceAll(".", "");
    let maxVal = refs.maxTextRef.current.value.replaceAll(".", "");
    let priceGap = 5000;

    if (maxVal - minVal >= priceGap && maxVal <= 50000) {
      if (e.target.className === "input-min") {
        refs.minPriceRef.current.value = minVal;
        refs.progressRef.current.style.left =
          (minVal / refs.minPriceRef.current.max) * 100 + "%";
      } else {
        refs.maxPriceRef.current.value = maxVal;
        refs.progressRef.current.style.right =
          100 - (maxVal / refs.maxPriceRef.current.max) * 100 + "%";
      }
    }
  };
  const handleFormatPrice = (e) => {
    // e.currentTarget.value = formatPrice(e.currentTarget.value);
    // console.log(e.currentTarget.value);
  }
  return (
    <>
      <TitleAccordion text={"Lọc theo giá"}></TitleAccordion>
      <div
        className={`${styles.productListFilterItemContent} ${styles.productListFilterPrice} listFilterItem`}
      >
        <div className={styles.productListFilterOption}>
          <CheckboxFilter name={"duoi10"}>Dưới 10 triệu</CheckboxFilter>
          <CheckboxFilter name={"10den15"}>10 - 15 triệu</CheckboxFilter>
          <CheckboxFilter name={"15den20"}>15 - 20 triệu</CheckboxFilter>
          <CheckboxFilter name={"20den25"}>20 - 25 triệu</CheckboxFilter>
          <CheckboxFilter name={"tren25"}>Trên 25 triệu</CheckboxFilter>
        </div>
        <p>Hoặc chọn mức giá phù hợp với bạn</p>

        <div className={styles.productListFilterPriceRangeWrapper}>
          <div className={styles.productListFilterPriceRangeText}>
            <div className={styles.filterRangeTextItem}>
              <div className={styles.filterRangeTextItemInput}>
                <input
                  type="number"
                  name="minPriceText"
                  id="minPriceText"
                  maxLength={5}
                  defaultValue={0}
                  ref={refs.minTextRef}
                  className="input-min"
                  onInput={handleTextPrice}
                  onBlur={handleFormatPrice}
                />
                <label htmlFor="minPriceText">.000đ</label>
              </div>
            </div>
            <span className={styles.line}>
              <Icon icon="ph:minus-bold" />
            </span>
            <div className={styles.filterRangeTextItem}>
              <div className={styles.filterRangeTextItemInput}>
                <input
                  type="number"
                  name="maxPriceText"
                  id="maxPriceText"
                  maxLength={5}
                  defaultValue={formatPrice(50000)}
                  ref={refs.maxTextRef}
                  onInput={handleTextPrice}
                  onBlur={handleFormatPrice}
                />
                <label htmlFor="maxPriceText">.000đ</label>
              </div>
            </div>
          </div>
          <div className={styles.productListFilterPriceProgress}>
            <span
              className={styles.productListFilterPriceSlideActive}
              ref={refs.progressRef}
            ></span>
          </div>
          <div className={styles.productListFilterPriceRange}>
            <input
              type="range"
              name="minPrice"
              id="minPrice"
              min={0}
              max={50000}
              defaultValue={0}
              onInput={handleRangePrice}
              ref={refs.minPriceRef}
              className={"range-min"}
              step={100}
            />
            <input
              type="range"
              name="maxPrice"
              id="maxPrice"
              min={0}
              max={50000}
              defaultValue={50000}
              onInput={handleRangePrice}
              ref={refs.maxPriceRef}
              step={100}
            />
          </div>
          <div
            className={`${styles.productListFilterPriceBtn} btnDoubleCustom`}
          >
            <span>
              <Button>Lọc</Button>
            </span>
            <span>
              <Button>Bỏ chọn</Button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterPrice;
