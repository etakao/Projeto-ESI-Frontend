import React from 'react';

import { Dropdown, Menu, Table } from 'antd';
import { FiEdit, FiEye, FiMoreHorizontal } from 'react-icons/fi';

import './styles.scss';

export function Panel() {

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <FiEye /> Ver +
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <FiEdit /> Parecer
      </Menu.Item>
    </Menu>
  );

  const dataSource = [
    {
      key: '1',
      name: 'Roberto',
      ra: 18541932,
      course: 'Mestrado',
      situation: 'Aprovado'
    },
    {
      key: '2',
      name: 'Ademir',
      ra: 19346512,
      course: 'Doutorado',
      situation: 'Reprovado'
    },
    {
      key: '3',
      name: 'Elba',
      ra: 18545221,
      course: 'Mestrado',
      situation: 'Aprovado'
    },
    {
      key: '4',
      name: 'Thalita',
      ra: 20212349,
      course: 'Doutorado',
      situation: 'Em análise'
    },
    {
      key: '5',
      name: 'Javier',
      ra: 18260531,
      course: 'Mestrado',
      situation: 'Em análise'
    },
  ];

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
      dataIndex: 'action',
      render: () => (
        <Dropdown overlay={menu} trigger={['click']} placement="bottomRight" className="table-dropdown">
          <FiMoreHorizontal onClick={e => e.preventDefault()} style={{ cursor: "pointer" }} />
        </Dropdown>
      ),
      align: 'center',
      width: '20%',
    },
  ];

  return (
    <div className="panel-container">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        className="panel-table"
      />
    </div>
  );
}
