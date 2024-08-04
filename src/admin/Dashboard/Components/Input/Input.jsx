import React from 'react';
import styles from './Input.module.css'

const Input = ({label, type ='text', name, placeholder}) => {
    return (
      <div className={styles.input}>
        <label htmlFor={name}>{label} : </label>
        <input type={type} name={name} id={name} placeholder={placeholder} />
      </div>
    );
};

export default Input;