import React, { useState } from 'react'
import marcador from '../../css-images/img/map_marker.png'
import { useNavigate } from 'react-router-dom';
import '../../css-images/css/card_match.css'
import { query, collection, doc, addDoc, updateDoc, onSnapshot, orderBy, Timestamp } from "firebase/firestore";
import { db } from "../../chat/firebase/"

function Card_match(props) {

  const navigate = useNavigate();
  const id = sessionStorage.getItem("id");
  const idMatch = props.idMatch;

  const handleNomeClick = () => {
    navigate(`/perfil_match/${props.idMatch}`);
  };

  const handleFotoClick = () => {
    navigate(`/perfil_match/${props.idMatch}`);
  };


  function atribuicao(id, idMatch,nomeMatch, nome) {
    sessionStorage.setItem("idRequisitante", id);
    sessionStorage.setItem("idRequisitado", idMatch);
    sessionStorage.setItem("nomeRequisitado", nome);
  
    console.log("idRequisitante", sessionStorage.getItem("idRequisitante"));
    console.log("idRequisitado", sessionStorage.getItem("idRequisitado"));
  
    const bancoDados = query(collection(db, `chat`), orderBy("timestamp", "asc"));
    const consulta = onSnapshot(bancoDados, (querySnapshot) => {
      console.log(idMatch);
      console.log(id);
  
      const encontrado = querySnapshot.docs.map((doc) => doc.data());
      console.log(encontrado);
  
      const matchingElement = encontrado.find((elemento) => {
        const match1 = elemento.idRequisitado.toString() === idMatch.toString() &&
          id.toString() === elemento.idRequisitante.toString();
  
        const match2 = elemento.idRequisitado.toString() === id.toString() &&
          elemento.idRequisitante.toString() === idMatch.toString();
  
        return match1 || match2;
      });
  
      if (matchingElement) {
        consulta(); 
        navigate(`/chat`);
      } else {
        criacaoChat(id, idMatch,nomeMatch,nome);
        consulta();
        navigate(`/chat`);
      }
    });
  }
  
  

  const criacaoChat = async (id, idMatch, nomeMatch, nome) => {
    try {
      const docRef = await addDoc(collection(db, `chat/`), {
        idRequisitado: idMatch.toString(),
        idRequisitante: id.toString(),
        nomeRequisitado: nomeMatch,
        nomeRequisitante: nome,
        timestamp: Timestamp.now(),
        ultimaMensagem: ""
      });

    } catch (e) {
      console.error("Error ao enviar o documento: ", e);
    }
  }



  return (
    <div className="card">


      <div className="match">
        <div className='contencaolog'>
          <img src={props.img} className='pessoa txtcard' alt={props.nome} onClick={handleFotoClick} />
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
        <button className="conversar" onClick={() => atribuicao(id, idMatch, props.nome,sessionStorage.nome)}>
          Conversar
        </button>
      </div>
    </div>
  )
}

export default Card_match