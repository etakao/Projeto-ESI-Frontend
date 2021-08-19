import React from 'react';

import './styles.scss';
import Section from '../../components/Section';

export default function Forms() {
  return (
    <div className="container">
      <div id="header">
        <h2>Formulário de avaliação</h2>
        <p>Preencha o formulário para análise de seu orientador</p>
      </div>
      <div className="forms">
        <form onSubmit={()=> (console.log("enviado"))}>
          <Section>Dados gerais</Section>
          <span>Nome do orientador</span>
          <input type="text" />
          <span>Link para o curriculum lattes</span>
          <input type="text" />
          <span>Data da última atualização do lattes</span>
          <input type="date" />
          <span>Qual foi o resultado da avaliação do seu último relatório?</span>
          <select>
            <option value="">Aprovado</option>
            <option value="">Aprovado com ressalvas</option>
            <option value="">Insatisfatório</option>
            <option value="">Não se aplica (é o meu primeiro relatório)</option>
          </select>
          <span>Qual é o seu curso?</span>
          <select>
            <option value="">Mestrado</option>
            <option value="">Doutorado</option>
          </select>
          <span>Este relatório é referente a que semestre do seu curso? (último semestre concluído)</span>
          <select>
            <option value="">1° semestre do curso</option>
            <option value="">2° semestre do curso</option>
            <option value="">3° semestre do curso</option>
            <option value="">4° semestre do curso</option>
            <option value="">5° semestre do curso</option>
            <option value="">6° semestre do curso</option>
            <option value="">7° semestre do curso</option>
            <option value="">8° semestre do curso</option>
          </select>
          
          <Section>Atividades didáticas</Section>
          <span>Em quantas disciplinas obrigatórias você já obteve aprovação?</span>
          <input type="text"></input>
          <span>Em quantas disciplinas optativas você já obteve aprovação?</span>
          <input type="text"></input>
          <span>Todos os conceitos em disciplinas cursadas no último semestre já foram divulgados? Caso não, espere até 2 dias antes da data máxima definida no site do PPgSI para enviar o seu relatório.</span>
          <select>
            <option value="">Sim</option>
            <option value="">Não</option>
          </select>
          <span>Em quantas disciplinas você foi reprovado desde o inicio do mestrado/doutorado?</span>
          <select>
            <option value="">0</option>
            <option value="">1</option>
            <option value="">2</option>
          </select>
          <span>Em quantas disciplinas você foi reprovado no último semestre cursado?</span>
          <select>
            <option value="">0</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">Já terminei as disciplinas</option>
          </select>
          <span>Você já foi aprovado no exame de proficiência em idiomas?</span>
          <select>
            <option value="">Sim</option>
            <option value="">Não</option>
          </select>
          
          <Section>Atividades de pesquisa</Section>
          <span>Você já realizou o exame de qualificação?</span>
          <select>
            <option value="">Sim. Fui aprovado</option>
            <option value="">Não. Fui reprovado</option>
            <option value="">Não</option>
          </select>
          <span>Se não qualificou, quanto tempo falta para o limite máximo de qualificação?</span>
          <select>
            <option value="">Menos de 3 meses</option>
            <option value="">Entre 3 e 6 meses</option>
            <option value="">Mais de 6 meses</option>
          </select>
          <span>Quantos artigos referentes a sua pesquisa de mestrado/doutorado você te aceitos ou publicados? (Obs: Você deve inserir os artigos publicados no seu currrículo Lattes)</span>
          <select>
            <option value="">0</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">Mais de 2</option>
          </select>
          <span>Quantos artigos você submeteu e ainda estão aguardando resposta?</span>
          <select>
            <option value="">0</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">Mais de 2</option>
          </select>
          <span>Você possui artigo em preparação para submissão? Qual estágio dele?</span>
          <select>
            <option value="">Não possuo</option>
            <option value="">Experimentos em elaboração</option>
            <option value="">Aguardando coleta de dados</option>
            <option value="">Em fase de escrita</option>
            <option value="">Em fase de tradução</option>
            <option value="">Preparando resposta para revisores</option>
          </select>
          <span>Qual o estágio atual de sua pesquisa? Apresente toda e qualquer atividade que já tenha sido realizada no contexto de seu projeto de pesquisa (mesmo que ainda incompleta). Faça uma descrição detalhada</span>
          <input type="textarea"></input>
          <span>Você participou de algum congressos no país? Se sim, indicar local, se houve apresentação de trabalho e se o congresso é ou não internacional.</span>
          <input type="textarea"></input>
          <span>Você participou de algum congresso no exterior? Se sim, indicar local e se houve apresentação de trabalho.</span>
          <input type="textarea"></input>
          <span>Você realizou algum estágio de pesquisa ou visita de pesquisa no exterior (incluindo sanduíche)? Se sim, indique o nome da universidade e o período.</span>
          <input type="textarea"></input>
          <span>Você tem algo a mais a declarar para a CCP - PPgSI?</span>
          <input type="textarea"></input>

          <div className="revalue" >
            <p>Apenas para reapresentação de relatórios que receberam parecer “insatisfatório”
              pela CCP-PPgSI a fim de obter uma reavaliação.</p>
              <br/>
            <p>A prerrogativa de entregar uma nova versão do relatório é oferecida ao
              orientando assumindo situações em que, por exemplo, ele precise ou queira 
              esclarecer ou incluir informações que sejam relativas exclusivamente ao período
              avaliado neste relatório (ou seja, apenas o semestre anterior já encerrado), tais
              como:</p>
              <br/>
            <p>-Explicar melhor alguma atividade realizada no período em questão que não foi 
              bem explicada na primeira versão do relatório e, portanto, não avaliada 
              apropriadamente de acordo com a visão do orientando e do orientador.</p>
              <br/>
            <p>- Incluir alguma atividade realizada no período em questão, mas que o orientando
              havia esquecido de incluir e que pode ter possivelmente prejudicado a avaliação
              de seu desempenho.</p>
              <br/>
            <p>- Argumentar os motivos pelos quais ele considera que apesar de suas atividades 
              no período em questão terem sido exatamente aquelas (de forma que nada novo 
              precisa ser adicionado), ainda assim orientando e orientador consideram que o 
              desempenho não deveria ter sido considerado “insatisfatório”.</p>
          </div>
          <button>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}