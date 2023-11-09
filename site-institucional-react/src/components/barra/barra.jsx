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
        {porcentagem.toFixed(0)}%
    </div>
    <div className="aa">
     
        {porcentagem.toFixed(0) < 50 ? `Sua meta é de ${props.metaTreinos}, não desista!` : `Sua meta é de ${props.metaTreinos}, você está quase lá!`}
    </div>


    </>

  )
}

export default Barra
