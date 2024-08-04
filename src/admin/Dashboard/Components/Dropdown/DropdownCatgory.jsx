import React, { useEffect, useRef, useState } from "react";
import styles from './Dropdown.module.css'
import { Icon } from "@iconify/react";
import request from "../../../../utils/request";

const DropdownCategory = ({ title = 'Chọn danh mục', itemActive = 'Danh mục' }) => {
  const [showCategroy, setShowCategory] = useState(false);
  const dropdownCategoryRef = useRef();
  const textActiveCateRef = useRef();
  const [category, setCateogry] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await request.get("categogy");
        setCateogry(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthData();
  }, []);
  const handleClickShowCate = () => {
    setShowCategory(!showCategroy);
    if (dropdownCategoryRef.current.style.maxHeight) {
      dropdownCategoryRef.current.style.maxHeight = null;
    } else {
      dropdownCategoryRef.current.style.maxHeight = `${dropdownCategoryRef.current.scrollHeight}px`;
    }
  };
  const handleChooseCateItem = (e) => {
    let getText = e.target.textContent;
    textActiveCateRef.current.textContent = getText;
    setShowCategory(!showCategroy);
    dropdownCategoryRef.current.style.maxHeight = null;
  };
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown}>
        <h3>{title}: </h3>
        <div className={styles.dropdownContent}>
          <div className={styles.dropdownActive} onClick={handleClickShowCate}>
            <span ref={textActiveCateRef}>{itemActive}</span>
            <span className={`${showCategroy ? styles.active : ""}`}>
              <Icon icon="mingcute:down-line" />
            </span>
          </div>
          <ul className={styles.dropdownList} ref={dropdownCategoryRef}>
            {category.length > 0 &&
              category.map((category) => (
                <li onClick={handleChooseCateItem} key={category.id}>
                  {category.title}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownCategory;
