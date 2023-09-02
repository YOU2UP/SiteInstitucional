import React from 'react'

function card_agena(props) {
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
            Avaliar
            <img src={Estrela} className='estrela' alt="" />
        </button>
    
</div>
  )
}

export default card_agena