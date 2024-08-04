import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import NewsPage from '../components/News/NewsPage';

const News = () => {
    return (
      <div>
        <Breadcrumb title={"Tin Tức"}></Breadcrumb>
        <NewsPage></NewsPage>
      </div>
    );
};

export default News;