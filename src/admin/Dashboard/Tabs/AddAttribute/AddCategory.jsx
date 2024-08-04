import React, { useContext } from 'react';
import styles from './AddAttribute.module.css'
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { ThemeContext } from '../../../../context/ThemeContext';

const AddCategory = () => {
  const themes = useContext(ThemeContext);
    return (
      <div
        className={`${styles.addAttrCommon} ${styles.addCate} tabWrapper ${
          themes.activeSidebar ? "activeSidebar" : ""
        }`}
      >
        <h2>Thêm danh mục</h2>
        <form className={styles.addAttrCommonContent}>
          <Input
            label={"Tên danh mục"}
            name={"category"}
            placeholder={"Nhập tên danh mục..."}
          />
          <Button>Thêm danh mục</Button>
        </form>
      </div>
    );
};

export default AddCategory;