import React from 'react'
import '../../css-images/css/barra.css'

function Barra(props) {


    const porcentagem = (props.qtdTreinos / props.metaTreinos) * 100; 

  return (
    <>

    <div className="containerBarra">

    <div className="barraDeProgresso">
        <div className="progresso" style={{ width: `${porcentagem}%` }}></div>
        
    </div>
        {porcentagem}%
    </div>
    </>

  )
}

export default Barra
