import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../css-images/css/perfil.css'
import api from '../api'
import foto from  '../css-images/img/icone_card.png'
import Menu from '../components/menu/Menu_logado'
import Barra from '../components/barra/barra_match'
import Bread from '../components/Breadcrumb/breadcrumb'
import Modal from '../components/modal/modal_agenda'

function Perfil_match() {
    const { id } = useParams();
    const token = sessionStorage.getItem('token');
    const [usuario, setUsuario] = useState([]);
    const [treinos, setTreinos] = useState([]);
    const [open, setOpen] = useState(false);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };


    const breadcrumbLinks = [
        { label: 'Home', to: '/pagina_inicial' },
        { label: 'Perfil', to: `/perfil_match/${id}` },
    ];

    const currentPage = '/perfil_match/:id';

    useEffect(() => {
        api.get(`/usuarios/${id}`, config).then((response) => {
            setUsuario(response.data)

        }).catch((error) => {
            console.log("Erro: ", error)
        })

        api.get(`/treinos/contagem-treinos/${id}`, config).then((response) => {
            setTreinos(response.data)

        }).catch((error) => {
            console.log("Erro: ", error)
        })


    }, [id])

    console.log("usuario", usuario)
    const qtdTreinos = treinos.length;

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
            <Menu />

            <Bread links={breadcrumbLinks} currentPage={currentPage} />


            <div className="containerPerfil">


                <div className="infosMatch">
                    <div className='fotosInfo'>

                    <div className="foto">
                        <img src={defineImg(usuario.nome)} alt={usuario.nome} className='imgPerfil' />
                    </div>
                    <div className="informacoes">
                        <h1 className='nomeUsuarioPerfil'>{usuario.nome}</h1>
                        <span className='descricao'>
                            {usuario.descricao}
                        </span>
                        <br />
                        <br />
                        <br />


                        <div className='info2'>

                            <div>
                                
                            <span className="treinosRealizados">Treinos Realizados: </span> {qtdTreinos}
                            </div>

                            <div>

                            <span className="treinosRealizados">Avaliação: </span> {usuario.notaMedia}
                            </div>
                            <div className="seguraBotao1">
                                <button className='btnConversaMatch' onClick={() => setOpen(true)}>Marcar Treino</button>
                            </div>
                        </div>
                    </div>
                    </div>
                <div className="metasMatch">

                    <div className="tituloMatch">
                        Meta
                    </div>

                    
                  

                    {usuario.Metatreinos === 0 ? (
                        <div>
                            <span>Esse usuário não possui metas </span>
                        </div>
                    ) : (            
                     <Barra nome={usuario.nome} qtdTreinos={qtdTreinos} metaTreinos={usuario.metaTreinos}/>
                    )}
                </div>
                </div>
            </div>    
                <Modal setOpen={setOpen} open={open} idUsu={usuario.id}/>
            </>
            )
}

export default Perfil_match
