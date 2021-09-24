import React from 'react';

import { useUser } from '../../../contexts/User';

import { useHistory } from "react-router-dom"

import './styles.scss';

export function Notification() {

  const { user } = useUser();

  const history = useHistory();

  function routeChange(route, who){
    history.push({
      pathname: `/dashboard/feedback/${route}`,
      state: {
        from: who
    }})
  }

  return (
    <div className="container">
      <div className="title">
        <h2>Bem vindo, {user.name}</h2>
      </div>
      <div className="subTitle">
        <h3>Últimas atualizações</h3>
      </div>
      <div className="notification" onClick={() => { routeChange('2', 'CCP')}}>
        <div>
          <h3>Parecer final</h3>
          <p>CCP disponibilizou sua avaliação final</p>
        </div>
        <span>01/07/2021</span>
      </div>
      <div className="notification" onClick={() => { routeChange('2', 'Orientador') }}>
        <div>
          <h3>Parecer final</h3>
          <p>Orientador disponibilizou sua avaliação final</p>
        </div>
        <span>23/06/2021</span>
      </div>
      <div className="notification" onClick={() => { routeChange('3', 'CCP') }}>
        <div>
          <h3>Parecer final</h3>
          <p>CCP disponibilizou sua avaliação final</p>
        </div>
        <span>20/12/2020</span>
      </div>
    </div>
  );
}