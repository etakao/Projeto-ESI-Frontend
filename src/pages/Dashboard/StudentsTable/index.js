import React from 'react';
import { useHistory } from 'react-router-dom';

import { Table } from 'antd';
import { FiClipboard } from 'react-icons/fi';

import { evaluations, students } from '../../../db';
import { useUser } from '../../../contexts/User';

import './styles.scss';

export function StudentsTable() {
  const { user } = useUser();
  const history = useHistory();

  function seeHistory(id) {
    history.push(`/dashboard/students/${id}`);
  }

  function getLastEvaluation(student_id) {
    const studentEvaluations = evaluations.filter(evaluation => evaluation.student_id === student_id);
    return studentEvaluations[studentEvaluations.length - 1].situation;
  }

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      visibleTo: 'all'
    },
    {
      title: 'Número USP',
      dataIndex: 'numero_usp',
      key: 'nusp',
      visibleTo: 'all'
    },
    {
      title: 'Curso',
      dataIndex: 'course',
      key: 'course',
      filters: [
        { text: 'Mestrado', value: 'Mestrado' },
        { text: 'Doutorado', value: 'Doutorado' },
      ],
      onFilter: (value, record) => record.course.indexOf(value) === 0,
      visibleTo: 'orientador'
    },
    {
      title: 'Orientador',
      dataIndex: 'advisor',
      key: 'advisor',
      visibleTo: 'ccp'
    },
    {
      title: 'Status',
      key: 'status',
      render: (student) => (
        getLastEvaluation(student.id)
      ),
      visibleTo: 'all'
    },
    {
      title: 'Histórico',
      key: 'history',
      render: (student) => (
        <FiClipboard
          onClick={() => seeHistory(student.id)}
          style={{ cursor: 'pointer' }}
        />
      ),
      align: 'center',
      visibleTo: 'all'
    },
  ];

  function handleColumns() {
    switch (user.level) {
      case 1:
        return columns.filter(column => column.visibleTo === "all" || column.visibleTo === "orientador");
      case 2:
        return columns.filter(column => column.visibleTo === "all" || column.visibleTo === "ccp");
      default:
        break;
    }
  }

  return (
    <div className="panel-container">
      <h2>
        Visão geral dos {user.level === 1 ? "orientandos" : "alunos"}
      </h2>
      <Table
        dataSource={students}
        columns={handleColumns()}
        pagination={false}
        className="panel-table"
      />
    </div>
  );
}
