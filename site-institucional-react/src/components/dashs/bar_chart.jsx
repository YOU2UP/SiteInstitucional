import React, { useEffect, useState } from 'react';
import ReactEcharts from 'echarts-for-react'
import api from '../../api';
import '../../css-images/css/bar.css';


const Bar_chart = () => {
  const [dias, setDias] = useState([]);

  const id = sessionStorage.getItem("id");
  const token = sessionStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
  };

  useEffect(() => {

    api.get(`/usuarios/quantidade-treinos-semana/${id}`, config)
      .then((response) => {
        console.log('teste', response.data);
        const diasArray = Object.values(response.data);
        setDias(diasArray);
      })
      .catch((error) => {
        console.log(error);
      });
      
  }, []);

  const option ={
    backgroundColor: '#f6f6f6',
    title: {
        text: 'SEUS TREINOS NA SEMANA',
        subtext: 'Aqui estão os dias que você mais treina na semana',
        left: 'center',
        top: 5,
        textStyle: {
            fontSize: 16,
        },
    },
    xAxis: {
      type: 'category',
      data: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
    }, 
    yAxis: {
      type: 'value',
    },
    legend: {
      bottom: 10,
      data: ['Treinos'],
    },
    tooltip: {  
      trigger: 'axis',
      axisPointer: {
        type: 'shadow', 
      },
    },
    series: [
      {
        name: 'Treinos',
        data: dias,
        type: 'bar',
        itemStyle: {
          color: '#ff9200'
        },
      },
    ]
  };

  return <ReactEcharts option={option} style={{ height: '500px', width:'1000px' }} />;

}

export default Bar_chart;
