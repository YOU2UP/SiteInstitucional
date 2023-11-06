import React, { useEffect, useState } from 'react';
import Conversa from '../Conversa/Conversa';
import "./estilo.css"
import { query, collection, onSnapshot, where, or, orderBy } from "firebase/firestore";
import { db } from "../../../firebase";

const SideBarChat = (props) => {
  const [listaConversa, setListaConversa] = useState([]);

  useEffect(() => {

    const bancoDados = query(
      collection(db, "chat"), or(
        where("idRequisitado", "==", sessionStorage.id),
        where("idRequisitante", "==", sessionStorage.id)
      ));

    const atualiza = onSnapshot(bancoDados, (querySnapshot) => {
      var nome;
      const chatData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        if(data.idRequisitante == sessionStorage.id){
          nome = doc.data().nomeRequisitado;
        }else if(data.idRequisitado == sessionStorage.id){
          nome = doc.data().nomeRequisitante;

        }

        return {
          idRequisitante: data.idRequisitante,
          idRequisitado: data.idRequisitado,
          nomeUsuario: nome,
          timestamp: data.timestamp,
          ultima: data.ultimaMensagem,
          id: doc.id,
        };
      });

      setListaConversa(chatData);
    });

    return () => atualiza();
  }, []);

  const lastMenssage = (elemento) => {
    const aux = elemento + "";
    const result = aux.length > 18 ? aux.substring(0, 15) + "..." : aux;
    return result;
  }

  return (
    <div className="sidebar">
      {listaConversa &&
        listaConversa.map((element) => (    
          <Conversa onClick={()=>{
            props.func(element.id);
            props.onClick()
          }}nome={element.nomeUsuario} utlimaMensagem={lastMenssage(element.ultima)}  id={element.id} key={element.id} />
        ))
      }
    </div>
  );
}

export default SideBarChat;
