import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import api from '../../api';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

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
    'Janeiro': { realizados: 1, naoRealizados: 2 },
    'Fevereiro': { realizados: 2, naoRealizados: 6 },
    'Março': { realizados: 3, naoRealizados: 0 },
    'Abril': { realizados: 2, naoRealizados: 0 },
    'Maio': { realizados: 8, naoRealizados: 0 },
    'Junho': { realizados: 1, naoRealizados: 0 },
    'Julho': { realizados: 2, naoRealizados: 2 },
    'Agosto': { realizados: 7, naoRealizados: 2 },
    'Setembro': { realizados: 6, naoRealizados: 4 },
    'Outubro': { realizados: 0, naoRealizados: 1 },
    'Novembro': { realizados: 3, naoRealizados: 2 },
    'Dezembro': { realizados: 0, naoRealizados: 0 },
  };

  // Contando treinos realizados por mês
  treinosRealizados.forEach((treino) => {
    const dataInicioTreino = new Date(treino.dataInicio);
    if (!isNaN(dataInicioTreino.getTime())) { // Verifica se a data é válida
      const mes = format(dataInicioTreino, 'MMMM', { locale: ptBR });
      contadorTreinosPorMes[mes].realizados += 1;
    }
  });

  // Contando treinos não realizados por mês
  treinosNaoRealizados.forEach((treino) => {
    const dataInicioTreino = new Date(treino.dataInicio);
    if (!isNaN(dataInicioTreino.getTime())) { // Verifica se a data é válida
      const mes = format(dataInicioTreino, 'MMMM', { locale: ptBR });
      contadorTreinosPorMes[mes].naoRealizados += 1;
    }
  });

  // Obtendo dados formatados para o gráfico
  const meses = Object.keys(contadorTreinosPorMes);
  const dadosRealizados = meses.map((mes) => contadorTreinosPorMes[mes].realizados || 0);
  const dadosNaoRealizados = meses.map((mes) => contadorTreinosPorMes[mes].naoRealizados || 0);

  console.log('meses', meses);
  console.log('dadosRealizados', dadosRealizados);
  console.log('dadosNaoRealizados', dadosNaoRealizados);

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
      data: meses,
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