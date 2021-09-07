import { React, useState } from 'react';

import './styles.scss';

import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { UserContextProvider } from '../../contexts/User';
import { StudentPanelRoutes } from './studentPanel.routes';

export default function StudentPanel() {
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
          <div className="content-container">
            <StudentPanelRoutes />
          </div>
        </div>
      </div>
    </UserContextProvider>
  )
};