import React, {useState} from 'react'
import '../../css-images/css/card_agenda.css'
import Aceitar from '../../css-images/img/aceitar.png'
import Negar from '../../css-images/img/negar.png'
import api from '../../api'

function Card_agenda(props) {

  const token = sessionStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
  };

  function handleAceitar(){
      const id = props.id;

      api.get(`/treinos/realizar/${id}`, config).then((response) => { 
        console.log(response.data)
      }).catch((error) => {
        console.log("Erro: ", error)
      })

      window.location.reload();
  }


  
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
          <img src={Aceitar} alt="Aceitar" className='imgBtnAgenda' onClick={() => handleAceitar()}/>
          </button>
          <button className="nega" >
          <img src={Negar} alt="Negar" className='imgBtnAgenda'/>
          </button>
     </div>
        </div>
    </div>
   
</div>
  )
}

export default Card_agenda