import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import api from "../../services/api";
import { login, isAuthenticated} from "../../services/auth";


import './styles.scss';

export  function SignIn(){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async event =>{
        event.preventDefault();
          try {
            const response = await api.post("/sessions", { email, password });
            login(response.data.token);
            this.props.history.push("/dashboard");
          } catch (err) {
            alert("Houve um problema com o login, verifique suas credenciais. T.T");
          }
      }
    return(
        <>
        {isAuthenticated() ? <Redirect to="/dashboard" /> : null}
        <section className="login">
            <div className="title-login">
              <h1> PPgSI</h1>
              <div className="break"/>
                <h2> Login</h2>
            </div>
            <form className="form-login" onSubmit={handleSubmit}> 
            <div className="section-form">
                <label>E-mail </label>
                <input type="email" name='email' placeholder="exemplo@exemplo.com.br" onChange={e => setEmail( e.target.value)} required={true}></input>
            </div>
            <div className="section-form">
                <label>Senha </label>
                <input type="password" name='password'  onChange={e => setPassword(e.target.value)} required={true}></input>
            </div>
            <div className="section-form">
                <button type="submit">Entrar</button>
            </div>
            </form>
        </section>
        </>
    )
}
