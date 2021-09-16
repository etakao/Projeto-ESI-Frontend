import React from 'react';
import { Link } from 'react-router-dom';

import { Table } from 'antd';

import { students, forms } from '../../../db';
import { useUser } from '../../../contexts/User';

import './styles.scss';

export function Home() {
  const { user } = useUser();

  const formColumns = [
    {
      title: 'Data Limite',
      dataIndex: 'deadline',
      key: 'deadline',
      align: 'center',
    },
    {
      title: 'Semestre',
      dataIndex: 'semester',
      key: 'semester',
      align: 'center',
    },
    {
      title: 'Orientador',
      dataIndex: 'advisor',
      key: 'advisor',
      align: 'center',
    },
    {
      title: 'Parecer do Orientador',
      // dataIndex: 'advisorEvaluation',
      key: 'advisorEvaluation',
      align: 'center',
      render: (form) => <Link to={`/studentPanel/feedback/advisor/${form.key}`}>{form.advisorEvaluation}</Link>
    },
    {
      title: 'Parecer Final',
      // dataIndex: 'ccpEvaluation',
      key: 'ccpEvaluation',
      align: 'center',
      render: (form) => <Link to={`/studentPanel/feedback/ccp/${form.key}`}>{form.ccpEvaluation}</Link>
    },
    
  ];

  return (
    <div className="panel-container">
      <h2>
        Bem vindx, {user.name}
      </h2>
      <div className="situation">
        <h2>Situação atual: {students[1].situation}</h2>
      </div>
      <Table
        dataSource={forms}
        columns={formColumns}
        pagination={false}
        className="panel-table"
      />
      <Link to="/forms">
      <button>Novo formulário</button>
      </Link>
    </div>
  );
}
