import React from 'react'
import marcador from '../../css-images/img/map_marker.png'
import '../../css-images/css/card_match.css'

function Card_match(props) {
  return (
    <div className="card">
        <div className="foto">
            <img src={props.img} className='pessoa' alt={props.nome} />
        </div>
        <div className="infos">
            <h1>{props.nome}</h1>
            {props.idade} anos
            <div className="localizacao">
                <img src={marcador} alt="" className="marcador" />
                <span>{props.localizacao}</span>
            </div>
        </div>
        <div className="botao">
            <button className="conversar">
                Conversar
            </button>
        </div>
    </div>
  )
}

export default Card_match