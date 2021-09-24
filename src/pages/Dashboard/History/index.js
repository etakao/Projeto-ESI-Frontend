import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { Table } from 'antd';

import { evaluationsApi } from '../../../services/evaluations';
import { studentsApi } from '../../../services/students';
import { StudentActions } from '../../../components/StudentActions';

import './styles.scss';

export function History() {
  const [student, setStudent] = useState('');
  const [studentEvaluations, setStudentEvaluations] = useState([]);

  const { id } = useParams();

  async function getStudentById(student_id) {
    try {
      const studentsResponse = await studentsApi.readOne(student_id);
      if (studentsResponse.status === 200) {
        setStudent(studentsResponse.data);
        const studentsForms = studentsResponse.data.forms;

        try {
          const evaluationsResponse = await evaluationsApi.read();
          if (evaluationsResponse.status === 200) {
            setStudentEvaluations(evaluationsResponse.data.filter(evaluation => {
              for (let index = 0; index < studentsForms.length; index++) {
                if (evaluation.forms_id === studentsForms[index].id) return evaluation;
              }
            }));
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const student_id = parseInt(id);

    getStudentById(student_id);
  }, [id]);

  const columns = [
    {
      title: 'Data',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Reavaliação',
      dataIndex: 'is_revaluation',
      key: 'revaluation',
      render: (isReavaliation) => (
        isReavaliation ? "Sim" : "Não"
      )
    },
    {
      title: 'Avaliação do orientador',
      dataIndex: 'avaliacao_orientador',
      key: 'avaliacao_orientador',
    },
    {
      title: 'Parecer do orientador',
      dataIndex: 'comentario_orientador',
      key: 'comentario_orientador',
    },
    {
      title: 'Ações',
      key: 'action',
      render: (evaluation) => (
        <StudentActions evaluationId={evaluation.id} studentId={student.id} />
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

      {studentEvaluations ? (
        <Table
          dataSource={studentEvaluations}
          columns={columns}
          pagination={false}
          className="panel-table"
        />
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}
