import React from 'react';
import ReactEcharts from 'echarts-for-react';

const DoughnutChart = () => {
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
          { value: 70, name: 'Perfis Ativos', itemStyle: { color: '#1C1C1C' } }, // Substitua os valores com dados reais
          { value: 30, name: 'Perfis Não Ativos', itemStyle: { color: '#ff9200' }}, // Substitua os valores com dados reais
        ],
        itemStyle: {
          borderWidth: 2,
          borderColor: '#f0f0f0', // Cor da borda interna da rosquinha
        },
      },
    ],
  };

  return <ReactEcharts option={option} style={{ height: '415px' , width: '320px'}} />;
};

export default DoughnutChart;