import React, { useState } from 'react';

import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { EvaluationsContextProvider } from '../../contexts/Evaluations';
import { TeachersContextProvider } from '../../contexts/Teachers';
import { CcpsContextProvider } from '../../contexts/Ccps';
import { StudentsContextProvider } from '../../contexts/Students';
import { UserContextProvider } from '../../contexts/User';
import { FormsContextProvider } from '../../contexts/Forms';
import { DashboardRoutes } from './dashboard.routes';

import './styles.scss';

function Dashboard() {
  const [navbarHeight, setNavbarHeight] = useState('');
  const [collapsed, setCollapsed] = useState(true);

  return (
    <UserContextProvider>
      <CcpsContextProvider>
        <TeachersContextProvider>
          <StudentsContextProvider>
            <FormsContextProvider>
              <EvaluationsContextProvider>
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
              </EvaluationsContextProvider>
            </FormsContextProvider>
          </StudentsContextProvider>
        </TeachersContextProvider>
      </CcpsContextProvider>
    </UserContextProvider>
  );
}

export default Dashboard;