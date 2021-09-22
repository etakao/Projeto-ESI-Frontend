import React from 'react';
import { FiHome, FiLogIn } from 'react-icons/fi';

import './styles.scss';

function Nonexistent() {
  return (
    <div className="nonexistent-container">
      <h1>Página não encontrada...</h1>

      <h2>Tente uma das opções abaixo:</h2>

      <ul>
        <a href="/">
          <FiLogIn /> Login
        </a>
        <a href="/dashboard">
          <FiHome /> Sistema
        </a>
      </ul>
    </div>
  );
}

export default Nonexistent;