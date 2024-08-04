import React from 'react';
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import AccountPage from '../components/Account/AccountPage';

const Account = () => {
    return (
      <div>
        <Breadcrumb title={"Tài khoản"}></Breadcrumb>
        <AccountPage></AccountPage>
      </div>
    );
};

export default Account;