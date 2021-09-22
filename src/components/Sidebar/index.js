import React from 'react';
import { NavLink } from 'react-router-dom';

import { Layout } from 'antd';

import { FiHome, FiUser, FiUsers, FiMenu, FiInfo, FiChevronsLeft, FiUserPlus, FiBell } from 'react-icons/fi';
import { useUser } from '../../contexts/User';

import './styles.scss';

export function Sidebar({ isCollapsed, setIsCollapsed, navbarHeight }) {
  const { Sider } = Layout;

  const { user } = useUser();

  const sidebarMenu = [
    {
      path: '/dashboard',
      icon: <FiHome />,
      text: 'Início',
      visibleTo: [0, 1, 2]
    },
    {
      path: '/dashboard/students',
      icon: <FiUsers />,
      text: 'Alunos',
      visibleTo: [1, 2]
    },
    {
      path: '/dashboard/data',
      icon: <FiUser />,
      text: 'Meus Dados',
      visibleTo: [0]
    },
    {
      path: '/dashboard/notification',
      icon: <FiBell />,
      text: 'Notificações',
      visibleTo: [0]
    },
    {
      path: '/dashboard/signup',
      icon: <FiUserPlus />,
      text: 'Cadastrar',
      visibleTo: [2]
    },
  ]


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

        <ul className={isCollapsed ? "icon-sidebar" : "full-sidebar"}>
          {sidebarMenu.map(item => {
            if ((item.visibleTo).includes(user.level)) {
              return (
                <NavLink key={item.text} exact to={item.path} activeClassName="active-menu">
                  {item.icon}
                  <h2>{item.text}</h2>
                </NavLink>
              );
            }
          })}
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
