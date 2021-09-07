import React from 'react';
import { NavLink } from 'react-router-dom';

import { Layout } from 'antd';
import { FiHome, FiUsers, FiMenu, FiInfo, FiChevronsLeft, FiUserPlus, FiBell } from 'react-icons/fi';
import { useUser } from '../../contexts/User';

import './styles.scss';

export function Sidebar({ isCollapsed, setIsCollapsed, navbarHeight }) {
  const { Sider } = Layout;

  const { user } = useUser();

  function chooseMenu() {
    switch (user.level) {
      case 0:
        return (
          <ul className={isCollapsed ? "icon-sidebar" : "full-sidebar"}>
            <NavLink exact to='/studentPanel' activeClassName="active-menu">
              <FiHome />
              <h2>Início</h2>
            </NavLink>
            <NavLink to='/studentPanel/data' activeClassName="active-menu">
              <FiUsers />
              <h2>Meus Dados</h2>
            </NavLink>
            <NavLink to='/studentPanel/notification' activeClassName="active-menu">
              <FiBell />
              <h2>Notificação</h2>
            </NavLink>
          </ul>
        );
      case 1:
        return (
          <ul className={isCollapsed ? "icon-sidebar" : "full-sidebar"}>
            <NavLink exact to='/dashboard' activeClassName="active-menu">
              <FiHome />
              <h2>Início</h2>
            </NavLink>
            <NavLink to='/dashboard/students' activeClassName="active-menu">
              <FiUsers />
              <h2>Orientandos</h2>
            </NavLink>
          </ul>
        );
      case 2:
        return (
          <ul className={isCollapsed ? "icon-sidebar" : "full-sidebar"}>
            <NavLink exact to='/dashboard' activeClassName="active-menu">
              <FiHome />
              <h2>Início</h2>
            </NavLink>
            <NavLink to='/dashboard/students' activeClassName="active-menu">
              <FiUsers />
              <h2>Alunos</h2>
            </NavLink>
            <NavLink exact to='/dashboard/signup' activeClassName="active-menu">
              <FiUserPlus />
              <h2>Cadastro</h2>
            </NavLink>
          </ul>
        );
      default:
        break;
    }
  }

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
            <FiChevronsLeft onClick={() => setIsCollapsed(true)} title="Recolher" />
          )}
        </div>

        {chooseMenu()}
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
