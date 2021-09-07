import React from 'react';

import { Table } from 'antd';

import { students } from '../../../db';
import { StudentActions } from '../../../components/StudentActions';
import { useUser } from '../../../contexts/User';

import './styles.scss';

export function StudentsTable() {
  const { user } = useUser();

  const advisorColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'RA',
      dataIndex: 'ra',
      key: 'ra',
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
    },
    {
      title: 'Situação',
      dataIndex: 'situation',
      key: 'situation',
    },
    {
      title: 'Ações',
      key: 'action',
      render: (student) => (
        <StudentActions student={student} />
      ),
      align: 'center',
    },
  ];

  const ccpColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'RA',
      dataIndex: 'ra',
      key: 'ra',
    },
    {
      title: 'Orientador',
      dataIndex: 'advisor',
      key: 'advisor',
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
      title: 'Situação',
      dataIndex: 'situation',
      key: 'situation',
    },
    {
      title: 'Ações',
      key: 'action',
      render: (student) => (
        <StudentActions student={student} />
      ),
      align: 'center',
    },
  ];

  function chooseColumn() {
    switch (user.level) {
      case 1:
        return advisorColumns;
      case 2:
        return ccpColumns;
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
        columns={chooseColumn()}
        pagination={false}
        className="panel-table"
      />
    </div>
  );
}
