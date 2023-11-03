import React, { useEffect, useState } from 'react';
import api from '../../api';
import Dash from '../dashs/usuario/dias_semana'
import '../../css-images/css/bar.css';

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

  return (
    <div>
      <Dash dias={dias}/>
    </div>
  );
}

export default Bar_chart;
