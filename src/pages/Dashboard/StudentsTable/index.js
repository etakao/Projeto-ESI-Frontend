import React from 'react';

import { Table } from 'antd';

import { students } from '../../../db';
import { StudentActions } from '../../../components/StudentActions';

import './styles.scss';

export function StudentsTable() {

  const columns = [
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

  return (
    <div className="panel-container">
      <h2>
        Visão geral dos orientandos
      </h2>
      <Table
        dataSource={students}
        columns={columns}
        pagination={false}
        className="panel-table"
      />
    </div>
  );
}
