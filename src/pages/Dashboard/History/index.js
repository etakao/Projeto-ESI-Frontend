import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { Table } from 'antd';

import { evaluations, students } from '../../../db';
import { StudentActions } from '../../../components/StudentActions';

import './styles.scss';

export function History() {
  const { id } = useParams();

  const [student, setStudent] = useState({});
  const [studentEvaluations, setStudentEvaluations] = useState([]);

  useEffect(() => {
    const student_id = parseInt(id);
    const student_evaluations = evaluations.find(evaluation => evaluation.student_id === student_id);

    setStudent(students.find(student => student.id === student_id));
    setStudentEvaluations(evaluations.filter(evaluation => evaluation.student_id === student_id));
    console.log(student_evaluations)
  }, [id]);

  const columns = [
    {
      title: 'Data',
      dataIndex: 'created_At',
      key: 'created_At',
    },
    {
      title: 'Status',
      dataIndex: 'situation',
      key: 'status',
    },
    {
      title: 'Reavaliação',
      dataIndex: 'is_revaluation',
      key: 'revaluation',
    },
    {
      title: 'Avaliação do orientador',
      dataIndex: 'advisorEvaluation',
      key: 'advisorEvaluation',
    },
    {
      title: 'Parecer do orientador',
      dataIndex: 'advisorOpinion',
      key: 'advisorOpinion',
    },
    {
      title: 'Ações',
      key: 'action',
      render: (evaluation) => (
        <StudentActions studentEvaluation={evaluation} student={student} />
      ),
      align: 'center',
    },
  ];

  return (
    <div className="history-container">
      <Link to="/dashboard/students">
        <FiArrowLeft /> Voltar
      </Link>

      <h2>Histórico de {student.name}</h2>

      <Table
        dataSource={studentEvaluations}
        columns={columns}
        pagination={false}
        className="panel-table"
      />
    </div>
  );
}
