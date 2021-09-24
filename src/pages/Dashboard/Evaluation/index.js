import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import { useUser } from '../../../contexts/User';

import './styles.scss';
import { evaluationsApi } from '../../../services/evaluations';
import { message } from 'antd';

export function Evaluation({ location }) {
  const [opinion, setOpinion] = useState('');
  const [evaluation, setEvaluation] = useState('');
  const [id, setId] = useState('');
  const [forms_id, setFormsId] = useState('');
  const [status, setStatus] = useState('');
  const [comentario_ccp, setComentarioCcp] = useState('');
  const [avaliacao_ccp, setAvaliacaoCcp] = useState('');
  const [comentario_orientador, setComentarioOrientador] = useState('');
  const [avaliacao_orientador, setAvaliacaoOrientador] = useState('');
  const [is_reavaliation, setIsReavaliation] = useState('');

  const history = useHistory();
  const { user } = useUser();

  function goBack() {
    history.goBack();
  }

  async function submitEvaluation(e) {
    e.preventDefault();

    if (user.level === 5) {
      setComentarioCcp(opinion);
      setAvaliacaoCcp(evaluation);
    } else if (user.level === 7) {
      setComentarioOrientador(opinion);
      setAvaliacaoOrientador(evaluation);
    }

    setStatus("Avaliado");

    try {
      const response = await evaluationsApi.update({
        forms_id,
        status,
        comentario_ccp,
        avaliacao_ccp,
        comentario_orientador,
        avaliacao_orientador,
        is_reavaliation
      });
      if (response.status === 200) {
        message.success("Avaliação feita com sucesso!");
        goBack();
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      message.error("Erro ao enviar avaliação, tente novamente...");
    }
  }

  async function getEvaluationById() {
    try {
      const response = await evaluationsApi.readOne(location.state.evaluationId);
      console.log(response)
      if (response.status === 200) {
        if (user.level === 5) {
          setOpinion(response.data.comentario_ccp);
          setEvaluation(response.data.avaliacao_ccp);
          setComentarioOrientador(response.data.comentario_orientador);
          setAvaliacaoOrientador(response.data.avaliacao_orientador);
        } else if (user.level === 7) {
          setOpinion(response.data.comentario_orientador);
          setEvaluation(response.data.avaliacao_orientador);
          setComentarioCcp(response.data.comentario_ccp);
          setAvaliacaoCcp(response.data.avaliacao_ccp);
        }
        setId(response.data.id);
        setStatus(response.data.status);
        setFormsId(response.data.forms_id);
        setIsReavaliation(response.data.is_reavaliation);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getEvaluationById();
  }, []);

  return (
    <div className="evaluation-container">
      <span onClick={goBack}>
        <FiArrowLeft /> Voltar
      </span>

      <h2>Avaliação do relatório de {id}</h2>
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
          <option value="Adequado">Adequado</option>
          <option value="Adequado com ressalvas">Adequado com ressalvas</option>
          <option value="Insatisfatório">Insatisfatório</option>
        </select>
        <div className="form-button">
          <button type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
