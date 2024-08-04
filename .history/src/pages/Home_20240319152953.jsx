import React from "react";
import Keyvisual from "../components/Keyvisual/Keyvisual";
import Category from "../components/Category/Category";
import ProductSale from "../components/Product/ProductSale";
import Countdown from "../components/Countdown/Countdown";
import ProductOut from "../components/Product/ProductOut";
import NewsHome from "../components/News/NewsHome";
import Choose from "../components/Choose/Choose";

const Home = () => {
  return <>
    <main>
      <Keyvisual></Keyvisual>
      <Countdown></Countdown>
      <Category></Category>
      <ProductSale></ProductSale>
      <ProductOut></ProductOut>
      <NewsHome></NewsHome>
      <Choose></Choose>
    </main>
  </>;
};

export default Home;
