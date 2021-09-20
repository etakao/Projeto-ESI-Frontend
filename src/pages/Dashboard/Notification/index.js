import React, { useEffect } from 'react';

import { useState } from 'react';
import { useUser } from '../../../contexts/User';
import { students } from '../../../db';

import { FiInbox } from 'react-icons/fi';

import './styles.scss';

export function Notification() {
  const [student, setStudent] = useState({});

  const { user } = useUser();

  function getStudentInfo(numero_usp) {
    setStudent(students.find(student => student.numero_usp === numero_usp));
  }

  useEffect(() => {
    const numero_usp = parseInt(user.numero_usp);
    getStudentInfo(numero_usp);
  }, [user.numero_usp]);

  return (
    <div className="container">
      <div className="title">
        <h2>Bem vindo, {student.name}</h2>
      </div>
      <div className="subTitle">
        <h3>Últimas atualizações</h3>
        <div className="seeAll" onClick={() => { alert("ver todas") }}>
          <h3><FiInbox />Ver todas</h3>
        </div>
      </div>
      <div className="notification" onClick={() => { alert("ver notificação") }}>
        <div>
          <h3>Parecer final</h3>
          <p>CCP disponibilizou sua avaliação final</p>
        </div>
        <span>23/08/2021</span>
      </div>
      <div className="notification" onClick={() => { alert("ver notificação") }}>
        <div>
          <h3>Parecer final</h3>
          <p>CCP disponibilizou sua avaliação final</p>
        </div>
        <span>23/08/2021</span>
      </div>
      <div className="notification" onClick={() => { alert("ver notificação") }}>
        <div>
          <h3>Parecer final</h3>
          <p>CCP disponibilizou sua avaliação final</p>
        </div>
        <span>23/08/2021</span>
      </div>
    </div>
  );
}