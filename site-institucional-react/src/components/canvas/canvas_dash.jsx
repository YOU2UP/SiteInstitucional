import React, { useEffect, useState } from 'react'
import api from '../../api';
import Barra from '../dashs/bar_chart'
import '../../css-images/css/canvas_dash.css'
import Kpi from './kpi'

function Canvas_Dash() {

    const nome = sessionStorage.getItem("nome");
    const id = sessionStorage.getItem("id");
    const token = sessionStorage.getItem("token");

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };

    const [treinos, setTreinos] = useState([]);
    const [media, setMedia] = useState();
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
            console.log("ranking", response.data)
        }).catch((error) => {
            console.log("Erro:", error);
        })

    }, [])

    const qtdTreinos = treinos.length;
    console.log(qtdTreinos)

    function ContagemTreinos(ranking) {
        const counts = {};
        ranking.forEach((nome) => {
            if (counts[nome]) {
                counts[nome]++;
            } else {
                counts[nome] = 1;
            }
        });

        return counts;
    }


    const contagemNome = ContagemTreinos(ranking);

    const nomesOrdenados = Object.keys(contagemNome).sort((a, b) => contagemNome[b] - contagemNome[a]);
    console.log(nomesOrdenados)

    const top4 = nomesOrdenados.slice(0, 4);


    const data = top4.map((nome, index) => (
        <div key={index}>{nome}</div>
    ));

    return (
        <>
            <div className="containerDash">
                <div className="graficosUsuario">
                    <div className="graficoBarra">
                        <Barra className='graficoPerfil'></Barra>
                    </div>
                    <Kpi  />
                </div>
            </div>
        </>
    )
}

export default Canvas_Dash