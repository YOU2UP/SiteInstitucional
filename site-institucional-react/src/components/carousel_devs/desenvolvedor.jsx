import React from 'react'
import '../../css-images/css/component_dev.css'

function Desenvolvedor(props) {
  return (
    <div>
      <div className="containerDev">
        <img src={props.img} alt={props.nome} className='imgDev'/>
        <h1>{props.nome}</h1>
        <h2>{props.funcao}</h2>
      </div>
    </div>
  )
}

export default Desenvolvedor
