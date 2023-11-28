import React, {useState, useEffect} from 'react';
import ReactEcharts from 'echarts-for-react';
import {parseISO, getMonth} from 'date-fns';
import api from '../../api';
import { DataObject } from '@mui/icons-material';

const LineChart = () => {

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
        console.log('treinos', response.data);
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.log('Erro: ', error);
      });
  }, []);

  console.log("teste", usuarios)

   function countDatesByMonthFromResponse(response) {
     // Mapeia o array de objetos e converte o campo 'inicioTreino' para objetos Date
   const dateObjects = response.map(item => ({
    dataCriacaoConta: parseISO(item.dataCriacaoConta),
    }));
    
    console.log("testezinho", dateObjects)

     // Cria um objeto representando todos os meses com contagem inicial zero
    const countByMonth = Array.from({ length: 12 }, (_, index) => ({
       month: index,
       count: 0,
    }));

    console.log("testezinho2", countByMonth)
  
     // Incrementa as posições correspondentes para cada data encontrada
     dateObjects.forEach(dateObject => {
       const month = getMonth(dateObject.dataCriacaoConta);
       countByMonth[month].count += 1;
     });
  
     console.log("testezinho3", countByMonth)
    return countByMonth;
   }

  const contagem = countDatesByMonthFromResponse(usuarios);
  console.log("aaaa", contagem)

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
        data: [10, 12, 15, 8, 20, 18, 22, 30, 21],
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

  return <ReactEcharts option={option} style={{ height: '415px' , width: '1100px'}} />;
};

export default LineChart;