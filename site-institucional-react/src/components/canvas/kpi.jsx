import React, { useState, useEffect } from 'react';
import '../../css-images/css/kpi.css';
import api from '../../api';

function Kpi() {
  const id = sessionStorage.getItem('id');
  const token = sessionStorage.getItem('token');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [diasTreinos, setDiasTreinos] = useState([]);
  const [diaMaisTreino, setDiaMaisTreino] = useState(null);
  const [parceiroMaisTreinos, setParceiroMaisTreinos] = useState(null);
  const [media, setMedia] = useState(0);

  useEffect(() => {
    api.get(`/usuarios/quantidade-treinos-semana/${id}`, config)
      .then((response) => {
        setDiasTreinos(response.data);
        encontrarDiaMaisTreino(response.data);
      })
      .catch((error) => {
        console.log('Erro: ', error);
      });

    api.get(`/treinos/contagem-treinos/${id}`, config).then((response) => {
      const treinos = response.data;
      encontrarParceiroMaisTreinos(treinos);
    }).catch((error) => {
      console.log("Erro:", error);
    });

    api.get(`/avaliacoes/media/${id}`, config).then((response) => {
      setMedia(response.data)
    }).catch((error) => {
      console.log("Erro media: ", error);
    })


  }, []);

  console.log('parceiroMaisTreinos', parceiroMaisTreinos);

  const diasDaSemana = {
    domingo: 'Domingo',
    segunda: 'Segunda-feira',
    terca: 'Terça-feira',
    quarta: 'Quarta-feira',
    quinta: 'Quinta-feira',
    sexta: 'Sexta-feira',
    sabado: 'Sábado',
  };

  // Função para encontrar o dia com mais treinos
  const encontrarDiaMaisTreino = (treinos) => {
    let maxTreinos = 0;
    let diaMaxTreinos = null;

    for (const [dia, quantidade] of Object.entries(treinos)) {
      if (quantidade > maxTreinos) {
        maxTreinos = quantidade;
        diaMaxTreinos = dia;
      }
    }

    // Mapear a abreviação do dia para o nome completo
    setDiaMaisTreino(diasDaSemana[diaMaxTreinos]);
  };

  //encontra o parceiro com mais treinos	
  const encontrarParceiroMaisTreinos = (treinos) => {
    if (treinos.length > 0) {
      let maxTreinos = 0;
      let parceiroMaxTreinos = null;

      const contagemTreinos = {}; // Um objeto para armazenar a contagem de treinos para cada "parceiro"

      for (const parceiro of treinos) {
        contagemTreinos[parceiro] = (contagemTreinos[parceiro] || 0) + 1;

        if (contagemTreinos[parceiro] > maxTreinos) {
          maxTreinos = contagemTreinos[parceiro];
          parceiroMaxTreinos = parceiro;
        }
      }

      setParceiroMaisTreinos(parceiroMaxTreinos);
    }
  };

  return (
    <div className="kpiContainer">
      <div className="kpi">
        <div className="tituloKpi">
          <h1>Dia com mais Treinos</h1>
        </div>

        <div className="corpoKpi">
          {diaMaisTreino && <h1>{diaMaisTreino}</h1>}
        </div>
      </div>
      <div className="kpi">
        <div className="tituloKpi">
          <h1>Parceiro com mais Treinos</h1>
        </div>
          <div className="corpoKpi">
          {parceiroMaisTreinos && <h1>{parceiroMaisTreinos}</h1>}
          </div>
      </div>
      <div className="kpi">
        <div className="tituloKpi">
          <h1>Sua nota média de avaliação</h1>
        </div>

        <div className="corpoKpi">
        {media && <h1>{media.toFixed(1)}</h1>}
        </div>
      </div>
    </div>
  );
}

export default Kpi;
