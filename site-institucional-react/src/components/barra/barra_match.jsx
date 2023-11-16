import React from 'react'
import '../../css-images/css/barra.css'

function Barra_Match(props) {


    const porcentagem = (props.qtdTreinos / props.metaTreinos) * 100; 

  return (
    <>

    <div className="containerBarra">
        

    <div className="barraDeProgresso">
        <div className="progresso" style={{ width: `${porcentagem}%` }}></div>        
    </div>
        {porcentagem.toFixed(0)}%
    </div>
    <div className="aa">
        A Meta de {props.nome} é de {props.metaTreinos} treinos. 
    </div>


    </>

  )
}

export default Barra_Match