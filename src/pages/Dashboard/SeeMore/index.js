import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import { forms, students } from '../../../db';

import './styles.scss';

export function SeeMore({ location }) {
  const [studentForm, setStudentForm] = useState(null);
  const [student, setStudent] = useState({});

  const history = useHistory();
  const { id } = useParams();

  const tradutor = {
    id: "Identifição",
    name: "Nome",
    email: "Email",
    advisor: "Nome do orientador",
    numero_usp: "Número USP",
    lattes: "Link currículo Lattes",
    course: "Curso"
  }

  function goBack() {
    history.goBack();
  }

  useEffect(() => {
    const student_id = parseInt(id);
    setStudent(students.find(student => student.id === student_id));
    setStudentForm(forms.find(form => form.evaluation_id === location.state.evaluationId));
  }, [id]);

  return (
    <div className="panel-info">
      <span onClick={goBack}>
        <FiArrowLeft /> Voltar
      </span>

      {studentForm !== null ? (
        <div className="student-info ">
          <div className="title-info">
            <h2>Relatório semestral de {student.name}</h2>
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
