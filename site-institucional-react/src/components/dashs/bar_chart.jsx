import React, {useEffect, useState} from 'react'
import {Chart as ChartJs, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js'
import {Bar} from 'react-chartjs-2'
import api from '../../api'

ChartJs.register(
    BarElement, 
    CategoryScale, 
    LinearScale, 
    Tooltip, 
    Legend 
)

function Bar_chart() {

 
 

    useEffect(() => {
        const id = sessionStorage.getItem("id");
        const token = sessionStorage.getItem("token");

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            },
        };



        api.get(`/avaliacoes/media/${id}`, config).then((response) => {
            console.log("Media de avaliação: ",response.data)
        }).catch((error) => {
            console.log("Erro media: ",error)
        })


    }, []);
 

    const data = {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
        datasets: [
            {
                label: 'Treinos',
                data: [0, 10, 4, 3, 7, 5, 2],
                backgroundColor: '#ff9200',
                borderColor: 'black',
                borderWidth: 1
            }
        ]
    }

    const options = {

    }
  return (

    <div>
        <Bar data={data} options={options}>

        </Bar>
    </div>
    
  )
}

export default Bar_chart