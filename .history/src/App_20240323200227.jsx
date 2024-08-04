import { Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutPage from "./layout/LayoutPage";
import Home from "./pages/Home";
import News from "./pages/News";
import Account from "./pages/Account";
import Wishlist from "./pages/Wishlist";
import ProductDetail from "./components/Product/ProductDetail";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./components/Product/ProductPage";


function App() {
  return (
    <>
      <Routes>
        <Route element={<LayoutPage></LayoutPage>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/sanpham" element={<ProductPage></ProductPage>}></Route>
          <Route path="/tintuc" element={<News></News>}></Route>
          <Route path="/lienhe" element={<ContactPage></ContactPage>}></Route>

          <Route path="/taikhoan" element={<Account></Account>}></Route>
          <Route path="/yeuthich" element={<Wishlist></Wishlist>}></Route>
          <Route path="/giohang" element={<CartPage></CartPage>}></Route>
          <Route
            path="/thanhtoan"
            element={<CheckoutPage></CheckoutPage>}
          ></Route>

          <Route
            path="/chitietsanpham/:userId"
            element={<ProductDetail></ProductDetail>}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
