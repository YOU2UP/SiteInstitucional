import React, { useEffect, useState } from 'react'
import Menu from '../components/menu/Menu_logado'
import Footer from '../components/footer/footer';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import api from '../api';
import '../css-images/css/perfil.css'
import Img from '../css-images/img/natalia.png'
import Barra from '../components/dashs/bar_chart'

function Perfil() {

    const nome = sessionStorage.getItem("nome");
    const id = sessionStorage.getItem("id");
    const token = sessionStorage.getItem("token");

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };

    const [treinos, setTreinos] = useState([]);
    const [media, setMedia] =useState();
    const [ranking, setRanking] = useState([]);


    useEffect(() => {

        api.get(`/treinos/contagem-treinos/${id}`, config).then((response) => {
            setTreinos(response.data)

        }).catch((error) => {
            console.log("Erro: ", error)
        })

        api.get(`/avaliacoes/media/${id}`, config)
        .then((response) => {
          setMedia(response.data)
        })
        .catch((error) => {
          console.log("Erro media: ", error);
        });

        api.get(`/treinos/contagem-treinos/${id}`, config).then((response) => {
            setRanking(response.data)
        }).catch((error) => {
            console.log("Erro:", error );
        }) 
        
    }, [])
    
    const qtdTreinos = treinos.length;
    console.log(qtdTreinos)

    function ContagemTreinos(ranking){
        const counts = {};
        ranking.forEach((nome) => {
            if(counts[nome]){
                counts[nome]++;
            }else{
                counts[nome] = 1;
            }
        });

        return counts;
    }


    const contagemNome = ContagemTreinos(ranking);

    const nomesOrdenados = Object.keys(contagemNome).sort((a, b) => contagemNome[b] - contagemNome[a]);
    console.log(nomesOrdenados)

    const top4 = nomesOrdenados.slice(0,4);


    const data = top4.map((nome, index) => (
        <div key={index}>{nome}</div>
    ));


    return (
        <>
            <Menu/>
            {/* <BreadcrumbsItem to="/page-one">Page One</BreadcrumbsItem> */}
        
            <div className="containerPerfil">

                <div className="infos">
                    <div className="foto">
                        <img src={Img} alt="" className='imgPerfil'/>
                    </div>
                    <div className="informacoes">
                        <h1 className='nomeUsuarioPerfil'>{nome}</h1>
                        <span className='descricao'>
                            Sou muito extrovertida e sempre quis treinar com um parceiro,<br />
                            porém, por conta dos horários não consigo achar ninguém.
                        </span>
                        <br />
                        <br />
                        <br />


                        <div>

                        <span className="treinosRealizados">Treinos Realizados: </span> {qtdTreinos}
                        </div>

                    </div>
                </div>
                <div className="metas">
                    
                    <h1 className='meta'>Meta</h1>
                    <br/>
                    <br/>
                    <span>Você ainda não Possui Metas</span>
                    <br />
                    <br />
                    <button className='btnMeta'>Defina Uma Meta</button>
                </div>


                <div className="graficosUsuario">
                    <div className="kapis">
                        <div className="media">
                            
                        <h1 className='tituloAvaliacao'>Sua Avaliação</h1>
                    

                        <span className='avaliacao'>{media}</span>
                        

                        <h1 className='subTituloAvaliacao'>Média das avaliações que seus parceiros te Deram</h1>
                        </div>
                        <div className="rankingTreino">
                            <h1 className="tituloRank">
                            Parceiros Com quem <br/>Você mais Treinou
                            </h1>
                            <div className="itensRank">
                                <div className="pessoaRank">
                                <span className="posicaoRank">1° </span> {data[0]}
                                </div>

                                <div className="pessoaRank">
                                <span className="posicaoRank">2° </span> {data[1]}
                                </div>

                                <div className="pessoaRank">
                                <span className="posicaoRank">3° </span> {data[2]}
                                </div>

                                <div className="pessoaRank">
                                <span className="posicaoRank">4° </span> {data[3]}
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="graficoBarra">
                        <h1 className='tituloGraficoBarra'>Dias da Semana Em Que Seus Treinos Ocorreram</h1>
                        <Barra className='graficoPerfil'></Barra>
                    </div>
                </div>

            </div>
            <Footer/>

        </>
    )
}

export default Perfil