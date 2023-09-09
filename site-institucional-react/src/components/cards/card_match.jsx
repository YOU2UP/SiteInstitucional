import React, { useState } from 'react'
import marcador from '../../css-images/img/map_marker.png'
import '../../css-images/css/card_match.css'

function Card_match(props) {

  const [requisitante, setRequisitante] = useState(0);

  sessionStorage.setItem("requisitante", requisitante);
  
  

  return (
    <div className="card">
        
        
        <div className="match">
            <img src={props.img} className='pessoa' alt={props.nome} />
            <div className="infos_match">
            <span className='nome_match'>{props.nome}</span>
            {props.descricao_pessoa}
            <p></p>
            {props.idade} anos
             <div className="localizacao">
                <img src={marcador} alt="" className="marcador" />
                <span>{props.localizacao}</span>
             </div> 
            </div>
        </div>
       
            <button className="conversar" onClick={setRequisitante}>
                Conversar
            </button>
        
    </div>
  )
}

export default Card_match