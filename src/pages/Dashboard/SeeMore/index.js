import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import './styles.scss';
import { students } from '../../../db';

export function SeeMore({ location }) {
  const [form, setForm] = useState({});

  const { studentUspNumber } = useParams();

  // const tradutor = {
  //   name: "Nome",
  //   advisor: "Nome do orientador",
  //   ra: "Número USP",
  //   curriculumLattes: "Link currículo Lattes"
  // }

  useEffect(() => {
    const usp_number = parseInt(studentUspNumber);
    const foundStudent = students.find(student => student.numero_usp === usp_number);
    const foundEvaluation = foundStudent.evaluations.find(evaluation =>
      evaluation.id === location.state.evaluationId);
    setForm(foundEvaluation.form);
  }, [studentUspNumber]);

  return (
    <div className="panel-info">
      <Link to="/dashboard/students">
        <FiArrowLeft /> Voltar
      </Link>

      <div className="student-info ">
        <div className="title-info">
          <h2>Relatório semestral de {form.name}</h2>
        </div>
        {/* {Object.entries(student).forEach((keys) => (
          <div>
            <h3>{tradutor[keys[0]]}</h3>
            <p>{keys[1]}</p>
          </div>
        ))} */}
        <h3>Nome</h3>
        <p>{form.name}</p>
        <h3>Nome do orientador</h3>
        <p>{form.advisor}</p>
        <h3>Número USP</h3>
        <p>{form.numero_usp}</p>
        <h3>Curriculum Lates</h3>
        <p>{form.lattes}</p>
        <h3>Curso</h3>
        <p>{form.course}</p>
      </div>
    </div>
  )
}
