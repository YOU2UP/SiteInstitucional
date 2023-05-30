import React, {useEffect, useState} from 'react'
import Menu from '../components/Menu'
import api from '../api';
import '../css-images/css/perfil.css'
import Img from '../css-images/img/natalia.png'

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


    useEffect(() => {

        api.get(`/treinos/contagem-treinos/${id}`, config).then((response) => {
            setTreinos(response.data)
        }).catch((error) => {
            console.log("Erro: ", error)
        })


    }, [])

    const qtdTreinos = treinos.length;
    
  return (
    <>
        <Menu></Menu>

        <div className="infos">
            <div className="foto">
                <img src={Img} alt="" />
            </div>
            <div className="informacoes">
                <h1>{nome}</h1>
                <span className='descricao'>
                    Sou muito extrovertida e sempre quis treinar com um parceito,<br/>
                    porém por conta dos horários não consigo achar ninguém.
                </span>

                <span className="treinosRealizados">
                    <b>Treinos Realizados: </b> {qtdTreinos}
                </span>

                <h1 className='meta'>Meta</h1>

                <span>Você ainda não Possui Metas</span>
                <br/>
                <br/>
                <button>Defina Uma Meta</button>
            </div>
        </div>


        <div className="graficosUsuario">
            <div className="graficoBarra"></div>
            <div className="kapis">
                <div className="media"></div>
                <div className="rankingTreino"></div>
            </div>
        </div>
    
    
    </>
  )
}

export default Perfil