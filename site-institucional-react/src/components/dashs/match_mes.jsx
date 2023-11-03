import React from 'react';
import ReactEcharts from 'echarts-for-react';

const LineChart = () => {
  const option = {
    backgroundColor: '#f0f0f0',
    title: {
      text: 'MATCH X CADASTROS',
      subtext: 'Comparação do número de cadastro de usuarios em comparação com a quantidade de match que acontecem no mês ',
      left: 'center',
      top: 5,
      textStyle: {
        fontSize: 16,
      },
    },
    xAxis: {
      type: 'category',
      data: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'agosto', 'outubro'],
    },
    yAxis: {
      type: 'value',
    },
    legend: {
      data: ['Matchs', 'Cadastros'],
      bottom: 10, 
    },
    tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
        },
    series: [
      {
        name: 'Matchs',
        data: [10, 12, 15, 8, 20, 18, 22, 30, 21],
        type: 'line',
        smooth: true,
        itemStyle: {
          color: '#ff9200',
        },
      },
      {
        name: 'Cadastros', // Nome da série
        data: [5, 7, 9, 6, 12, 10, 14, 20, 30], // Dados da segunda linha
        type: 'line',
        smooth: true,
        itemStyle: {
          color: '#1C1C1C', // Cor da segunda linha
        },
      },
    ],
  };

  return <ReactEcharts option={option} style={{ height: '400px' , width: '1000px'}} />;
};

export default LineChart;