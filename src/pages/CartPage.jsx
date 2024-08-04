import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Cart from '../components/Cart/Cart';

const CartPage = () => {
    return (
      <div>
        <Breadcrumb title={"Giỏ hàng"}></Breadcrumb>
        <Cart></Cart>
      </div>
    );
};

export default CartPage;