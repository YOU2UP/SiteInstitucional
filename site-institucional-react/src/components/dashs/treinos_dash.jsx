import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import api from '../../api';
import { isAfter, isBefore, startOfMonth, addMonths, format } from 'date-fns';

const BarChart = () => {
  const token = sessionStorage.getItem('token');
  const [treinos, setTreinos] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    api.get('/treinos', config)
      .then((response) => {
        console.log('treinos', response.data);
        setTreinos(response.data);
      })
      .catch((error) => {
        console.log('Erro: ', error);
      });
  }, []);

  // Filtrando treinos realizados e não realizados
  const treinosRealizados = treinos.filter((treino) => treino.realizado === true);
  const treinosNaoRealizados = treinos.filter((treino) => treino.realizado === false);

  // Criando objeto para armazenar contagem de treinos por mês
  const contadorTreinosPorMes = {
    'Janeiro': { realizados: 0, naoRealizados: 0 },
    'Fevereiro': { realizados: 0, naoRealizados: 0 },
    'Março': { realizados: 0, naoRealizados: 0 },
    'Abril': { realizados: 0, naoRealizados: 0 },
    'Maio': { realizados: 0, naoRealizados: 0 },
    'Junho': { realizados: 0, naoRealizados: 0 },
    'Julho': { realizados: 0, naoRealizados: 0 },
    'Agosto': { realizados: 0, naoRealizados: 0 },
    'Setembro': { realizados: 0, naoRealizados: 0 },
    'Outubro': { realizados: 0, naoRealizados: 0 },
  };

  // Contando treinos realizados por mês
  treinosRealizados.forEach((treino) => {
    const mes = format(new Date(treino.dataInicio), 'MMMM', { locale: 'pt-BR' });
    contadorTreinosPorMes[mes].realizados += 1;
  });

  // Contando treinos não realizados por mês
  treinosNaoRealizados.forEach((treino) => {
    const mes = format(new Date(treino.dataInicio), 'MMMM', { locale: 'pt-BR' });
    contadorTreinosPorMes[mes].naoRealizados += 1;
  });

  // Obtendo dados formatados para o gráfico
  const dadosRealizados = Object.values(contadorTreinosPorMes).map((item) => item.realizados);
  const dadosNaoRealizados = Object.values(contadorTreinosPorMes).map((item) => item.naoRealizados);

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
      data: ['Treinos Marcados e Realizados', 'Treinos Marcados e Não Realizados'],
    },
    series: [
      {
        name: 'Treinos Marcados e Realizados',
        data: dadosRealizados,
        type: 'bar',
        itemStyle: {
          color: '#ff9200',
          borderColor: 'black',
        },
      },
      {
        name: 'Treinos Marcados e Não Realizados',
        data: dadosNaoRealizados,
        type: 'bar',
        itemStyle: {
          color: '#1C1C1C',
        },
      },
    ],
  };

  return <ReactEcharts option={option} style={{ height: '400px', width: '1100px' }} />;
};

export default BarChart;
