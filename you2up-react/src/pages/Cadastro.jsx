import React from "react";
import Menu from "../components/Menu";
import api from "../api";
import { useState } from "react";
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



    function cadastrar() {
        const usuarioNovo = {
            nome: nome,
            senha: senha,
            email: email,
            dataNascimento: dataNascimento,
            sexo: "m",
            estagio: estagio,
            metaTreinos: 0,
            notificacoes: [],
            treinos: [],
            localTreino: {
                idLocalTreino: 6,
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
            window.location = "/dashboard";
            console.log(usuarioNovo)
        }).catch((error) => {
            console.log(error);
        });
    }
    function mostrarCadastro2() {
        document.querySelector(".cadastro1").style.display = "none";
        document.querySelector(".cadastro2").style.display = "flex";
        document.querySelector(".cadastro3").style.display = "none";
        document.querySelector(".cadastro2").style.opacity = "1";
        document.querySelector(".cadastro2").style.visibility = "visible";

    }
    function mostrarCadastro3() {
        document.querySelector(".cadastro1").style.display = "none";
        document.querySelector(".cadastro2").style.display = "none";
        document.querySelector(".cadastro3").style.display = "flex";
        document.querySelector(".cadastro3").style.opacity = "1";
        document.querySelector(".cadastro3").style.visibility = "visible";
    }
    return (
        <>
            <Menu />
            <main id="cadastro">
                <div className="container">
                    <div className="cadastro">
                        <div className="Containerlinha">
                            <div className="linha"></div>
                            <div className="bola1">
                            </div>
                            <div className="bola2">
                            </div>
                            <div className="bola3">
                            </div>
                        </div>
                        <div className="cadastro1">
                            <input type="text" placeholder="Nome" onInput={(e) => setNome(e.target.value)} />
                            <input type="password" placeholder="Senha" onInput={(e) => setSenha(e.target.value)} />
                            <input type="password" placeholder="Confirm. Senha" />
                            <input type="email" placeholder="E-mail" onInput={(e) => setEmail(e.target.value)} />
                            <input type="date" placeholder="Data Nascimento" onInput={(e) => setDataNascimento(e.target.value)} />

                            <button onClick={() => mostrarCadastro2()}> -- </button>
                        </div>
                        <div className="cadastro2">
                            <button onClick={() => setEstagio("Básico")}>Basico</button>
                            <button onClick={() => setEstagio("Intermediario")}>Intermediario</button>
                            <button onClick={() => setEstagio("Avançado")}>Avançado</button>
                            <button onClick={() => mostrarCadastro3()}> -- </button>
                        </div>
                        <div className="cadastro3">
                            <input type="text" placeholder="Nome da academia" onInput={(e) => setAcademia(e.target.value)} />
                            <input type="text" placeholder="CEP" />
                            <input type="text" placeholder="Rua" onInput={(e)=> setRua(e.target.value)} />
                            <input type="text" placeholder="Numero" onInput={(e)=>setNumero(e.taget.value)}/>
                            <input type="text" placeholder="Bairro" onInput={(e) => setBairro(e.target.value)} />
                            <input type="text" placeholder="Cidade" onInput={(e) => setCidade(e.target.value)} />
                            <select name="UF" id="" placeholder="UF" onChange={(e)=>setUf(e.target.value)}>
                            <option value="AC">AC</option>
<option value="AL">AL</option>
<option value="AM">AM</option>
<option value="AP">AP</option>
<option value="BA">BA</option>
<option value="CE">CE</option>
<option value="DF">DF</option>
<option value="ES">ES</option>
<option value="GO">GO</option>
<option value="MA">MA</option>
<option value="MG">MG</option>
<option value="MS">MS</option>
<option value="MT">MT</option>
<option value="PA">PA</option>
<option value="PB">PB</option>
<option value="PE">PE</option>
<option value="PI">PI</option>
<option value="PR">PR</option>
<option value="RJ">RJ</option>
<option value="RN">RN</option>
<option value="RO">RO</option>
<option value="RR">RR</option>
<option value="RS">RS</option>
<option value="SC">SC</option>
<option value="SE">SE</option>
<option value="SP">SP</option>
<option value="TO">TO</option>

                            </select>

                            <button onClick={() => cadastrar()}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Cadastro;