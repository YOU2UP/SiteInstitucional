import React from "react";
import Menu from "../components/menu/Menu.jsx";
import api from "../api";
import { useState } from "react";
import seta from "../css-images/img/next.png";
import setaE from "../css-images/img/prev.png";
import sucesso from "../css-images/img/ok.png";
import "../css-images/css/cadastro.css";
function Cadastro() {


    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [estagio, setEstagio] = useState("");
    const [academia, setAcademia] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");

    const options_df = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", 
    "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"]

    function cadastrar() {
        const usuarioNovo = {
            nome: nome,
            senha: senha,
            email: email,
            dataNascimento: dataNascimento,
            estagio: estagio,
            metaTreinos: 0,
            notificacoes: [],
            treinos: [],
            localTreino: {
                nome: academia,
                rua: rua,
                numero: numero,
                bairro: bairro,
                cidade: cidade,
                uf: uf,
                academia: false
            }

        }
        api.post("/usuarios/cadastro", usuarioNovo).then((response) => {
            console.log(response.data);
            window.location = "/login";
            console.log(usuarioNovo)
        }).catch((error) => {
            console.log(error);
        });
    }

    function mostrarCadastro1() {
        document.querySelector(".cadastro1").style.display = "flex";
        document.querySelector(".cadastro2").style.display = "none";
        document.querySelector(".cadastro3").style.display = "none";
        document.querySelector(".cadastro1").style.opacity = "1";
        document.querySelector(".cadastro1").style.visibility = "visible";
        document.querySelector(".cadastro1").style.marginTop = "0";
        document.querySelector(".cadastro2").style.opacity = "0";
        document.querySelector(".cadastro2").style.visibility = "hidden";
        document.querySelector(".cadastro3").style.opacity = "0";
        document.querySelector(".cadastro3").style.visibility = "hidden";

    }
    function mostrarCadastro2() {
        document.querySelector(".cadastro1").style.display = "none";
        document.querySelector(".cadastro2").style.display = "flex";
        document.querySelector(".cadastro3").style.display = "none";
        document.querySelector(".cadastro2").style.opacity = "1";
        document.querySelector(".cadastro2").style.visibility = "visible";
        document.querySelector(".cadastro1").style.opacity = "0";
        document.querySelector(".cadastro1").style.visibility = "hidden";
        document.querySelector(".cadastro3").style.opacity = "0";
        document.querySelector(".cadastro3").style.visibility = "hidden";

    }
    function mostrarCadastro3() {
        document.querySelector(".cadastro1").style.display = "none";
        document.querySelector(".cadastro2").style.display = "none";
        document.querySelector(".cadastro3").style.display = "flex";
        document.querySelector(".cadastro3").style.opacity = "1";
        document.querySelector(".cadastro3").style.visibility = "visible";
        document.querySelector(".cadastro1").style.opacity = "0";
        document.querySelector(".cadastro1").style.visibility = "hidden";
        document.querySelector(".cadastro2").style.opacity = "0";
        document.querySelector(".cadastro2").style.visibility = "hidden";

    }

    function funcoes1() {
        setEstagio("Basico")
        mudarCor1()
    }
    function mudarCor1() {
        document.getElementById("button1").classList.add('clicado');
        document.getElementById("button2").classList.remove('clicado');
        document.getElementById("button3").classList.remove('clicado');
    }
    function funcoes2() {
        setEstagio("Intermediario")
        mudarCor2()
    }

    function mudarCor2() {
        document.getElementById("button2").classList.add('clicado');
        document.getElementById("button1").classList.remove('clicado')
        document.getElementById("button3").classList.remove('clicado')
    }
    function funcoes3() {
        setEstagio("Avancado")
        mudarCor3()

    }
    function mudarCor3() {
        document.getElementById("button3").classList.add('clicado');
        document.getElementById("button2").classList.remove('clicado');
        document.getElementById("button1").classList.remove('clicado');
    }
    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json()).then(data => {
        console.log(data);
        document.getElementById("rua").value = data.logradouro;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("uf").value = data.uf;

        });

    }

    return (
        <>
            <Menu />
            <main id="cadastro" >
                <div className="container">

                    <div className="cadastro">

                        <div className="cadastro1">
                            <span className="titulo">DADOS PESSOAIS</span>
        
                                <div className="inputs">
                                    <div className="contencao">
                                    <label htmlFor="">Nome:</label>
                                    <input type="text" onInput={(e) => setNome(e.target.value)} />
                                    </div>
                                    
                                    <div className="senhas">
                                        <div className="contencao">
                                        <label htmlFor="">Senha:</label>
                                        <input type="password" onInput={(e) => setSenha(e.target.value)} aria-label="Digite uma senha" />
                                        </div>
                                       <div className="contencao">
                                        <label htmlFor="">Confirmação senha:</label>
                                        <input type="password" aria-label="Confirme sua senha " />
                                       </div>
                                      
                                    </div>


                                    <div className="contencao">
                                        <label htmlFor="">E-mail:</label>
                                        <input type="email" aria-label="Digite seu e-mail" onInput={(e) => setEmail(e.target.value)}  />
                                    </div>
                                    

                                    <div className="contencao">
                                        <label htmlFor="" className="color_data">Data de nascimento:</label>
                                        <input type="date" aria-label="Digite sua data de nascimento" onInput={(e) => setDataNascimento(e.target.value)} />
                                    </div>

                                </div>
                           

                            <div className="buttons">
                                <div className="boxSeta1">
                                    <button onClick={() => mostrarCadastro2()}> <img src={seta} alt="" srcSet="" className="setas" /> </button>
                                </div>
                            </div>

                        </div>
                        <div className="cadastro2">
                            <h1 className="titulo">QUAL SEU NÍVEL</h1>
                            <div className="estagios">
                                <div className="estagio" onClick={() => funcoes1()} id="button1" aria-label="Básico"><h1>Basico</h1><h2>Se você está apenas começando ou tem pouca experiência com exercícios, o seu nível é básico</h2></div>
                                <div className="estagio" onClick={() => funcoes2()} id="button2" aria-label="Intermediario"><h1>Intermediario</h1><h2>Se você já pratica exercícios regularmente e deseja dar um passo adiante, o seu nível é intermediário</h2></div>
                                <div className="estagio" onClick={() => funcoes3()} id="button3" aria-label="Avançado"><h1>Avançado</h1><h2>
                                Se você	é um usuário experiente ou um atleta dedicado que deseja levar seu condicionamento físico ao limite, o seu nível é avançado</h2></div>
                            </div>
                            <div className="divButtons">
                                <div className="boxSeta1">
                                    <button onClick={() => mostrarCadastro1()}> <img src={setaE} alt="" srcSet="" className="setas" /> </button>
                                </div>
                                <div className="boxSeta2">
                                    <button onClick={() => mostrarCadastro3()}> <img src={seta} alt="" srcSet="" className="setas" /> </button>
                                </div>

                            </div>
                        </div>
                        <div className="cadastro3">
                            <h1 className="titulo">LOCAL DE TREINO</h1>

                                <div className="contencao">
                                    <label htmlFor="">CEP:</label>
                                    <input type="text" placeholder="CEP" aria-label="Digite o CEP" onBlur={checkCEP}  />
                                </div>
                                <div className="contencao">
                                    <label htmlFor="">Nome da academia:</label>
                                    <input type="text" placeholder="Nome da academia" onInput={(e) => setAcademia(e.target.value)} aria-label="Digite o nome da academia"/>
                                </div>
                             
                                <div className="contencao" >
                                <label htmlFor="">Rua:</label>
                                <input type="text" placeholder="Rua" onInput={(e) => setRua(e.target.value)} id="rua" />
                                </div>
                              <div className="contencao">
                              <label htmlFor="">Cidade:</label>
                                <input type="text" placeholder="Cidade" onInput={(e) => setCidade(e.target.value)}id="cidade" />
                                </div>
                            
                                
                         
                                <div className="contencao">
                                <label htmlFor="">Bairro:</label>
                                <input type="text" placeholder="Bairro" onInput={(e) => setBairro(e.target.value)} id="bairro"/>         
                                </div>
                    
                            <div className="cidadeUF">
                            <div className="contencao">
                               
                                <div className="contencao">
                                <label htmlFor="">N°:</label>
                                <input type="text" placeholder="N°" onInput={(e) => setNumero(e.target.value)}/>
                                </div>
                                <div className="contencao">
                                <p>UF:</p>
                                <select name="UF" id="uf" placeholder="UF" onChange={(e) => setUf(e.target.value)}>
                                    {options_df.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                                </div>
                             </div>
                            </div>
                            <div className="divButtons">
                                <div className="boxSeta1">
                                    <button onClick={() => mostrarCadastro2()}> <img src={setaE} alt="" srcSet="" className="setas" /> </button>
                                </div>
                                <div className="boxSeta2">
                                    <button onClick={() => cadastrar()}><img src={sucesso} alt="" className="sucesso"/></button>
                                </div>
                            </div>
                           
                            </div>
                         </div>
                    </div>
              </main>
        </>
    )
}

export default Cadastro;