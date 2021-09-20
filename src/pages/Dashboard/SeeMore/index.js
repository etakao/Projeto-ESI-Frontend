import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import './styles.scss';
import { students } from '../../../db';

export function SeeMore({ location }) {
  const [studentForm, setStudentForm] = useState(null);

  const { studentUspNumber } = useParams();

  const tradutor = {
    id: "Identifição",
    name: "Nome",
    email: "Email",
    advisor: "Nome do orientador",
    numero_usp: "Número USP",
    lattes: "Link currículo Lattes",
    course: "Curso"
  }

  useEffect(() => {
    const usp_number = parseInt(studentUspNumber);
    const foundStudent = students.find(student => student.numero_usp === usp_number);
    const foundEvaluation = foundStudent.evaluations.find(evaluation =>
      evaluation.id === location.state.evaluationId);
    setStudentForm(foundEvaluation.form);
  }, [studentUspNumber]);

  return (
    <div className="panel-info">
      <Link to="/dashboard/students">
        <FiArrowLeft /> Voltar
      </Link>

      {studentForm !== null ? (
        <div className="student-info ">
          <div className="title-info">
            <h2>Relatório semestral de {studentForm.name}</h2>
          </div>
          {Object.entries(studentForm).map(attr => (
            <div>
              <h3>{tradutor[attr[0]]}</h3>
              <p>{attr[1]}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Carregando informaçãoes...</p>
      )}
    </div>
  )
}
