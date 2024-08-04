import React from 'react';
import styles from "./NewsStyles.module.css";
import { Icon } from "@iconify/react";
import SkeletonNewsItemSmall from '../Skeleton/SkeletonNewsItemSmall';


const NewsItemSmall = ({thumbnail, title, date, loading}) => {
    return (
      <>
        {loading ? (<SkeletonNewsItemSmall/>) : (<div className={styles.newsPageViewsItem}>
        <div className={styles.newsPageViewsItemImage}>
          <img src={thumbnail} width={140} height={100} alt="" />
        </div>
        <div className={styles.newsPageViewsItemRight}>
          <h4>
            {title}
          </h4>
          <div className={styles.newsPageViewsItemRightDate}>
            <span>{date}</span> |{" "}
            <span>
              <Icon icon="solar:eye-broken" />
              300K
            </span>
          </div>
        </div>
      </div>)}
      </>
    );
};

export default NewsItemSmall;