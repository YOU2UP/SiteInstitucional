import React from 'react'
import ReactEcharts from 'echarts-for-react'

const Dias_semana = (props) => {
    const option ={
        backgroundColor: '#f6f6f6',
        title:{
            text: 'DIAS EM QUE SEUS TREINOS OCORREM',
            subtext: 'Trazemos para você a quantidade de treinos que você já fez em cada dia da semana',
            left: 'center',
            top: 5,
            textStyle: {
                fontSize: 16,
            },
        },

        xAxis: {
            type: 'category',
            data: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo'],
        },
        yAxis:{
            type: 'value',
        },
        legend:{
            bottom: 10,
            data:['Treinos'],
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
        }, 
        series:[
            {
                name: 'Treinos',
                data: props.dias,
                type: 'bar',
                itemStyle:{
                    color: '#ff9200',
                    borderColor: 'black',
                },
            },
        ],
        };
    
        return <ReactEcharts option={option} style={{ height: '415px', width:'1000px' }} />;
    }



export default Dias_semana