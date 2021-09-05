import React from 'react';
import { NavLink } from 'react-router-dom';

import { Layout } from 'antd';
import { FiHome, FiInbox, FiUsers, FiMenu, FiX, FiInfo } from 'react-icons/fi';

import './styles.scss';

export function Sidebar({ isCollapsed, setIsCollapsed, navbarHeight }) {
  const { Sider } = Layout;

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={isCollapsed}
      collapsedWidth="70px"
      width="200px"
    >
      <div className="sidebar-container">
        <div
          style={{ height: `${navbarHeight}px` }}
          className="top-sidebar"
        >
          {isCollapsed ? (
            <FiMenu onClick={() => setIsCollapsed(false)} title="Expandir" />
          ) : (
            <FiX onClick={() => setIsCollapsed(true)} title="Recolher" />
          )}
        </div>

        <ul className={isCollapsed ? "icon-sidebar" : "full-sidebar"}>
          <NavLink exact to='/dashboard' activeClassName="active-menu">
            <FiHome />
            <h2>Início</h2>
          </NavLink>
          <NavLink to='/dashboard/students' activeClassName="active-menu">
            <FiUsers />
            <h2>Orientandos</h2>
          </NavLink>
          <NavLink exact to='/dashboard/notifications' activeClassName="active-menu">
            <FiInbox />
            <h2>Notificações</h2>
          </NavLink>
        </ul>
        <a
          href="https://github.com/etakao/Projeto-ESI-Frontend"
          target="_blank"
          rel="noreferrer"
          className="repo"
        >
          {isCollapsed ? (
            <FiInfo />
          ) : (
            <text>Direitos reservados</text>
          )}
        </a>
      </div>
    </Sider>
  );
}
