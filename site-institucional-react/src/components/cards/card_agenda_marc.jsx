import React from 'react'
import '../../css-images/css/card_agenda_marc.css'
import Modal from '../modal/modal_cancelar.jsx'

function Card_agenda_marc(props) {

  const [open, setOpen] = React.useState(false);
  return (
    <div className="cardAgendado">
        
        
    <div className="containerAgendado">
        <img src={props.img} className='pessoaAgendada' alt={props.nome} />
        <div className="infosAgenda">
        <span className='nomeAgenda'>{props.nome}</span>
        {props.dataTreino} as {props.horaTreino} <br/>
        Local: {props.localTreino}
       
     <div className="botoesAgenda">
        <button className="cancelar" onClick={() => setOpen(true)}>
            Cancelar
        </button>
     </div>
        </div>
    </div>
    <Modal open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Card_agenda_marc