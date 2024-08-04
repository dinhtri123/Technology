import React, { useContext } from 'react';
import styles from "./AddAttribute.module.css";
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import DropdownCategory from '../../Components/Dropdown/DropdownCatgory';
import { ThemeContext } from '../../../../context/ThemeContext';


const AddParams = () => {
  const themes = useContext(ThemeContext);
    return (
      <div
        className={`${styles.addAttrCommon} ${styles.addCate} tabWrapper ${
          themes.activeSidebar ? 'activeSidebar' : ""
        }`}
      >
        <h2>Thêm thông số</h2>
        <DropdownCategory />
        <form className={styles.addAttrCommonContent}>
          <Input
            label={"Tên thông số"}
            name={"params"}
            placeholder={"Nhập tên thông số..."}
          />
          <Button>Thêm thông số</Button>
        </form>
      </div>
    );
};

export default AddParams;