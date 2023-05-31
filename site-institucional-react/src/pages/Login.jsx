
import Menu from "../components/Menu";
import api from "../api";
import { useState } from "react";
function Login() {
  const[email,getEmail]=useState("");
  const[senha,getSenha]=useState("");

  function logar(){
    const usuario={
      email:email,
      senha:senha
    }
    api.post("/usuarios/login",usuario).then((response)=>{
      console.log(response.data);
      const id = response.data.userId
      const token = response.data.token;
      const nome = response.data.nome;
      sessionStorage.setItem("id", id)
      sessionStorage.setItem("token", token)
      sessionStorage.setItem("nome", nome)
      window.location="/perfil";
    }).catch((error)=>{
      console.log(error);
    })
  }
  return (
    
    <>
    <Menu/>
   <main id="Login">
   <div className="container">
      
      <div className="fundo">
        <div className="login">
          <h1>Login</h1>
       
            <input type="text" placeholder="Email" onInput={(p) => getEmail(p.target.value)} />
            <input type="password" placeholder="Senha" onInput={(p)=> getSenha(p.target.value)}/>
            <button onClick={() => logar()}>Entrar</button>
         
        </div>
      </div>
    </div>
   </main>
    
    </>
  );
}

export default Login;
