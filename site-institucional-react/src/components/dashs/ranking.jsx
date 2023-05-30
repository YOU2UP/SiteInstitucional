import React, {useEffect, useState} from 'react'
import api from '../../api'
import Perfil from '../../pages/perfil';

function Ranking() {
    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        const id = sessionStorage.getItem("id");
        const token = sessionStorage.getItem("token");

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            },
        };

        api.get(`/treinos/contagem-treinos/${id}`, config).then((response) => {
            setRanking(response.data)
        }).catch((error) => {
            console.log("Erro:", error );
        }) 
    }, []);

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
        <Perfil></Perfil>

  )
}

export default Ranking