import React from 'react';
import { students, forms } from '../../../db';

import './styles.scss';

export function Feedback(){
    return (
        <div className="panel-info">
            <div className="feedback-info">
                <div className="title-info">
                    <h2>Parecer do Orientador - {students[0].advisor} ({forms[0].semester})</h2>
                    <h3>16/09/2021</h3>
                  </div>
                <h3>Parecer:</h3>
                <p>{forms[0].advisorEvaluation}</p>
                <h3>Comentários:</h3>
                <p>{forms[0].advisorOpinion}</p>
            </div>
        </div>
    ) 
}