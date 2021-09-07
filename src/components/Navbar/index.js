import React, { useEffect, useRef } from 'react';

import { FiLogOut, FiUser } from 'react-icons/fi';

import { useUser } from '../../contexts/User';

import './styles.scss';

export function Navbar({ setNavbarHeight }) {
  const divRef = useRef(null);

  const { user } = useUser();

  useEffect(() => {
    setNavbarHeight(divRef.current.clientHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="navbar-container" ref={divRef}>
      <h2>PPgSI | Painel do {user.user_type}</h2>
      <div className="navbar-menu">
        <h3><FiUser /> {user.name}</h3>
        <FiLogOut className="log-out" title="Sair" />
      </div>
    </div>
  );
}
