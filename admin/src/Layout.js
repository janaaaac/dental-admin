import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './AdminSidebar';

const Layout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
