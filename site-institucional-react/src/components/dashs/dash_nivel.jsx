import React from 'react';
import ReactEcharts from 'echarts-for-react';

const PieChart = () => {
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
          { value: 30, name: 'Iniciante', itemStyle: { color: '#1C1C1C' } }, // Substitua os valores com dados reais
          { value: 40, name: 'Intermediário', itemStyle: { color: '#FF9200' }}, // Substitua os valores com dados reais
          { value: 30, name: 'Avançado', itemStyle: { color: '#098FF5' } }, // Substitua os valores com dados reais
        ],
      },
    ],
  };

  return <ReactEcharts option={option} style={{ height: '415px', width: '320px' }} />;
};

export default PieChart;
