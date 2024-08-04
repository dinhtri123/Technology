import React from "react";
import Header from "../parts/Header/Header";
import Footer from "../parts/Footer/Footer";
import { Outlet } from "react-router-dom";

const LayoutPage = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default LayoutPage;
