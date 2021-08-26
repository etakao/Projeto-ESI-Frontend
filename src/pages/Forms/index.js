import React from 'react';

import './styles.scss';
import Section from '../../components/Section';
import { Select } from 'antd';
const { Option } = Select;


export default function Forms() {
  const revalue = false;

  return (
    <div className="container">
      <div id="header">
        <h2>Formulário de avaliação</h2>
        <p>Preencha o formulário para análise de seu orientador</p>
      </div>
      <div className="forms">
        <form onSubmit={()=> (console.log("enviado"))}>
          <Section>Dados gerais</Section>
          <span className="question">Nome do orientador</span>
          <input type="text" />
          <span className="question">Link para o curriculum lattes</span>
          <input type="text" />
          <span className="question">Data da última atualização do lattes</span>
          <input type="date" />
          <span className="question">Qual foi o resultado da avaliação do seu último relatório?</span>
          <Select>
            <Option value="approved">Aprovado</Option>
            <Option value="approvedWithCaveats">Aprovado com ressalvas</Option>
            <Option value="unsatisfactory">Insatisfatório</Option>
            <Option value="doNotApply">Não se aplica (é o meu primeiro relatório)</Option>
          </Select>
          <span className="question">Qual é o seu curso?</span>
          <Select>
            <Option value="master">Mestrado</Option>
            <Option value="doctorate">Doutorado</Option>
          </Select>
          <span className="question">Este relatório é referente a que semestre do seu curso? (último semestre concluído)</span>
          <Select>
            <Option value="1">1° semestre do curso</Option>
            <Option value="2">2° semestre do curso</Option>
            <Option value="3">3° semestre do curso</Option>
            <Option value="4">4° semestre do curso</Option>
            <Option value="5">5° semestre do curso</Option>
            <Option value="6">6° semestre do curso</Option>
            <Option value="7">7° semestre do curso</Option>
            <Option value="8">8° semestre do curso</Option>
          </Select>
          
          <Section>Atividades didáticas</Section>
          <span className="question">Em quantas disciplinas obrigatórias você já obteve aprovação?</span>
          <input type="text"></input>
          <span className="question">Em quantas disciplinas optativas você já obteve aprovação?</span>
          <input type="text"></input>
          <span className="question">Todos os conceitos em disciplinas cursadas no último semestre já foram divulgados? Caso não, espere até 2 dias antes da data máxima definida no site do PPgSI para enviar o seu relatório.</span>
          <Select>
            <Option value="1">Sim</Option>
            <Option value="0">Não</Option>
          </Select>
          <span className="question">Em quantas disciplinas você foi reprovado desde o inicio do mestrado/doutorado?</span>
          <Select>
            <Option value="0">0</Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
          </Select>
          <span className="question">Em quantas disciplinas você foi reprovado no último semestre cursado?</span>
          <Select>
            <Option value="0">0</Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="done">Já terminei as disciplinas</Option>
          </Select>
          <span className="question">Você já foi aprovado no exame de proficiência em idiomas?</span>
          <Select>
            <Option value="1">Sim</Option>
            <Option value="0">Não</Option>
          </Select>
          
          <Section>Atividades de pesquisa</Section>
          <span className="question">Você já realizou o exame de qualificação?</span>
          <Select>
            <Option value="yes">Sim. Fui aprovado</Option>
            <Option value="noDisapproved">Não. Fui reprovado</Option>
            <Option value="no">Não</Option>
          </Select>
          <span className="question">Se não qualificou, quanto tempo falta para o limite máximo de qualificação?</span>
          <Select>
            <Option value=">3">Menos de 3 meses</Option>
            <Option value="3-6">Entre 3 e 6 meses</Option>
            <Option value="6+">Mais de 6 meses</Option>
          </Select>
          <span className="question">Quantos artigos referentes a sua pesquisa de mestrado/doutorado você te aceitos ou publicados? (Obs: Você deve inserir os artigos publicados no seu currículo Lattes)</span>
          <Select>
            <Option value="0">0</Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="2+">Mais de 2</Option>
          </Select>
          <span className="question">Quantos artigos você submeteu e ainda estão aguardando resposta?</span>
          <Select>
            <Option value="0">0</Option>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="2+">Mais de 2</Option>
          </Select>
          <span className="question">Você possui artigo em preparação para submissão? Qual estágio dele?</span>
          <Select>
            <Option value="no">Não possuo</Option>
            <Option value="experiments">Experimentos em elaboração</Option>
            <Option value="waitingData">Aguardando coleta de dados</Option>
            <Option value="writing">Em fase de escrita</Option>
            <Option value="translation">Em fase de tradução</Option>
            <Option value="preparingRevision">Preparando resposta para revisores</Option>
          </Select>
          <span className="question">Qual o estágio atual de sua pesquisa? Apresente toda e qualquer atividade que já tenha sido realizada no contexto de seu projeto de pesquisa (mesmo que ainda incompleta). Faça uma descrição detalhada</span>
          <textarea rows="5" cols="50"></textarea>
          <span className="question">Você participou de algum congressos no país? Se sim, indicar local, se houve apresentação de trabalho e se o congresso é ou não internacional.</span>
          <textarea rows="5" cols="50"></textarea>
          <span className="question">Você participou de algum congresso no exterior? Se sim, indicar local e se houve apresentação de trabalho.</span>
          <textarea rows="5" cols="50"></textarea>
          <span className="question">Você realizou algum estágio de pesquisa ou visita de pesquisa no exterior (incluindo sanduíche)? Se sim, indique o nome da universidade e o período.</span>
          <textarea rows="5" cols="50"></textarea>
          <span className="question">Você tem algo a mais a declarar para a CCP - PPgSI?</span>
          <textarea rows="5" cols="50"></textarea>

          {revalue === true &&
            <div className="revalue" >
              <p>Apenas para reapresentação de relatórios que receberam parecer “insatisfatório”
                pela CCP-PPgSI a fim de obter uma reavaliação.</p>
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
          </div>}
          <button>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}