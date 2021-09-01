import React, { useState } from 'react';

import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { DashboardRoutes } from './dashboard.routes';

import './styles.scss';

function Dashboard() {
  const [navbarHeight, setNavbarHeight] = useState('');
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="dashboard-container">
      <Sidebar
        isCollapsed={collapsed}
        setIsCollapsed={setCollapsed}
        navbarHeight={navbarHeight}
      />
      <div className="main-container">
        <Navbar
          isCollapsed={collapsed}
          setNavbarHeight={setNavbarHeight}
        />
        <div className="content-container">
          <DashboardRoutes />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;