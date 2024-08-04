import React, { useContext } from 'react';
import styles from './AddAttribute.module.css';
import { ThemeContext } from '../../../../context/ThemeContext';
import DropdownCategory from '../../Components/Dropdown/DropdownCatgory';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';

const AddAttr = () => {
  const themes = useContext(ThemeContext);

    return (
      <div
        className={`${styles.addAttrCommon} ${styles.addCate} tabWrapper ${
          themes.activeSidebar ? "activeSidebar" : ""
        }`}
      >
        <h2>Thêm thuộc tính</h2>
        <DropdownCategory />
        <DropdownCategory title="Chọn thông số" itemActive="Thông số" />
        <form className={`${styles.addAttrCommonContent} ${styles.addAttrForm}`}>
          <div>
            <Input
              label={"Tên thuộc tính"}
              name={"attr"}
              placeholder={"Nhập tên thuộc tính..."}
            />
            <Button>Thêm</Button>
          </div>
          <Button>Thêm thuộc tính</Button>
        </form>
      </div>
    );
};

export default AddAttr;