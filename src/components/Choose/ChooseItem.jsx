import React from 'react';
import styles from "./ChooseStyles.module.css"

const ChooseItem = ({image, title}) => {
    return (
        <div className={styles.chooseItem}>
            <div className={styles.chooseItemImage}>
                <img src={image} width={70} height={70} alt="" />
            </div>
            <h3 className={styles.chooseItemTille}>{title}</h3>
        </div>
    );
};

export default ChooseItem;