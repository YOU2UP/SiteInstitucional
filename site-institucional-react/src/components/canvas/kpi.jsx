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

  useEffect(() => {
    api.get(`/usuarios/quantidade-treinos-semana/${id}`, config)
      .then((response) => {
        setDiasTreinos(response.data);
        encontrarDiaMaisTreino(response.data);
      })
      .catch((error) => {
        console.log('Erro: ', error);
      });

  }, []);

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
      </div>
      <div className="kpi">
        <div className="tituloKpi">
          <h1>Média de Treinos Por mês</h1>
        </div>
      </div>
    </div>
  );
}

export default Kpi;
