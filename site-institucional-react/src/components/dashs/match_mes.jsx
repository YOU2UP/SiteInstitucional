import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';
import { parseISO, getMonth } from 'date-fns';
import api from '../../api';
import { DataObject } from '@mui/icons-material';

const LineChart = () => {

  const token = sessionStorage.getItem('token');
  const [usuarios, setUsuarios] = useState([]);
  const [matches, setMatches] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // console.log(token)

  useEffect(() => {
    api.get('/usuarios', config)
      .then((response) => {
        // console.log('treinos', response.data);
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.log('Erro: ', error);
      });

    api.get('/matches', config)
      .then((response) => {
        console.log('Matches', response.data);
        setMatches(response.data);
      }).catch((error) => {
        console.log('Erro: ', error);
      });
  }, []);

  function countDatesByMonthFromResponse(response) {

    if (!Array.isArray(response)) {
      console.error('A resposta não é um array válido.');
      return [];
    }

    // Mapeia o array de objetos e converte o campo 'dataCriacaoConta' para objetos Date
    const dateObjects = response
      .filter(item => item && item.dataCriacaoConta) // Filtra itens undefined ou sem dataCriacaoConta
      .map(item => ({
        dataCriacaoConta: parseISO(item.dataCriacaoConta),
      }));

    // console.log("dateObjects:", dateObjects);

    // Cria um objeto representando todos os meses com contagem inicial zero
    const countByMonth = Array.from({ length: 12 }, (_, index) => ({
      month: index,
      count: 0,
    }));

    // console.log("countByMonth:", countByMonth);

    // Incrementa as posições correspondentes para cada data encontrada
    dateObjects.forEach(dateObject => {
      const month = getMonth(dateObject.dataCriacaoConta);
      if (month >= 0 && month < 12) {
        countByMonth[month].count += 1;
      } else {
        console.warn('Mês fora do intervalo esperado.');
      }
    });

    // console.log("countByMonth:", countByMonth);
    return countByMonth;
  }

  function countDatesByMonthFromResponseMatch(jsonResponse) {
    // Verifica se jsonResponse é um objeto válido
    if (!jsonResponse || typeof jsonResponse !== 'object') {
      console.error('A resposta não é um objeto válido.');
      return [];
    }

    // Filtra os objetos de usuário válidos e extrai os meses
    const dateObjects = Object.values(jsonResponse)
      .filter(user => user && user.dataMatch)
      .map(user => ({
        month: getMonth(parseISO(user.dataMatch)),
      }));

    // console.log("dateObjects:", dateObjects);

    // Cria um objeto representando todos os meses do ano com contagem inicial zero
    const countByMonth = Array.from({ length: 12 }, (_, index) => ({
      month: index + 1,
      count: 0,
    }));

    // console.log("countByMonth:", countByMonth);

    // Incrementa as posições correspondentes para cada mês encontrado
    dateObjects.forEach(dateObject => {
      const month = dateObject.month;
      if (month >= 1 && month <= 12) {
        countByMonth[month - 1].count += 1;
      } else {
        console.warn('Mês fora do intervalo esperado.');
      }
    });

    // console.log("countByMonth:", countByMonth);
    return countByMonth;
  }


  const contagem = countDatesByMonthFromResponse(usuarios);
  const contagemMatch = countDatesByMonthFromResponseMatch(matches);
  // console.log("aaaa", contagem)
  // console.log("aaaa", contagemMatch)

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
      data: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'agosto', 'outubro', 'novembro', 'dezembro'],
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
        data: contagemMatch.map((mes) => (mes.count)),
        type: 'line',
        smooth: true,
        itemStyle: {
          color: '#ff9200',
        },
      },
      {
        name: 'Cadastros', // Nome da série
        data: contagem.map((mes) => (mes.count)), // Dados da segunda linha
        type: 'line',
        smooth: true,
        itemStyle: {
          color: '#1C1C1C', // Cor da segunda linha
        },
      },
    ],
  };

  return <ReactEcharts option={option} style={{ height: '400px', width: '1100px' }} />;
};

export default LineChart;