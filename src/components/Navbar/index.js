import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogOut, FiUser } from 'react-icons/fi';


import { useUser } from '../../contexts/User';

import { logout} from "../../services/auth";
import './styles.scss';

export function Navbar({ setNavbarHeight }) {
  const navbarHeight = useRef(null);
  const history = useHistory();
  const { user, removeUser } = useUser();
  
const  Logout = (event)=> {
  event.preventDefault();
  removeUser()
  logout()
  history.push("/");
}
  useEffect(() => {
    setNavbarHeight(navbarHeight.current.clientHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="navbar-container" ref={navbarHeight}>
      <h2>PPgSI | Painel do {user.user_type}</h2>
      <div className="navbar-menu">
        <h3><FiUser /> {user.name}</h3>
      
        <FiLogOut className="log-out" title="Sair" onClick={Logout}/>
     
      </div>
    </div>
  );
}
