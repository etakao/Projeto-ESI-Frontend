import React, { useState } from 'react';

import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { UserContextProvider } from '../../contexts/User';
import { DashboardRoutes } from './dashboard.routes';

import './styles.scss';

function Dashboard() {
  const [navbarHeight, setNavbarHeight] = useState('');
  const [collapsed, setCollapsed] = useState(true);

  return (
    <UserContextProvider>
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
          <div className="content-container" style={{ height: `calc(100vh - ${navbarHeight}px)` }}>
            <DashboardRoutes />
          </div>
        </div>
      </div>
    </UserContextProvider>
  );
}

export default Dashboard;