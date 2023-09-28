import React from 'react'
import '../../css-images/css/card_agenda.css'
import Aceitar from '../../css-images/img/aceitar.png'
import Negar from '../../css-images/img/negar.png'

function card_agena(props) {
  return (
    <div className="cardAgendado">
        
        
    <div className="containerAgendado">
        <img src={props.img} className='pessoaAgendada' alt={props.nome} />
        <div className="infosAgenda">
        <span className='nomeAgenda'>{props.nome}</span>
        {props.dataTreino} as {props.horaTreino} <br/>
        Local: {props.localTreino}
       
     <div className="botoesAgenda">
     <button className="confirma">
          <img src={Aceitar} alt="Aceitar" className='imgBtnAgenda' />
          </button>
          <button className="nega" >
          <img src={Negar} alt="Negar" className='imgBtnAgenda' />
          </button>
     </div>
        </div>
    </div>
   
    
</div>
  )
}

export default card_agena