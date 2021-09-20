import React, { useEffect, useState } from 'react';

import { useUser } from '../../../contexts/User';
import { students } from '../../../db';

import './styles.scss';

export function UserData() {
  const [student, setStudent] = useState({});

  const { user } = useUser();

  // const tradutor = {
  //   name: "Nome",
  //   advisor: "Nome do orientador",
  //   ra: "Número USP",
  //   curriculumLattes: "Link currículo Lattes"
  // }

  function getStudentInfo(numero_usp) {
    setStudent(students.find(student => student.numero_usp === numero_usp));
  }

  useEffect(() => {
    const numero_usp = parseInt(user.numero_usp);
    getStudentInfo(numero_usp);
  }, [user.numero_usp]);

  return (
    <div className="panel-info">
      <div className="student-info ">
        <div className="title-info">
          <h2>Dados de {student.name}</h2>
        </div>
        {/* {Object.entries(student).forEach((keys) => (
          <div>
            <h3>{tradutor[keys[0]]}</h3>
            <p>{keys[1]}</p>
          </div>
        ))} */}
        <h3>Nome</h3>
        <p>{student.name}</p>
        <h3>Nome do orientador</h3>
        <p>{student.advisor}</p>
        <h3>Número USP</h3>
        <p>{student.ra}</p>
        <h3>Curriculum Lates</h3>
        <p>{student.lattes}</p>
        <h3>Curso</h3>
        <p>{student.course}</p>
      </div>
    </div>
  )
}
