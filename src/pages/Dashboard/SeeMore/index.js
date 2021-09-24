import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import { forms, students } from '../../../db';

import './styles.scss';

export function SeeMore({ location }) {
  const [studentForm, setStudentForm] = useState(null);
  const [student, setStudent] = useState({});

  const history = useHistory();
  const { id } = useParams();

  const tradutor = {
    student_id: "Identifição",
    name: "Nome",
    email: "Email",
    nome_orientador: "Nome do orientador",
    numero_usp: "Número USP",
    link_curriculo: "Link currículo Lattes",
    data_latte:"Data da última atualização do lattes ",
    qual_course: "Curso",
    ultimo_relatorio:"O resultado do último relatório",
    ultimo_semestre: "É referente ao ultimo semestre?",
    disciplinas_obrigatorias: "Aprovação em diciplinas obrigatórias",
    disciplinas_optativas: "Aprovação em diciplinas optativas",
    conceitos_diciplinas: "Todos os conceitos em disciplinas cursadas no último semestre já foram divulgados?",
    disciplinas_reprovadas_mestrado: "Total de disciplinas reprovadas",
    disciplinas_reprovadas_curso:"Disciplinas reprovadas no último semestre",
    exame_idiomas:"Foi aprovado no exame de proficiencia em idiomas",
    exame_qualificacao:"Realizou o exame de Qualificação",
    limite_qualificacao:"Tempo do limite maximo de qualificação (Caso não qualificado)",
    artigos_aceitos: "Artigos aceitos ",
    artigos_aguardando: "Artigos aguardando Resposta",
    artigos_preparacao: "Artigos em preparação para submeter ",
    estagio_pesquisa:"Estágio atual da pesquisa",
    estagio_pesquisa_exterior:"Possui pesquisa no exterior?",
    congresso_exterior:" Participou congresso exterior?",
    congresso_interior:"realizou algum estágio de pesquisa ou visita de pesquisa no exterior?",
    declarar_ccp:"declaração para ccp",
    comentarios_orientando:"Comentários finais do orientando"
  }

  function goBack() {
    history.goBack();
  }

  useEffect(() => {
    const student_id = parseInt(id);
    setStudent(students.find(student => student.id === student_id));
    setStudentForm(forms.find(form => form.evaluation_id === location.state.evaluationId));
  }, [id]);

  return (
    <div className="panel-info">
      <span onClick={goBack}>
        <FiArrowLeft /> Voltar
      </span>

      {studentForm !== null ? (
        <div className="student-info ">
          <div className="title-info">
            <h2>Relatório semestral de {student.name}</h2>
          </div>
          {Object.entries(studentForm).map(attr => (
            <div>
              <h3>{tradutor[attr[0]]}</h3>
              <p>{attr[1]}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Carregando informaçãoes...</p>
      )}
    </div>
  )
}
