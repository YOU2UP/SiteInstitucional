import React, { useState } from 'react'
import marcador from '../../css-images/img/map_marker.png'
import { useNavigate } from 'react-router-dom'; 
import '../../css-images/css/card_match.css'

function Card_match(props) {

  const [requisitante, setRequisitante] = useState(0);
  const navigate = useNavigate(); 

  const handleNomeClick = () => {
    navigate(`/perfil_match/${props.id}`);
  };

  const handleFotoClick = () => {
    navigate(`/perfil_match/${props.id}`);
  };

  sessionStorage.setItem("requisitante", requisitante);
  
  

  return (
    <div className="card">
        
        
        <div className="match">
          <div className='contencaolog'>
            <img src={props.img} className='pessoa txtcard' alt={props.nome} onClick={handleFotoClick}/>
            <div className="infos_match">
            <span className='nome_match txtcard' onClick={handleNomeClick}>{props.nome}</span>
            {props.descricao_pessoa}
            <p className='txtcard'>
            {props.idade} anos
            </p>
             <div className="localizacao txtcard" >
                <img src={marcador} alt="" className="marcador" />
                <span>{props.localizacao} - {props.uf}</span>
             </div> 
             </div>
            </div>
            <button className="conversar" onClick={setRequisitante}>
                Conversar
            </button>
        </div>
       
          
        
    </div>
  )
}

export default Card_match