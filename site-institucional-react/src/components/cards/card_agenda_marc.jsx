import React from 'react'
import '../../css-images/css/card_agenda_marc.css'

function Card_agenda_marc(props) {
  return (
    <div className="cardAgendado">
        
        
    <div className="containerAgendado">
        <img src={props.img} className='pessoaAgendada' alt={props.nome} />
        <div className="infosAgenda">
        <span className='nomeAgenda'>{props.nome}</span>
        {props.dataTreino} as {props.horaTreino} <br/>
        Local: {props.localTreino}
       
     <div className="botoesAgenda">
        <button className="cancelar">
            Cancelar
        </button>
     </div>
        </div>
    </div>
    </div>
  )
}

export default Card_agenda_marc