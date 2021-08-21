import React, { useState } from 'react';

import { Drawer } from 'antd';
import { FiHome, FiLogOut, FiMenu, FiUsers } from 'react-icons/fi';

import './styles.scss';

function Navbar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <div className="navbar-container">
      <FiMenu onClick={() => setIsSidebarVisible(true)} />
      <h2>PPgSI | Painel do orientador</h2>

      <Drawer
        title="PPgSI"
        placement="left"
        closable={true}
        onClose={() => setIsSidebarVisible(false)}
        visible={isSidebarVisible}
        className="sidebar-container"
      >
        <h3>Painel do orientador</h3>
        <hr />

        <ul>
          <li>
            <FiHome /> Início
          </li>
          <li>
            <FiUsers /> Tabela de alunos
          </li>
          <li>
            <FiLogOut /> Sair
          </li>
        </ul>
      </Drawer>
    </div>
  );
}

export default Navbar;