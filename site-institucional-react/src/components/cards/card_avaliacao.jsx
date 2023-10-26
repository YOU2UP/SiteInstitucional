import React from 'react'
import Estrela from '../../css-images/img/avalia.png'
import { useNavigate } from 'react-router-dom';
import '../../css-images/css/card_avaliacao.css'
import Modal from '../modal/modal_avaliacao.jsx'

function CardAvaliacao(props) {
  const navigate = useNavigate(); 
  
  const handleNomeClick = () => {
    navigate(`/perfil_match/${props.id}`); 
  };

  const handleFotoClick = () => {
    navigate(`/perfil_match/${props.id}`);
  };

  const [open, setOpen] = React.useState(false);



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
        <button className="avaliar" onClick={() => setOpen(true)}>
            {props.nota}
            <img src={Estrela} className='estrela' alt="" />
        </button>
        </div>
    <Modal open={open} setOpen={setOpen} id={props.id} idTreino={props.idTreino}/>  
</div>
  )
}

export default CardAvaliacao