import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Checkout from '../components/Checkout/Checkout';

const CheckoutPage = () => {
    return (
      <div>
        <Breadcrumb title={"Thanh toán"}></Breadcrumb>
        <Checkout></Checkout>
      </div>
    );
};

export default CheckoutPage;