import React from 'react';
import styles from "./ProductStyles.module.css"

const CheckboxFilter = ({
  type = "checkbox",
  name,
  children,
  handleFilterByCategory,
}) => {
  return (
    <span onClick={handleFilterByCategory} data-id={name}>
      <input type={type} name={name} id={name} />
      <label htmlFor={name}>{children}</label>
    </span>
  );
};

export default CheckboxFilter;