import React from 'react';
import { useHistory } from 'react-router-dom';

import { Dropdown, Menu } from 'antd';
import { FiEdit, FiEye, FiMoreHorizontal } from 'react-icons/fi';

import { useUser } from '../../contexts/User';

export function StudentActions({ evaluationId, studentId }) {
  const { user } = useUser();
  const history = useHistory();

  function viewReport() {
    history.push({
      pathname: `/dashboard/students/${studentId}/info`,
      state: {
        evaluationId: evaluationId
      }
    });
  }

  function handleEvaluation() {
    history.push({
      pathname: `/dashboard/students/${studentId}/evaluation`,
      state: {
        evaluationId: evaluationId,
        studentId: studentId
      }
    });
  }

  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={viewReport}>
        <FiEye /> Ver +
      </Menu.Item>
      {[5, 7].includes(user.level) && (
        <>
          <Menu.Divider />
          <Menu.Item key="1" onClick={handleEvaluation}>
            <FiEdit /> Avaliação
          </Menu.Item>
        </>
      )}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft" className="table-dropdown">
      <FiMoreHorizontal onClick={e => e.preventDefault()} style={{ cursor: "pointer" }} />
    </Dropdown>
  );
}
