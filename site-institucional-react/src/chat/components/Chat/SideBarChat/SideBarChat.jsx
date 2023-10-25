import React, { useEffect, useState } from 'react';
import Conversa from '../Conversa/Conversa';
import "./estilo.css"
import { query, collection, onSnapshot, where, or, orderBy } from "firebase/firestore";
import { db } from "../../../firebase";

const SideBarChat = (props) => {
  const [listaConversa, setListaConversa] = useState([])
  useEffect(() => {

    const bancoDados = query(
      collection(db, "chats")
    );
    const atualiza = onSnapshot(bancoDados, (querySnapshot) => {
      console.log(querySnapshot.docs.map((doc) => ({
        idRequisitante: doc.data().idRequisitante,
        idRequisitado: doc.data().idRequisitado,
        nomeUsuario: sessionStorage.getItem("nomeRequisitado"),
        timestamp: doc.data().timestamp,
        ultima: doc.data().ultimaMensagem,
        id: doc.id
      })))

      setListaConversa(

      

        querySnapshot.docs.map((doc) => ({
          idRequisitante: doc.data().idRequisitante,
          idRequisitado: doc.data().idRequisitado,
          nomeUsuario: sessionStorage.getItem("nomeRequisitado"),
          timestamp: doc.data().timestamp,
          ultima: doc.data().ultimaMensagem,
          id: doc.id
        })))
        console.log(sessionStorage.idRequisitado);
        console.log(sessionStorage.idRequisitante);
        console.log(sessionStorage.nomeRequisitado);
    })



    return () => atualiza();
  }, []);

  const lastMenssage = (elemento) =>{
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