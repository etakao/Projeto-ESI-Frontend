import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Dropdown, Menu, Modal } from 'antd';
import { FiEdit, FiEye, FiMoreHorizontal } from 'react-icons/fi';

import { useUser } from '../../contexts/User';

import './styles.scss';
import { forms } from '../../db';

export function StudentActions({ studentEvaluation, student }) {
  const [isVisible, setIsVisible] = useState(false);
  const isEvaluated = studentEvaluation.situation === "Avaliado" ? true : false;
  const [opinion, setOpinion] = useState('');
  const [evaluation, setEvaluation] = useState('');
  const { name } = student;

  const { user } = useUser();

  const history = useHistory();

  useEffect(() => {
    switch (user.level) {
      case 1:
        setOpinion(studentEvaluation.parecer_orientador);
        setEvaluation(studentEvaluation.avaliacao_orientador);
        break;
      case 2:
        setOpinion(studentEvaluation.parecer_ccp);
        setEvaluation(studentEvaluation.avaliacao_ccp);
        break;
      default:
        break;
    }
  }, [user, studentEvaluation])

  function viewReport() {
    history.push({
      pathname: `/dashboard/students/${student.id}/info`,
      state: {
        evaluationId: studentEvaluation.id
      }
    });
  }

  function submitEvaluation(e) {
    e.preventDefault();

    console.log(opinion, evaluation);
    setIsVisible(false);
  }

  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={viewReport}>
        <FiEye /> Ver +
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1" onClick={() => setIsVisible(true)}>
        <FiEdit /> Avaliação
        <Modal
          visible={isVisible}
          title={`Avaliação do relatório de ${name}`}
          onOk={() => setIsVisible(false)}
          onCancel={() => setIsVisible(false)}
          centered={true}
          footer={null}
          className="evaluation-modal"
        >
          <form onSubmit={submitEvaluation}>
            <label htmlFor="opinion">Parecer</label>
            <textarea
              name="opinion"
              id="opinion"
              rows="6"
              value={opinion}
              onChange={e => setOpinion(e.target.value)}
              required
            />

            <label htmlFor="evaluation">Avaliação</label>
            <select
              name="evaluation"
              id="evaluation"
              value={evaluation}
              onChange={e => setEvaluation(e.target.value)}
              defaultValue=""
              required
            >
              <option value="" disabled hidden>Escolha uma avaliação</option>
              <option value={0}>Adequado</option>
              <option value={1}>Adequado com ressalvas</option>
              <option value={2}>Insatisfatório</option>
            </select>
            <div className="form-button">
              <button type="button" onClick={() => setIsVisible(false)}>
                Cancelar
              </button>
              <button type="submit">
                {isEvaluated ? "Editar" : "Enviar"}
              </button>
            </div>
          </form>
        </Modal>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft" className="table-dropdown">
      <FiMoreHorizontal onClick={e => e.preventDefault()} style={{ cursor: "pointer" }} />
    </Dropdown>
  );
}
