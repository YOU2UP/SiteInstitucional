import React from 'react'
import Estrela from '../../css-images/img/avalia.png'
import '../../css-images/css/card_avaliacao.css'

function CardAvaliacao(props) {
  return (
    <div className="card">
        
        
    <div className="avaliacao">
        <img src={props.img} className='pessoaAvaliar' alt={props.nome} />
        <div className="infosAvalia">
        <span className='nomeAvalia'>{props.nome}</span>
        {props.descricao_pessoa}
       
        </div>
    </div>
   
        <button className="avaliar">
            {props.nota}
            <img src={Estrela} className='estrela' alt="" />
        </button>
    
</div>
  )
}

export default CardAvaliacao