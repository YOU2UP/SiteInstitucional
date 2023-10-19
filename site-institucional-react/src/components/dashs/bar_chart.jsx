import React, { useEffect, useState } from 'react';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import api from '../../api';
import '../../css-images/css/bar.css';


Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Bar_chart() {
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

  const data = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    datasets: [
      {
        label: 'Treinos',
        data: dias,
        backgroundColor: '#ff9200',
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  };

  const options = {};

  return (
    <div>
      <Bar data={data} options={options} className='Grafiquinho' />
    </div>
  );
}

export default Bar_chart;
