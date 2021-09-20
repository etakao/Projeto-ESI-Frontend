import React, { useState } from 'react';

import { users } from './dbUser.js';

import { useUser } from '../../contexts/User.js'
import './styles.scss';

export  function SignIn(){

    const  {user, setUser} = useUser();
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(getUser()){
                setUser(getUser());
                alert(user);
        }
        else{
            alert("usuario nao encontrado")
        }
    } 

    function getUser() {
        return (users.find(user => user.email === email && user.password === password));
    }
    return(
        <section className="login">
            <div className="title-login">
              <h1> PPgSI</h1>
              <div className="break"/>
                <h2> Login</h2>
            </div>
            <form className="form-login" onSubmit={handleSubmit}> 
            <div className="section-form">
                <label>E-mail </label>
                <input type="email" name='email' placeholder="exemplo@exemplo.com.br" onChange={e => setEmail(e.target.value)} required={true}></input>
            </div>
            <div className="section-form">
                <label>Senha </label>
                <input type="password" name='password'  onChange={e => setPassword(e.target.value)} required={true}></input>
            </div>
            <div className="section-form">
                <button type="submit " >Entrar</button>
            </div>
            </form>
        </section>
    )
}