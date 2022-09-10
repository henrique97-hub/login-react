import React, { useState } from "react";
import "./login.css";
import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Cadastro from "../Authenticate";



const Login = () => {
  // definindo estados iniciais 
  // [] para manipular o estado das propriedades
  const [inputs, setInputs] = useState({});
  const [show, setShow] = useState(false);



  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(event.target)
  
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const criarConta = (e) => {
    e.preventDefault();

    // <Cadastro/>
    console.log('clicou no botão')

  }
  


  return (
    // onSubmit -> envia p formulario
    <form onSubmit={handleSubmit}>
      <div className="login">
        {/* <div className="login-logo">
          <img
            src="https://www.freeiconspng.com/thumbs/login-icon/client-login-icon-4.gif"
            alt="Icone de login"
          />
        </div> */}
        <div className="login-right">
          <h1>Acessar App</h1>
          <div className="login-loginInputEmail">
            <MdEmail />
            <input
              type="email"
              placeholder="Digite um email teste"
              name ="email"
              value={inputs.email|| ""}
              onChange={handleChange}
            />
          </div>
          <div className="login-loginInputPassword">
            <MdLock />
            <input
              type={show ? "text" : "password"}
              placeholder="Digite sua senha"
              name = "password"
              value={inputs.password || ""}
              onChange={handleChange}
            />
            <div className="login-eye">
              {show ? (
                <HiEye size={20} onClick={handleClick} />
              ) : (
                <HiEyeOff size={20} onClick={handleClick} />
              )}
            </div>
          </div>
          <button type="submit">Entrar</button>
          <h4>Não tenho conta!</h4>
          <button type="submit" onClick={criarConta} >Cadastrar</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
