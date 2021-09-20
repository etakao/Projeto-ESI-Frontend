import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { Table } from 'antd';
import { students } from '../../../db';

import './styles.scss';
import { StudentActions } from '../../../components/StudentActions';

export function History() {
  const { studentUspNumber } = useParams();

  const [student, setStudent] = useState({});
  const [evaluations, setEvaluations] = useState([]);

  useEffect(() => {
    const usp_number = parseInt(studentUspNumber);
    const foundStudent = students.find(student => student.numero_usp === usp_number);

    setStudent(foundStudent);
    setEvaluations(foundStudent.evaluations);
  }, [studentUspNumber]);

  const columns = [
    {
      title: 'Data',
      dataIndex: 'created_At',
      key: 'created_At',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Reavaliação',
      key: 'revaluation',
      render: (evaluation) => (
        evaluation.is_revaluation ? "Sim" : "Não"
      )
    },
    {
      title: 'Avaliação do orientador',
      dataIndex: 'avaliacao_orientador',
      key: 'avaliacao_orientador',
      render: (evaluation) => {
        switch (evaluation) {
          case 0:
            return "Adequado";
          case 1:
            return "Adequado com ressalvas";
          case 2:
            return "Inadequado";
          default:
            break;
        }
      }
    },
    {
      title: 'Parecer do orientador',
      dataIndex: 'parecer_orientador',
      key: 'parecer_orientador',
    },
    {
      title: 'Ações',
      key: 'action',
      render: (evaluation) => (
        <StudentActions student={student} thisEvaluation={evaluation} form={evaluation.form} />
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
        dataSource={evaluations}
        columns={columns}
        pagination={false}
        className="panel-table"
      />
    </div>
  );
}
