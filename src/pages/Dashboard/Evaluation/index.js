import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import './styles.scss';

export function Evaluation() {
  const [opinion, setOpinion] = useState('');
  const [evaluation, setEvaluation] = useState('');

  const history = useHistory();
  const { id } = useParams();

  function goBack() {
    history.goBack();
  }

  function submitEvaluation(e) {
    e.preventDefault();

    const student_id = parseInt(id);

  }

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
          <option value={0}>Adequado</option>
          <option value={1}>Adequado com ressalvas</option>
          <option value={2}>Insatisfatório</option>
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
