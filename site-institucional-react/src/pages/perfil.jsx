import React, { useEffect, useState } from 'react'
import Menu from '../components/menu/Menu_logado'
import api from '../api';
import '../css-images/css/perfil.css'
import foto from  '../css-images/img/icone_card.png'
import Config from '../css-images/img/config.png'
import Grafico from '../components/canvas/canvas_dash'
import Barra from '../components/barra/barra'
import Breadcrumb from '../components/Breadcrumb/breadcrumb';

function Perfil() {

    const nome = sessionStorage.getItem("nome");
    const id = sessionStorage.getItem("id");
    const token = sessionStorage.getItem("token");
    const [usuario, setUsuario] = useState([]);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };

    const breadcrumbLinks = [
        { label: 'Home', to: '/pagina_inicial' },
        { label: 'Perfil', to: '/perfil' },
    ];

    const currentPage = '/perfil';

    const [treinos, setTreinos] = useState([]);
    const [media, setMedia] =useState();
    const [ranking, setRanking] = useState([]);


    useEffect(() => {

        api.get(`/usuarios/${id}`, config).then((response) => {
            setUsuario(response.data)
            console.log(response.data)
        }).catch((error) => {   
            console.log("Erro: ", error)
        })

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

    function defineImg(nome) {
        var imagem;
    
        if (nome === "Christopher Nolan") {
          imagem = "https://ca-times.brightspotcdn.com/dims4/default/2f89e42/2147483647/strip/true/crop/5400x7200+0+0/resize/1200x1600!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F0b%2F71%2F301a805d4250aea241fcf4d02dd9%2F1312323-et-christopher-nolan-2.jpg"
        }
        else if (nome === "Steven Spielberg") {
          imagem = "https://www.planocritico.com/wp-content/uploads/2016/12/steven-spielberg-veredito-cinefilo-melhores-piores-filmes-plano-critico.jpg"
        }
        else if (nome === "Quentin Tarantino") {
          imagem = "https://img.etimg.com/thumb/width-1200,height-900,imgsize-121638,resizemode-75,msid-98682598/magazines/panache/end-of-an-era-quentin-tarantino-is-reportedly-working-on-his-last-film.jpg"
        }
        else if (nome === "Alfred Hitchcock") {
          imagem = "https://br.web.img2.acsta.net/c_310_420/pictures/15/02/25/20/43/378174.jpg"
        }
        else if (nome === "Martin Scorsese") {
          imagem = "https://multiversonoticias.com.br/wp-content/uploads/2023/05/Martin-Scorsese-1024x650.jpg"
        }
        else {
          imagem = foto;
        }
    
        return imagem;
    
    
      }


    return (
        <>
            <Menu/>


            <div className="seguraBrad">
                <Breadcrumb links={breadcrumbLinks}  currentPage={currentPage}/>
                    <a href='/configuracao' className='btnConfig'>
                        <img src={Config} alt="engrenagem"  className='imgConfig'/>
                        
                    </a>
            </div>
        
            <div className="containerPerfil">

                <div className="infos">
                    <div className="foto">
                        <img src={defineImg(nome)} alt={nome} className='imgPerfil'/>
                    </div>
                    <div className="informacoes">
                        <h1 className='nomeUsuarioPerfil'>{nome}</h1>
                        <span className='descricao'>
                        Sou um usuário legal
                        </span>
                      


                        <div style={{marginTop: 30}}>

                        <span className="treinosRealizados">Treinos Realizados: </span> {qtdTreinos}
                        </div>

                <div className="metas">
                    
                    <h1 className='meta'>Meta</h1>

                    {usuario.MetaTreinos === 0 ? (
                        <div>
                        <span>Você ainda não Possui Metas</span>
                        
                        <button className='btnMeta'>Defina Uma Meta</button>
                        </div>
                    ) : (
                        <Barra qtdTreinos={qtdTreinos} metaTreinos={usuario.metaTreinos}/>
                        
                    )}

                    
                </div>
                    </div>
                </div>



            </div>
                <Grafico/>
            <div className="containerPerfil2">
            
            </div>
            


        </>
    )
}

export default Perfil