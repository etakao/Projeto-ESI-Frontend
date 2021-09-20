import React from 'react';
import { FiHome, FiLogIn, FiUsers } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import './styles.scss';

function Nonexistent() {
  return (
    <div className="nonexistent-container">
      <h1>Página não encontrada...</h1>

      <h2>Tente uma das opções abaixo:</h2>

      <ul>
        <NavLink exact to="/login">
          <FiLogIn /> Login
        </NavLink>
        <NavLink exact to="/dashboard/home">
          <FiHome /> Home
        </NavLink>
        <NavLink exact to="/dashboard/students">
          <FiUsers /> Tabela de alunos
        </NavLink>
      </ul>
    </div>
  );
}

export default Nonexistent;