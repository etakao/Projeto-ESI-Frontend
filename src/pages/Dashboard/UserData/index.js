import React, {useEffect, useState} from 'react';

import { useUser } from '../../../contexts/User';
import api from '../../../services/api';

import './styles.scss';

export function UserData() {
  const [advisor, setAdvisor] = useState('');

  const { user } = useUser();

  useEffect(() => {
    async function getAdvisorName() {
      let res = await api.get(`/teacher/${user.teacherId}`)
      setAdvisor(res.data.name)
      return
    }
    getAdvisorName()
  }, [user.teacherId]);

  return (
    <div className="panel-info">
      <div className="student-info ">
        <div className="title-info">
          <h2>Dados de {user.name}</h2>
        </div>
        {/* {Object.entries(student).forEach((keys) => (
          <div>
            <h3>{tradutor[keys[0]]}</h3>
            <p>{keys[1]}</p>
          </div>
        ))} */}
        <h3>Nome</h3>
        <p>{user.name}</p>
        <h3>Nome do orientador</h3>
        <p>{advisor}</p>
        <h3>Número USP</h3>
        <p>{user.usp_number}</p>
        <h3>Curriculum Lates</h3>
        <p>{user.lattes}</p>
      </div>
    </div>
  )
}
