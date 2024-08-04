import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import ProductList from './Dashboard/Tabs/ProductList/ProductList';
import ProductAdd from './Dashboard/Tabs/ProductAdd/ProductAdd';
import AddCategory from './Dashboard/Tabs/AddAttribute/AddCategory';
import AddParams from './Dashboard/Tabs/AddAttribute/AddParams';
import AddAttr from './Dashboard/Tabs/AddAttribute/AddAttr';
import Order from './Dashboard/Tabs/Order/Order';
import Customer from './Dashboard/Tabs/Customer/Customer';

const MainAdmin = () => {
    return (
      <>
        <Routes>
          <Route path="/admin/login" element={<Login />}></Route>
          <Route path="/admin/dashboard" element={<Dashboard />}>
            <Route
              path="/admin/dashboard/productlist"
              element={<ProductList />}
            />
            <Route
              path="/admin/dashboard/addProduct"
              element={<ProductAdd />}
            />
            <Route
              path="/admin/dashboard/AddCategory"
              element={<AddCategory />}
            />
            <Route path="/admin/dashboard/AddParams" element={<AddParams />} />
            <Route path="/admin/dashboard/AddAttr" element={<AddAttr />} />
            <Route path="/admin/dashboard/Order" element={<Order />} />
            <Route path="/admin/dashboard/Customer" element={<Customer />} />
          </Route>
        </Routes>
      </>
    );
};

export default MainAdmin;