import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
      <div className="dashboard">
        <Sidebar />
        <Outlet></Outlet>
      </div>
    );
};

export default Dashboard;