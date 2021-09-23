import React, { useState } from 'react';
import { Redirect, useHistory} from "react-router-dom";

import { message } from 'antd';

import api from "../../services/api";
import { login, isAuthenticated} from "../../services/auth";
import { useUser } from '../../contexts/User';

import './styles.scss';

export  function SignIn(){
   
    const history = useHistory();
    const {user, setUser}= useUser();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async event =>{
        event.preventDefault();
        
        message.loading({
            key: "logging",
            content: "Logando...",
            duration: 9999
          });

          try {
            const response = await api.post("/login", { email, password });
                login(response.data.token)
                const users = response.data;
                for(const index in users){
                    if (index==='student'){
                        users[index]["user_type"]='Aluno';
                        users[index]["level"]= 11;
                        setUser(users[index]);
                    }
                    if (index==='teacher'){
                        users[index]["user_type"]='Orientador';
                        users[index]["level"]= 7;
                        setUser(users[index]);
                    }
                    if (index==='ccp'){
                        users[index]["user_type"]='CCP';
                        users[index]["level"]= 5;
                        setUser(users[index]);
                    }
                    if (index==='admin'){
                        users[index]["user_type"]='Admin';
                        users[index]["level"]= 3;
                        setUser(users[index]);  
                    }
                }
                message.destroy("logging");
                console.log(user);
                history.push("/dashboard");
                message.success("Bem-vindo!");
               
          } catch (err) {
            console.log(err);
            message.destroy("logging");
            message.error("Erro ao efetuar login, tente novamete...");
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
