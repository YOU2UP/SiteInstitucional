import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import api from '../../api';

const PieChart = () => {

  const token = sessionStorage.getItem('token');
  const [usuarios, setUsuarios] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // console.log(token)

  useEffect(() => {
    api.get('/usuarios', config)
      .then((response) => {
        console.log('usuarios', response.data); 
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.log('Erro: ', error);
      });
  }, []);

  function filterUsersByStage(users, stage) {
    if (!Array.isArray(users) || typeof stage !== 'string') {
      console.error('Entrada inválida.');
      return [];
    }

    const validStages = ['iniciante', 'intermediario', 'avancado'];
    if (!validStages.includes(stage.toLowerCase())) {
      console.error('Estágio inválido.');
      return [];
    }

    return users.filter(user => user.estagio.toLowerCase() === stage.toLowerCase());
  }

  const iniciantes = filterUsersByStage(usuarios, 'iniciante');
  const intermediarios = filterUsersByStage(usuarios, 'intermediario');
  const avancados = filterUsersByStage(usuarios, 'avancado');

  // console.log('iniciantes:', iniciantes);
  // console.log('intermediarios:', intermediarios);
  // console.log('avancados:', avancados);


  const option = {

    backgroundColor: '#f0f0f0',
    title: {
      text: 'NÍVEIS DE TREINO',
      subtext: 'Porcentagem do nivel de preparo fisico dos usuarios',
      left: 'center',
      top: 5,
      textStyle: {
        fontSize: 16,
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'horizontal', // Orientação da legenda (horizontal)
      bottom: 10, // Distância do topo em pixels
      data: ['Iniciante', 'Intermediário', 'Avançado'],
    },
    series: [
      {
        name: 'Nível de Habilidade',
        type: 'pie',
        radius: '70%',
        center: ['50%', '50%'], // Posição vertical do gráfico
        label: {
          show: false,
          formatter: '{b}: {c} ({d}%)',
        },
        data: [
          { value: iniciantes.length, name: 'Iniciante', itemStyle: { color: '#1C1C1C' } }, // Substitua os valores com dados reais
          { value: intermediarios.length, name: 'Intermediário', itemStyle: { color: '#FF9200' } }, // Substitua os valores com dados reais
          { value: avancados.length, name: 'Avançado', itemStyle: { color: '#098FF5' } }, // Substitua os valores com dados reais
        ],
      },
    ],
  };

  return <ReactEcharts option={option} style={{ height: '415px', width: '320px' }} />;
};

export default PieChart;
