import { React, useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.scss';
import Section from '../../components/Section';
import { Select } from 'antd';
import { useUser } from '../../contexts/User';
const { Option } = Select;



export default function Forms() {
  const { user } = useUser();
  
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
  }

  return (
    <div className="container">
      <div id="header">
        <h2>Formul??rio de avalia????o</h2>
        <p>Preencha o formul??rio para an??lise de seu orientador</p>
      </div>
      <div className="forms">
        <form onSubmit={handleSubmit}>
          <Section>Dados gerais</Section>
          <span className="question">Nome do orientador</span>
          <input type="text" name="advisorName" onChange={e => setName(e.target.value)} />
          <span className="question">Link para o curriculum lattes</span>
          <input type="text" name="curriculum" onChange={e => setCurriculum(e.target.value)} />
          <span className="question">Data da ??ltima atualiza????o do lattes</span>
          <input type="date" name="date" onChange={e => setDate(e.target.value)} />
          <span className="question">Qual foi o resultado da avalia????o do seu ??ltimo relat??rio?</span>
          <Select name="result" onChange={value => setResult(value)}>
            <Option value={1}>Aprovado</Option>
            <Option value={2}>Aprovado com ressalvas</Option>
            <Option value={3}>Insatisfat??rio</Option>
            <Option value={4}>N??o se aplica (?? o meu primeiro relat??rio)</Option>
          </Select>
          <span className="question">Qual ?? o seu curso?</span>
          <Select name="course" onChange={value => setCourse(value)} >
            <Option value={1}>Mestrado</Option>
            <Option value={2}>Doutorado</Option>
          </Select>
          <span className="question">Este relat??rio ?? referente a que semestre do seu curso? (??ltimo semestre conclu??do)</span>
          <Select name="semester" onChange={value => setSemester(value)} >
            <Option value={1}>1?? semestre do curso</Option>
            <Option value={2}>2?? semestre do curso</Option>
            <Option value={3}>3?? semestre do curso</Option>
            <Option value={4}>4?? semestre do curso</Option>
            <Option value={5}>5?? semestre do curso</Option>
            <Option value={6}>6?? semestre do curso</Option>
            <Option value={7}>7?? semestre do curso</Option>
            <Option value={8}>8?? semestre do curso</Option>
          </Select>

          <Section>Atividades did??ticas</Section>
          <span className="question">Em quantas disciplinas obrigat??rias voc?? j?? obteve aprova????o?</span>
          <input type="number" name="obgApproved" onChange={e => setObgApproved(e.target.value)} ></input>
          <span className="question">Em quantas disciplinas optativas voc?? j?? obteve aprova????o?</span>
          <input type="number" name="optApproved" onChange={e => setOptApproved(e.target.value)} ></input>
          <span className="question">Todos os conceitos em disciplinas cursadas no ??ltimo semestre j?? foram divulgados? Caso n??o, espere at?? 2 dias antes da data m??xima definida no site do PPgSI para enviar o seu relat??rio.</span>
          <Select name="concepts" onChange={value => setConcepts(value)} >
            <Option value="1">Sim</Option>
            <Option value="0">N??o</Option>
          </Select>
          <span className="question">Em quantas disciplinas voc?? foi reprovado desde o inicio do mestrado/doutorado?</span>
          <Select name="allUnapproved" onChange={value => setAllUnapproved(value)} >
            <Option value="0">0</Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
          </Select>
          <span className="question">Em quantas disciplinas voc?? foi reprovado no ??ltimo semestre cursado?</span>
          <Select name="lastUnapproved" onChange={value => setLastUnapproved(value)} >
            <Option value="0">0</Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">J?? terminei as disciplinas</Option>
          </Select>
          <span className="question">Voc?? j?? foi aprovado no exame de profici??ncia em idiomas?</span>
          <Select name="proLang" onChange={value => setProLang(value)} >
            <Option value="1">Sim</Option>
            <Option value="0">N??o</Option>
          </Select>

          <Section>Atividades de pesquisa</Section>
          <span className="question">Voc?? j?? realizou o exame de qualifica????o?</span>
          <Select name="qualification" onChange={value => setQualification(value)} >
            <Option value={1}>Sim. Fui aprovado</Option>
            <Option value={2}>N??o. Fui reprovado</Option>
            <Option value={3}>N??o</Option>
          </Select>
          <span className="question">Se n??o qualificou, quanto tempo falta para o limite m??ximo de qualifica????o?</span>
          <Select name="maxLimitQualification" onChange={value => setMaxLimitQualification(value)} >
            <Option value={1}>Menos de 3 meses</Option>
            <Option value={2}>Entre 3 e 6 meses</Option>
            <Option value={3}>Mais de 6 meses</Option>
          </Select>
          <span className="question">Quantos artigos referentes a sua pesquisa de mestrado/doutorado voc?? te aceitos ou publicados? (Obs: Voc?? deve inserir os artigos publicados no seu curr??culo Lattes)</span>
          <Select name="articlesAccept" onChange={value => setArticlesAccept(value)} >
            <Option value="0">0</Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">Mais de 2</Option>
          </Select>
          <span className="question">Quantos artigos voc?? submeteu e ainda est??o aguardando resposta?</span>
          <Select name="articlesWaiting" onChange={value => setArticlesWaiting(value)} >
            <Option value="0">0</Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">Mais de 2</Option>
          </Select>
          <span className="question">Voc?? possui artigo em prepara????o para submiss??o? Qual est??gio dele?</span>
          <Select name="articlesSubmit" onChange={value => setArticlesSubmit(value)} >
            <Option value={1}>N??o possuo</Option>
            <Option value={2}>Experimentos em elabora????o</Option>
            <Option value={3}>Aguardando coleta de dados</Option>
            <Option value={4}>Em fase de escrita</Option>
            <Option value={5}>Em fase de tradu????o</Option>
            <Option value={6}>Preparando resposta para revisores</Option>
          </Select>
          <span className="question">Qual o est??gio atual de sua pesquisa? Apresente toda e qualquer atividade que j?? tenha sido realizada no contexto de seu projeto de pesquisa (mesmo que ainda incompleta). Fa??a uma descri????o detalhada</span>
          <textarea rows="5" cols="50" name="stageResearch" onChange={e => setStageResearch(e.target.value)} />
          <span className="question">Voc?? participou de algum congressos no pa??s? Se sim, indicar local, se houve apresenta????o de trabalho e se o congresso ?? ou n??o internacional.</span>
          <textarea rows="5" cols="50" name="congressInCountry" onChange={e => setCongressInCountry(e.target.value)} />
          <span className="question">Voc?? participou de algum congresso no exterior? Se sim, indicar local e se houve apresenta????o de trabalho.</span>
          <textarea rows="5" cols="50" name="congressGringo" onChange={e => setCongressGringo(e.target.value)} />
          <span className="question">Voc?? realizou algum est??gio de pesquisa ou visita de pesquisa no exterior (incluindo sandu??che)? Se sim, indique o nome da universidade e o per??odo.</span>
          <textarea rows="5" cols="50" name="internshipAbroad" onChange={e => setInternshipAbroad(e.target.value)} />
          <span className="question">Voc?? tem algo a mais a declarar para a CCP - PPgSI?</span>
          <textarea rows="5" cols="50" name="declarationOfIndependence" onChange={e => setDeclarationOfIndependence(e.target.value)} />
          {revalue === true &&
            <>
              <div className="revalue" >
                <p>A prerrogativa de entregar uma nova vers??o do relat??rio ?? oferecida ao
                  orientando assumindo situa????es em que, por exemplo, ele precise ou queira
                  esclarecer ou incluir informa????es que sejam relativas exclusivamente ao per??odo
                  avaliado neste relat??rio (ou seja, apenas o semestre anterior j?? encerrado), tais
                  como:</p>
                <p>-Explicar melhor alguma atividade realizada no per??odo em quest??o que n??o foi
                  bem explicada na primeira vers??o do relat??rio e, portanto, n??o avaliada
                  apropriadamente de acordo com a vis??o do orientando e do orientador.</p>
                <p>- Incluir alguma atividade realizada no per??odo em quest??o, mas que o orientando
                  havia esquecido de incluir e que pode ter possivelmente prejudicado a avalia????o
                  de seu desempenho.</p>
                <p>- Argumentar os motivos pelos quais ele considera que apesar de suas atividades
                  no per??odo em quest??o terem sido exatamente aquelas (de forma que nada novo
                  precisa ser adicionado), ainda assim orientando e orientador consideram que o
                  desempenho n??o deveria ter sido considerado ???insatisfat??rio???.</p>
              </div>
              <span className="question">Coment??rios finais do ORIENTANDO sobre seu desempenho no ??ltimo semestre, considerando o relat??rio reapresentado:</span>
              <textarea rows="5" cols="50" name="finalComments" onChange={e => setFinalComments(e.target.value)} />
            </>
          }
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}