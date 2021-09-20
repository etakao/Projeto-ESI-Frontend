import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Table } from 'antd';

import { evaluations, forms, students } from '../../../db';
import { useUser } from '../../../contexts/User';

import './styles.scss';

export function Home() {
  const { user } = useUser();

  const [evaluation, setEvaluation] = useState({});
  const [form, setForm] = useState({});

  useEffect(() => {
    const loggedStudent = students.find(student => student.numero_usp === user.numero_usp);
    const studentEvaluation = evaluations.find(evaluation => evaluation.student_id === loggedStudent.id);
    setEvaluation(studentEvaluation);
    setForm(forms.filter(form => form.evaluation_id === studentEvaluation.id));
  }, []);

  const formColumns = [
    {
      title: 'Data Limite',
      key: 'deadline',
      align: 'center',
      render: () => (
        form.deadline
      )
    },
    {
      title: 'Semestre',
      key: 'semester',
      align: 'center',
      render: () => (
        form.semester
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
      render: (evaluation) => <Link to={`/dashboard/feedback/advisor/${evaluation.id}`}>{evaluation.advisorEvaluation}</Link>
    },
    {
      title: 'Parecer Final',
      key: 'ccpEvaluation',
      align: 'center',
      render: (evaluation) => <Link to={`/dashboard/feedback/ccp/${evaluation.id}`}>{evaluation.ccpEvaluation}</Link>
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
