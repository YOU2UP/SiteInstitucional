import React from 'react';
import ReactEcharts from 'echarts-for-react';

const BarChart = () => {
  const option = {
    backgroundColor: '#f0f0f0',
    title: {
      text: 'ANÁLISE DE TREINOS',
      subtext: 'Análise mensal da situação dos treinos marcados na plataforma',
      left: 'center',
      top: 5,
      textStyle: {
        fontSize: 16,
      },
    },
    xAxis: {
      type: 'category',
      data: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro'],
    },
    yAxis: {
      type: 'value',
    },
    legend: {
      bottom: 10,
      data: ['Treinos Marcados e Realizados', 'Treinos Marcados e Não Realizados', 'Treinos Cancelados'],
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    series: [
      {
        name: 'Treinos Marcados e Realizados',
        data: [80, 90, 100, 70, 120, 110, 130, 85, 95, 105],
        type: 'bar',
        itemStyle: {
          color: '#ff9200', // Cor das barras de treinos marcados e realizados
          borderColor: 'black'
        },
      },
      {
        name: 'Treinos Marcados e Não Realizados',
        data: [20, 30, 25, 10, 40, 35, 45, 22, 32, 27],
        type: 'bar',
        itemStyle: {
          color: '#1C1C1C', // Cor das barras de treinos marcados e não realizados
        },
      },
      {
        name: 'Treinos Cancelados',
        data: [5, 8, 7, 4, 10, 9, 12, 6, 10, 8],
        type: 'bar',
        itemStyle: {
          color: '#FF4242', // Cor das barras de treinos cancelados
          borderColor: 'black',
        },
      },
    ],
  };

  return <ReactEcharts option={option} style={{ height: '400px', width:'1000px' }} />;
};

export default BarChart;