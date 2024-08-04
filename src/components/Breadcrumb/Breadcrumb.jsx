import React, { useContext } from 'react';
import styles from "./BreadcrumbStyles.module.css";
import {Link} from "react-router-dom";
import { Icon } from "@iconify/react";
import { ThemeContext } from '../../context/ThemeContext';

const Breadcrumb = ({ title, titleChildren }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={styles.breadcrumb}>
      <div className={`container ${styles.breadcrumbWrapper}`}>
        <Link to={"/"}>
          <Icon icon="carbon:home" />
          Trang chủ
        </Link>
        <Icon icon="icon-park-outline:right" />
        <span className={styles.breadcrumbItem}>{title}</span>
        {titleChildren !== undefined && (
          <>
            <Icon icon="icon-park-outline:right" />
            <span className={styles.breadcrumbItem}>{titleChildren}</span>
          </>
        )}
        {theme.doSearch !== "" && (
          <>
            <Icon icon="icon-park-outline:right" />
            <span className={styles.breadcrumbItemSearch}>
              Kết quả tìm kiếm cho “<span>{theme.doSearch}</span>”
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Breadcrumb;