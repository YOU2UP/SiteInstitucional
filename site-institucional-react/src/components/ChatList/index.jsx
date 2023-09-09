import React, { useEffect } from "react";
import db from "../../services/firebase";
import ChatItem from "../ChatItem";
import {
  query,
  collection,
  where,
  onSnapshot,
  or,
  orderBy,
} from "firebase/firestore";

export default function ChatList(props) {
  const [chats, setChats] = React.useState([]);
  const [carregouConversas, setCarregouConversas] = React.useState(false);

  useEffect(() => {
    const q = query(
      collection(db, "chats"),
      or(
        where("idProfessor", "==", Number(sessionStorage.idUsuario)),
        where("idAluno", "==", Number(sessionStorage.idUsuario))
      ),
      orderBy("timestamp", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setChats("");
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: {
            idAluno: doc.data().idAluno,
            idProfessor: doc.data().idProfessor,
            nome:
              sessionStorage.tipo === "aluno"
                ? doc.data().nomeProfessor
                : doc.data().nomeAluno,
            src:
              sessionStorage.tipo === "aluno"
                ? doc.data().srcProfessor
                : doc.data().srcAluno,
            ultimaMensagem: doc.data().ultimaMensagem,
            lida: doc.data().lida,
            timestamp: doc.data().timestamp,
            bloqueado: doc.data().bloqueado
          },
        }))
      );
    });

    setCarregouConversas(true);
    return () => unsubscribe();
  }, []);
  return (
    <>
      
      {chats.map((chat) => (
        <ChatItem
          id={chat.id}
          key={chat.id}
          nome={chat.data.nome}
          ultimaMensagem={chat.data.ultimaMensagem}
          timestamp={chat.data.timestamp}
          lida={chat.data.lida}
          src={chat.data.src}
          onClick={() => {
            props.onChatClick(chat);
          }}
        />
      ))}
      
    </>
  );
}
