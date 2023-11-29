import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import api from '../../api';

const DoughnutChart = () => {

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


  function filterUsersByRecentTraining(users) {
    if (!Array.isArray(users)) {
      console.error('Entrada inválida.');
      return [];
    }

    const filteredUsers = users.filter(user => {
      const treinos = user.treinos || [];
      const ultimoTreino = treinos.length > 0 ? treinos[treinos.length - 1] : null;

      if (ultimoTreino) {
        const dataHoraTreino = new Date(ultimoTreino.dataHora);
        const seisMesesAtras = new Date();
        seisMesesAtras.setMonth(seisMesesAtras.getMonth() - 6);

        return dataHoraTreino > seisMesesAtras;
      }

      return false;
    });

    return filteredUsers;
  }

  function filterUsersByOldTraining(users) {
    if (!Array.isArray(users)) {
      console.error('Entrada inválida.');
      return [];
    }

    const filteredUsers = users.filter(user => {
      const treinos = user.treinos || [];
      const ultimoTreino = treinos.length > 0 ? treinos[treinos.length - 1] : null;

      if (ultimoTreino) {
        const dataHoraTreino = new Date(ultimoTreino.dataHora);
        const seisMesesAtras = new Date();
        seisMesesAtras.setMonth(seisMesesAtras.getMonth() - 6);

        return dataHoraTreino <= seisMesesAtras;
      }

      return false;
    });

    return filteredUsers;
  }

  const Ativos = filterUsersByRecentTraining(usuarios);
  const Inativos = filterUsersByOldTraining(usuarios);

  console.log('Ativos:', Ativos);
  console.log('Inativos:', Inativos);

  const option = {
    backgroundColor: '#f0f0f0',
    title: {
      text: 'ANÁLISE DE PERFIS',
      subtext: 'Análise do status de cada perfil dentro da pltaforma',
      left: 'center',
      top: 10,
      textStyle: {
        fontSize: 16,
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'horizontal', // Posição da legenda (horizontal)
      bottom: 10, // Distância do topo em pixels
      data: ['Perfis Ativos', 'Perfis Não Ativos'],
      itemGap: 5, // Espaçamento entre os itens da legenda
    },
    series: [
      {
        name: 'Status dos Perfis',
        type: 'pie',
        radius: ['50%', '70%'], // Tamanho da rosquinha
        label: {
          show: false,
          formatter: '{b}: {c} ({d}%)',
        },
        data: [
          { value: Ativos.length, name: 'Perfis Ativos', itemStyle: { color: '#FF9200' } }, // Substitua os valores com dados reais
          { value: Inativos.length, name: 'Perfis Não Ativos', itemStyle: { color: '#1C1C1C' } }, // Substitua os valores com dados reais
        ],
        itemStyle: {
          borderWidth: 2,
          borderColor: '#f0f0f0', // Cor da borda interna da rosquinha
        },
      },
    ],
  };

  return <ReactEcharts option={option} style={{ height: '400px', width: '300px' }} />;
};

export default DoughnutChart;