import React from 'react';
import { useHistory } from 'react-router-dom';

import { Dropdown, Menu } from 'antd';
import { FiEdit, FiEye, FiMoreHorizontal } from 'react-icons/fi';

export function StudentActions({ studentEvaluation, studentId }) {
  const isEvaluated = studentEvaluation.status === "Avaliado" ? true : false;

  const history = useHistory();

  function viewReport() {
    history.push({
      pathname: `/dashboard/students/${studentId}/info`,
      state: {
        evaluationId: studentEvaluation.id
      }
    });
  }

  function handleEvaluation() {
    if (isEvaluated) {
      console.log('Evaluated');
    } else {
      history.push(`/dashboard/students/${studentId}/evaluation`);
    }
  }

  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={viewReport}>
        <FiEye /> Ver +
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1" onClick={handleEvaluation}>
        <FiEdit /> Avaliação
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft" className="table-dropdown">
      <FiMoreHorizontal onClick={e => e.preventDefault()} style={{ cursor: "pointer" }} />
    </Dropdown>
  );
}
