import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./NewsStyles.module.css";
import NewsItem from "./NewsItem";
import Input from "../../components/Input/Input";
import { Icon } from "@iconify/react";
import NewsItemSmall from "./NewsItemSmall";
import SkeletonNews from "../Skeleton/SkeletonNews";
import SkeletonNewsItemSmall from "../Skeleton/SkeletonNewsItemSmall";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const endPoint = "http://localhost:3000/news";
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(endPoint);
        setNews(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    };
    getData();
  }, []);
  return (
    <div className={styles.newsPage}>
      <div className={`container ${styles.newsPageWrapper}`}>
        <div className={styles.newsPageLeft}>
          {loading ? (
            <>
              <SkeletonNews />
              <SkeletonNews />
              <SkeletonNews />
              <SkeletonNews />
            </>
          ) : (
            <>
              {news.map((item) => (
                <NewsItem
                  key={item.id}
                  thumbnail={item.thumbnail}
                  date={item.time}
                  review={item.review}
                  title={item.title}
                  detail={item.detail}
                ></NewsItem>
              ))}
            </>
          )}
        </div>
        <div className={styles.newsPageRight}>
          <div className={styles.newsPageSearch}>
            <h3>Tìm kiếm</h3>
            <form action="">
              <Input
                type="search"
                name={"searchNews"}
                placeholder={"Tìm kiếm tin tức"}
              >
                <Icon icon="ion:search" />
              </Input>
            </form>
          </div>
          <div className={styles.newsPageViews}>
            <h3>Tin xem nhiều</h3>
            <div className={styles.newsPageViewsContent}>
              {loading ? (
                <>
                  <SkeletonNewsItemSmall />
                  <SkeletonNewsItemSmall />
                  <SkeletonNewsItemSmall />
                  <SkeletonNewsItemSmall />
                </>
              ) : (
                <>
                  {news.map((item) => (
                    <NewsItemSmall
                      key={item.id}
                      thumbnail={item.thumbnail}
                      date={item.time}
                      title={item.title}
                    ></NewsItemSmall>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
