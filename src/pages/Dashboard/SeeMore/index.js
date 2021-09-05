import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import { students } from '../../../db';

import './styles.scss';

export function SeeMore() {
  const [student, setStudent] = useState('');

  const { studentRa } = useParams();

  // const tradutor = {
  //   name: "Nome",
  //   advisor: "Nome do orientador",
  //   ra: "Número USP",
  //   curriculumLattes: "Link currículo Lattes"
  // }

  function getStudentInfo(ra) {
    setStudent(students.find(student => student.ra === ra));
  }

  useEffect(() => {
    const ra = parseInt(studentRa);
    getStudentInfo(ra);
  }, [studentRa]);

  return (
    <div className="panel-info">
      <Link to="/dashboard/students">
        <FiArrowLeft /> Voltar
      </Link>

      <div className="student-info ">
        <div className="title-info">
          <h2>Relatório semestral de {student.name}</h2>
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
