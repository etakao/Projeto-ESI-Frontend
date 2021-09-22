import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { evaluations, forms } from '../../../db';

import './styles.scss';

export function Feedback({ location }) {
    const { id } = useParams();

    const [evaluation, setEvaluation] = useState({});
    const [form, setForm] = useState({});

    useEffect(() => {
        const evaluation_id = parseInt(id);
        setEvaluation(evaluations.find(evaluation => evaluation.id === evaluation_id));
        setForm(forms.find(form => form.evaluation_id === evaluation_id));
    }, []);

    return (
        <div className="panel-info">
            <div className="feedback-info">
                <div className="title-info">
                    <h2>Parecer do {location.state.from} - {evaluation.advisor} ({form.semester})</h2>
                    <h3>16/09/2021</h3>
                </div>
                <h3>Parecer:</h3>
                <p>{evaluation.advisorEvaluation}</p>
                <h3>Comentários:</h3>
                <p>{evaluation.advisorOpinion}</p>
            </div>
        </div>
    )
}