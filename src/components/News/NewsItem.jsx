import styles from "./NewsStyles.module.css"
import { Icon } from "@iconify/react";
import Button from '../Button/Button';
import SkeletonNews from "../Skeleton/SkeletonNews";

const NewsItem = ({thumbnail, date, review, title, detail, className, loading}) => {
    return (
      <>
        {loading ? (
          <SkeletonNews />
        ) : (
          <div className={`${styles.news} ${className}`}>
            <div className={styles.newsImage}>
              <img src={thumbnail} alt={title} />
            </div>
            <div className={styles.newsTop}>
              <span>
                <Icon icon="mdi:clock" />
                {date}
              </span>
              <span>
                <Icon icon="raphael:chat" />
                Nhận xét ({review})
              </span>
            </div>
            <div className={styles.newsContent}>
              <h3 className={styles.newsTitle}>{title}</h3>
              <p className={styles.newsDetail}>{detail}</p>
            </div>
            <Button className={`btnCustom ${styles.btnNews}`}>
              Xem thêm <Icon icon="bi:arrow-right" />
            </Button>
          </div>
        )}
      </>
    );
};

export default NewsItem;