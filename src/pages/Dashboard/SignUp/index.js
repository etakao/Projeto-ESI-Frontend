import React, { useState } from 'react';

import './styles.scss';

export function SignUp() {
  const [isSigningUpStudent, setIsSigningUpStudent] = useState(true);

  const [name, setName] = useState('');
  const [ra, setRa] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpForm = [
    {
      labelText: "Nome",
      labelFor: "name",
      inputId: "name",
      inputType: "text",
      inputOnChange: e => setName(e.target.value),
      isStudentOnly: false
    },
    {
      labelText: "Número USP",
      labelFor: "ra",
      inputId: "ra",
      inputType: "text",
      inputOnChange: e => setRa(e.target.value),
      isStudentOnly: true
    },
    {
      labelText: "Emal",
      labelFor: "email",
      inputId: "email",
      inputType: "email",
      inputOnChange: e => setEmail(e.target.value),
      isStudentOnly: false
    },
    {
      labelText: "Senha",
      labelFor: "password",
      inputId: "password",
      inputType: "password",
      inputOnChange: e => setPassword(e.target.value),
      isStudentOnly: false
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();

    console.log(name, email, password, ra);
  }

  return (
    <div className="signup-container">
      <h2>Cadastro de usuário</h2>
      <div className="signup-tabs">
        <span
          className={isSigningUpStudent ? "active-tab" : "inactive-tab"}
          onClick={() => setIsSigningUpStudent(true)}
        >
          Aluno
        </span>
        <span
          className={isSigningUpStudent ? "inactive-tab" : "active-tab"}
          onClick={() => setIsSigningUpStudent(false)}
        >
          Orientador
        </span>
      </div>

      <form onSubmit={handleSubmit}>
        {isSigningUpStudent ? (
          signUpForm.map(input => {
            return (
              <>
                <label htmlFor={input.labelFor}>{input.labelText}</label>
                <input id={input.inputId} type={input.inputType} onChange={input.inputOnChange} />
              </>
            )
          })
        ) : (
          signUpForm.map(input => {
            if (!input.isStudentOnly) {
              return (
                <>
                  <label htmlFor={input.labelFor}>{input.labelText}</label>
                  <input id={input.inputId} type={input.inputType} onChange={input.inputOnChange} />
                </>
              )
            }
          })
        )}
        <button type="submit">Cadastrar</button>
      </form>
    </div >
  );
}
