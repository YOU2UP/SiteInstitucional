import React from 'react'
import Estrela from '../../css-images/img/avalia.png'
import { useNavigate } from 'react-router-dom';
import '../../css-images/css/card_avaliacao.css'

function CardAvaliacao(props) {
  const navigate = useNavigate(); 
  
  const handleNomeClick = () => {
    navigate(`/perfil_match/${props.id}`);
  };

  const handleFotoClick = () => {
    navigate(`/perfil_match/${props.id}`);
  };


  return (
    <div className="card">
        
        
    <div className="avaliacao">
        <img src={props.img} className='pessoaAvaliar' alt={props.nome} onClick={handleFotoClick}/>
        <div className="infosAvalia">
        <span className='nomeAvalia' onClick={handleNomeClick}>{props.nome}</span>
        {props.descricao_pessoa}
       
        </div>
    </div>
        <div className='seguraBtnAvaliar'>
        <button className="avaliar">
            {props.nota}
            <img src={Estrela} className='estrela' alt="" />
        </button>
        </div>
    
</div>
  )
}

export default CardAvaliacao