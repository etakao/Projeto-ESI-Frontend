import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Table } from 'antd';

import { evaluations, forms, students } from '../../../db';
import { useUser } from '../../../contexts/User';

import './styles.scss';

export function Home() {
  const { user } = useUser();

  const [evaluation, setEvaluation] = useState([]);

  useEffect(() => {
    if (user.level === 0) {
      const loggedStudent = students.find(student => student.numero_usp === user.numero_usp);
      const studentEvaluation = evaluations.filter(evaluation => evaluation.student_id === loggedStudent.id);
      setEvaluation(studentEvaluation);
    }
  }, []);

  function getEvaluationsForm(attr, evaluationId) {
    const form = forms.find(form => form.evaluation_id === evaluationId);
    return form[attr]
  }

  const formColumns = [
    {
      title: 'Data Limite',
      key: 'deadline',
      align: 'center',
      render: (lineEvaluation) => (
        getEvaluationsForm('deadline', lineEvaluation.id)
      )
    },
    {
      title: 'Semestre',
      key: 'semester',
      align: 'center',
      render: (lineEvaluation) => (
        getEvaluationsForm('semester', lineEvaluation.id)
      )
    },
    {
      title: 'Orientador',
      dataIndex: 'advisor',
      key: 'advisor',
      align: 'center',
    },
    {
      title: 'Parecer do Orientador',
      key: 'advisorEvaluation',
      align: 'center',
      render: (lineEvaluation) =>
        <Link to={{
          pathname: `/dashboard/feedback/${lineEvaluation.id}`,
          state: {
            from: 'Orientador'
          }
        }}>
          {lineEvaluation.advisorEvaluation}
        </Link>
    },
    {
      title: 'Parecer Final',
      key: 'ccpEvaluation',
      align: 'center',
      render: (lineEvaluation) =>
        <Link to={{
          pathname: `/dashboard/feedback/${lineEvaluation.id}`,
          state: {
            from: 'CCP'
          }
        }}>
          {lineEvaluation.ccpEvaluation}
        </Link>
    },
  ];

  return (
    <div className="panel-container">
      <h2>
        Bem vindx, {user.name}
      </h2>
      {user.level === 0 && (
        <>
          <div className="situation">
            <h2>Situação atual: {evaluation.situation}</h2>
          </div>
          <Table
            dataSource={evaluation}
            columns={formColumns}
            pagination={false}
            className="panel-table"
          />
          <Link to="/forms">
            <button type="button">Novo formulário</button>
          </Link>
        </>
      )}
    </div>
  );
}
