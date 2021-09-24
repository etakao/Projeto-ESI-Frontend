import React, { useEffect, useState } from 'react';

import { message } from 'antd';

import { useTeachers } from '../../../contexts/Teachers';
import { useCcps } from '../../../contexts/Ccps';
import { ccpsApi } from '../../../services/ccps';
import { teachersApi } from '../../../services/teachers';
import { studentsApi } from '../../../services/students';

import './styles.scss';

export function SignUp() {
  const [activeSignup, setActiveSignup] = useState(0);

  const [name, setName] = useState('');
  const [usp_number, setUspNumber] = useState('');
  const [teacher_id, setAdvisor] = useState('');
  const [ccp_id, setCcp] = useState('');
  const [lattes, setLattes] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { teachers } = useTeachers();
  const { ccps } = useCcps();

  const signUpForm = [
    {
      type: 'input',
      labelText: "Nome",
      labelFor: "name",
      inputId: "name",
      inputType: "text",
      inputOnChange: e => setName(e.target.value),
      visibleTo: [11, 7, 5]
    },
    {
      type: 'input',
      labelText: "Número USP",
      labelFor: "uspNumber",
      inputId: "uspNumber",
      inputType: "text",
      inputOnChange: e => setUspNumber(e.target.value),
      visibleTo: [5,3]
    },
    {
      type: 'input',
      labelText: "Lattes",
      labelFor: "lattes",
      inputId: "lattes",
      inputType: "text",
      inputOnChange: e => setLattes(e.target.value),
      visibleTo: [5,3]
    },
    {
      type: 'select',
      labelText: "Orientador",
      labelFor: "advisor",
      selectId: "advisor",
      selectData: teachers,
      selectValue: teacher_id,
      selectOnChange: e => setAdvisor(e.target.value),
      visibleTo: [5,3]
    },
    {
      type: 'select',
      labelText: "CCP",
      labelFor: "ccp",
      selectId: "ccp",
      selectData: ccps,
      selectValue: ccp_id,
      selectOnChange: e => setCcp(e.target.value),
      visibleTo: [7]
    },
    {
      type: 'input',
      labelText: "Email",
      labelFor: "email",
      inputId: "email",
      inputType: "email",
      inputOnChange: e => setEmail(e.target.value),
      visibleTo: [11, 7, 5]
    },
    {
      type: 'input',
      labelText: "Senha",
      labelFor: "password",
      inputId: "password",
      inputType: "password",
      inputOnChange: e => setPassword(e.target.value),
      visibleTo: [11, 7, 5]
    },
  ];

  async function handleSubmit(e) {
    e.preventDefault();

    message.loading({
      key: "signingup",
      content: "Cadastrando...",
      duration: 9999
    });

    switch (activeSignup) {
      case 11:
        try {
          const response = await ccpsApi.create({
            name,
            email,
            password
          });
          console.log(response);
          if (response.status === 200) {
            message.destroy("signingup");
            message.success("CCP cadastrada com sucesso!");
          }
        } catch (error) {
          console.log(error);
          message.destroy("signingup");
          message.error("Erro ao cadastrar CCP, tente novamente...");
        }
        break;
      case 7:
        try {
          const response = await teachersApi.create({
            name,
            email,
            password,
            ccp_id
          });
          if (response.status === 200) {
            message.destroy("signingup");
            message.success("Orientador cadastrado com sucesso!");
          }
        } catch (error) {
          console.log(error);
          message.destroy("signingup");
          message.error("Erro ao cadastrar orientador, tente novamente...");
        }
        break;
      case 5:
        try {
          const response = await studentsApi.create({
            name,
            email,
            password,
            teacher_id,
            usp_number,
            lattes
          });
          if (response.status === 200) {
            message.destroy("signingup");
            message.success("Aluno cadastrado com sucesso!");
          }
        } catch (error) {
          console.log(error);
          message.destroy("signingup");
          message.error("Erro ao cadastrar aluno, tente novamente...");
        }
        break;
      default:
        break;
    }
  }

  return (
    <div className="signup-container">
      <h2>Cadastro de usuário</h2>
      <div className="signup-tabs">
        <span
          className={activeSignup === 11 ? "active-tab" : "inactive-tab"}
          onClick={() => setActiveSignup(11)}
        >
          CCP
        </span>
        <span
          className={activeSignup === 7 ? "active-tab" : "inactive-tab"}
          onClick={() => setActiveSignup(7)}
        >
          Orientador
        </span>
        <span
          className={activeSignup === 5 ? "active-tab" : "inactive-tab"}
          onClick={() => setActiveSignup(5)}
        >
          Aluno
        </span>
      </div>

      <form onSubmit={handleSubmit}>
        {signUpForm.map(input => {
          if ((input.visibleTo).includes(activeSignup)) {
            return (
              input.type === 'input' ? (
                <>
                  <label htmlFor={input.labelFor}>{input.labelText}</label>
                  <input id={input.inputId} type={input.inputType} onChange={input.inputOnChange} />
                </>
              ) : (
                <>
                  <label htmlFor={input.labelFor}>{input.labelText}</label>
                  <select id={input.selectId} value={input.selectValue} onChange={input.selectOnChange}>
                    <option value="" disabled hidden>Escolha um {input.labelText}</option>
                    {input.selectData.map(selectOpt => (
                      <option value={selectOpt.id}>{selectOpt.name}</option>
                    ))}
                  </select>
                </>
              )

            )
          }
        })}
        <button type="submit">Cadastrar</button>
      </form>
    </div >
  );
}
