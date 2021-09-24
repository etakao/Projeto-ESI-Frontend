import { React, useEffect, useState } from 'react';
import api from '../../services/api';
import { useHistory } from "react-router-dom";
import { message } from 'antd';

import './styles.scss';
import Section from '../../components/Section';
import { Select } from 'antd';
import { useUser } from '../../contexts/User';
const { Option } = Select;



export default function Forms() {
  const { user } = useUser();
  const history = useHistory();
  const [student_id, setUserId] = useState('')
  const [nome_orientador, setName] = useState('')
  const [link_curriculo, setCurriculum] = useState('')
  const [data_latte, setDate] = useState('')
  const [ultimo_relatorio, setResult] = useState('')
  const [qual_curso, setCourse] = useState('')
  const [ultimo_semestre, setSemester] = useState('')
  const [disciplinas_obrigatorias, setObgApproved] = useState('')
  const [disciplinas_optativas, setOptApproved] = useState('')
  const [conceitos_disciplinas, setConcepts] = useState('')
  const [disciplinas_reprovadas_mestrado, setAllUnapproved] = useState('')
  const [disciplinas_reprovadas_curso, setLastUnapproved] = useState('')
  const [exame_idiomas, setProLang] = useState('')
  const [exame_qualificacao, setQualification] = useState('')
  const [limite_qualificacao, setMaxLimitQualification] = useState('')
  const [artigos_aceitos, setArticlesAccept] = useState('')
  const [artigos_aguardando, setArticlesWaiting] = useState('')
  const [artigos_preparacao, setArticlesSubmit] = useState('')
  const [estagio_pesquisa, setStageResearch] = useState('')
  const [congresso_interior, setCongressInCountry] = useState('')
  const [congresso_exterior, setCongressGringo] = useState('')
  const [estagio_pesquisa_exterior, setInternshipAbroad] = useState('')
  const [declarar_ccp, setDeclarationOfIndependence] = useState('')
  const [comentarios_orientando, setFinalComments] = useState('')

  const [revalue, setRevalue] =  useState(Boolean);

  useEffect(() => {
    async function isRevaluation() {
      let res = await api.get(`/evaluation/1`) //TODO fazer o indice ficar dinamico
    
      if (res.data.is_reavaliation === 1) {
        setRevalue(true)
      } else setRevalue(false)
    }
    isRevaluation()
    setUserId(user.id)
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    api.post(`forms`, {
      qual_curso, nome_orientador, link_curriculo, data_latte, ultimo_relatorio,
      ultimo_semestre, disciplinas_obrigatorias, disciplinas_optativas, conceitos_disciplinas,
      disciplinas_reprovadas_mestrado, comentarios_orientando, disciplinas_reprovadas_curso,
      declarar_ccp, exame_idiomas, estagio_pesquisa_exterior, limite_qualificacao,
      exame_qualificacao, congresso_exterior, congresso_interior, estagio_pesquisa,
      artigos_aceitos, artigos_preparacao, artigos_aguardando, student_id
    });
    history.push("/dashboard");
    message.success("Enviado!");
  }

  return (
    <div className="container">
      <div id="header">
        <h2>Formulário de avaliação</h2>
        <p>Preencha o formulário para análise de seu orientador</p>
      </div>
      <div className="forms">
        <form onSubmit={handleSubmit}>
          <Section>Dados gerais</Section>
          <span className="question">Nome do orientador</span>
          <input type="text" name="advisorName" onChange={e => setName(e.target.value)} required={true} />
          <span className="question">Link para o curriculum lattes</span>
          <input type="text" name="curriculum" onChange={e => setCurriculum(e.target.value)} required={true} />
          <span className="question">Data da última atualização do lattes</span>
          <input type="date" name="date" onChange={e => setDate(e.target.value)} required={true} />
          <span className="question">Qual foi o resultado da avaliação do seu último relatório?</span>
          <Select name="result" onChange={value => setResult(value)}required={true}>
            <Option value={1}>Aprovado</Option>
            <Option value={2}>Aprovado com ressalvas</Option>
            <Option value={3}>Insatisfatório</Option>
            <Option value={4}>Não se aplica (é o meu primeiro relatório)</Option>
          </Select>
          <span className="question">Qual é o seu curso?</span>
          <Select name="course" onChange={value => setCourse(value)} required={true}>
            <Option value={1}>Mestrado</Option>
            <Option value={2}>Doutorado</Option>
          </Select>
          <span className="question">Este relatório é referente a que semestre do seu curso? (último semestre concluído)</span>
          <Select name="semester" onChange={value => setSemester(value)} required={true}>
            <Option value={1}>1° semestre do curso</Option>
            <Option value={2}>2° semestre do curso</Option>
            <Option value={3}>3° semestre do curso</Option>
            <Option value={4}>4° semestre do curso</Option>
            <Option value={5}>5° semestre do curso</Option>
            <Option value={6}>6° semestre do curso</Option>
            <Option value={7}>7° semestre do curso</Option>
            <Option value={8}>8° semestre do curso</Option>
          </Select>

          <Section>Atividades didáticas</Section>
          <span className="question">Em quantas disciplinas obrigatórias você já obteve aprovação?</span>
          <input type="number" name="obgApproved" onChange={e => setObgApproved(e.target.value)} required={true}></input>
          <span className="question">Em quantas disciplinas optativas você já obteve aprovação?</span>
          <input type="number" name="optApproved" onChange={e => setOptApproved(e.target.value)} required={true} ></input>
          <span className="question">Todos os conceitos em disciplinas cursadas no último semestre já foram divulgados? Caso não, espere até 2 dias antes da data máxima definida no site do PPgSI para enviar o seu relatório.</span>
          <Select name="concepts" onChange={value => setConcepts(value)} required={true} >
            <Option value="1">Sim</Option>
            <Option value="0">Não</Option>
          </Select>
          <span className="question">Em quantas disciplinas você foi reprovado desde o inicio do mestrado/doutorado?</span>
          <Select name="allUnapproved" onChange={value => setAllUnapproved(value)}  required={true}>
            <Option value="0">0</Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
          </Select>
          <span className="question">Em quantas disciplinas você foi reprovado no último semestre cursado?</span>
          <Select name="lastUnapproved" onChange={value => setLastUnapproved(value)} >
            <Option value="0">0</Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">Já terminei as disciplinas</Option>
          </Select>
          <span className="question">Você já foi aprovado no exame de proficiência em idiomas?</span>
          <Select name="proLang" onChange={value => setProLang(value)} required={true} >
            <Option value="1">Sim</Option>
            <Option value="0">Não</Option>
          </Select>

          <Section>Atividades de pesquisa</Section>
          <span className="question">Você já realizou o exame de qualificação?</span>
          <Select name="qualification" onChange={value => setQualification(value)} required={true}>
            <Option value={1}>Sim. Fui aprovado</Option>
            <Option value={2}>Não. Fui reprovado</Option>
            <Option value={3}>Não</Option>
          </Select>
          <span className="question">Se não qualificou, quanto tempo falta para o limite máximo de qualificação?</span>
          <Select name="maxLimitQualification" onChange={value => setMaxLimitQualification(value)} required={true} >
            <Option value={1}>Menos de 3 meses</Option>
            <Option value={2}>Entre 3 e 6 meses</Option>
            <Option value={3}>Mais de 6 meses</Option>
          </Select>
          <span className="question">Quantos artigos referentes a sua pesquisa de mestrado/doutorado você te aceitos ou publicados? (Obs: Você deve inserir os artigos publicados no seu currículo Lattes)</span>
          <Select name="articlesAccept" onChange={value => setArticlesAccept(value)} required={true}>
            <Option value="0">0</Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">Mais de 2</Option>
          </Select>
          <span className="question">Quantos artigos você submeteu e ainda estão aguardando resposta?</span>
          <Select name="articlesWaiting" onChange={value => setArticlesWaiting(value)} required={true}>
            <Option value="0">0</Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">Mais de 2</Option>
          </Select>
          <span className="question">Você possui artigo em preparação para submissão? Qual estágio dele?</span>
          <Select name="articlesSubmit" onChange={value => setArticlesSubmit(value)} required={true}>
            <Option value={1}>Não possuo</Option>
            <Option value={2}>Experimentos em elaboração</Option>
            <Option value={3}>Aguardando coleta de dados</Option>
            <Option value={4}>Em fase de escrita</Option>
            <Option value={5}>Em fase de tradução</Option>
            <Option value={6}>Preparando resposta para revisores</Option>
          </Select>
          <span className="question">Qual o estágio atual de sua pesquisa? Apresente toda e qualquer atividade que já tenha sido realizada no contexto de seu projeto de pesquisa (mesmo que ainda incompleta). Faça uma descrição detalhada</span>
          <textarea rows="5" cols="50" name="stageResearch" onChange={e => setStageResearch(e.target.value)} required={true}/>
          <span className="question">Você participou de algum congressos no país? Se sim, indicar local, se houve apresentação de trabalho e se o congresso é ou não internacional.</span>
          <textarea rows="5" cols="50" name="congressInCountry" onChange={e => setCongressInCountry(e.target.value)} required={true}/>
          <span className="question">Você participou de algum congresso no exterior? Se sim, indicar local e se houve apresentação de trabalho.</span>
          <textarea rows="5" cols="50" name="congressGringo" onChange={e => setCongressGringo(e.target.value)} required={true}/>
          <span className="question">Você realizou algum estágio de pesquisa ou visita de pesquisa no exterior (incluindo sanduíche)? Se sim, indique o nome da universidade e o período.</span>
          <textarea rows="5" cols="50" name="internshipAbroad" onChange={e => setInternshipAbroad(e.target.value)}required={true} />
          <span className="question">Você tem algo a mais a declarar para a CCP - PPgSI?</span>
          <textarea rows="5" cols="50" name="declarationOfIndependence" onChange={e => setDeclarationOfIndependence(e.target.value)} required={true} />
          {revalue === true &&
            <>
              <div className="revalue" >
                <p>A prerrogativa de entregar uma nova versão do relatório é oferecida ao
                  orientando assumindo situações em que, por exemplo, ele precise ou queira
                  esclarecer ou incluir informações que sejam relativas exclusivamente ao período
                  avaliado neste relatório (ou seja, apenas o semestre anterior já encerrado), tais
                  como:</p>
                <p>-Explicar melhor alguma atividade realizada no período em questão que não foi
                  bem explicada na primeira versão do relatório e, portanto, não avaliada
                  apropriadamente de acordo com a visão do orientando e do orientador.</p>
                <p>- Incluir alguma atividade realizada no período em questão, mas que o orientando
                  havia esquecido de incluir e que pode ter possivelmente prejudicado a avaliação
                  de seu desempenho.</p>
                <p>- Argumentar os motivos pelos quais ele considera que apesar de suas atividades
                  no período em questão terem sido exatamente aquelas (de forma que nada novo
                  precisa ser adicionado), ainda assim orientando e orientador consideram que o
                  desempenho não deveria ter sido considerado “insatisfatório”.</p>
              </div>
              <span className="question">Comentários finais do ORIENTANDO sobre seu desempenho no último semestre, considerando o relatório reapresentado:</span>
              <textarea rows="5" cols="50" name="finalComments" onChange={e => setFinalComments(e.target.value)} />
            </>
          }
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}