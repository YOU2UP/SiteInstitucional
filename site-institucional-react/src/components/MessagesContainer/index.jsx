import React, { useRef, useEffect } from "react";
import CaixaMensagem from "../CaixaMensagem/index.jsx"
import DivisorDate from "../DivisorDate/index.jsx";
import db from "../../services/firebase.js";
import "./style.css";
import { Box } from "@mui/material";
import {
  fromDateToFormatDate,
  fromTimestampToFormatDate,
} from "../../services/utils.js";
import { CircularProgress } from "@mui/material";

export default function MessagesContainer(props) {
  const [mensagens, setMensagens] = React.useState([]);
  const [carregouMensagens, setCarregouMensagens] = React.useState(false);
  var contador = 0;
  var ultimaData = "";
  const refDiv = useRef(null);

  useEffect(() => {
    setCarregouMensagens(false);
    const unsubscribe = db
      .doc(`chats/${props.id}`)
      .collection("mensagens")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMensagens([]);
        snapshot.docs.map((doc) => {
          setMensagens((mensagens) => [
            ...mensagens,
            {
              id: doc.id,
              idEnviou: doc.data().idEnviou,
              texto: doc.data().texto,
              timestamp: doc.data().timestamp,
              lida: doc.data().lida,
            },
          ]);
        });
        setCarregouMensagens(true);
      });

    return () => unsubscribe();
  }, [props.id]);

  useEffect(() => {
    if (refDiv.current) {
      refDiv.current.scrollTop = refDiv.current.scrollHeight;
    }
  }, [mensagens]);

  if (carregouMensagens) {
    return (
      <Box ref={refDiv} className="messageBoxContainer">
        {mensagens.map((mensagem) => {
          if (!mensagem.lida) {
            db.doc(`chats/${props.id}`)
              .collection("mensagens")
              .doc(mensagem.id)
              .update({
                lida: true,
              });
          }

          contador++;

          if (
            contador === 1 ||
            ultimaData !== fromTimestampToFormatDate(mensagem.timestamp)
          ) {
            ultimaData = fromTimestampToFormatDate(mensagem.timestamp);
            var dataExibir = "";
            if (
              fromTimestampToFormatDate(mensagem.timestamp) ===
              fromDateToFormatDate(new Date())
            ) {
              dataExibir = "Hoje";
            } else if (
              fromTimestampToFormatDate(mensagem.timestamp) ===
              fromDateToFormatDate(
                new Date(new Date().setDate(new Date().getDate() - 1))
              )
            ) {
              dataExibir = "Ontem";
            } else {
              dataExibir = fromTimestampToFormatDate(mensagem.timestamp);
            }

            return (
              <>
                <DivisorDate data={dataExibir} />
                <CaixaMensagem
                  key={mensagem.id}
                  id={mensagem.id}
                  idEnviou={mensagem.idEnviou}
                  texto={mensagem.texto}
                  timestamp={mensagem.timestamp}
                />
              </>
            );
          }

          return (
            <CaixaMensagem
              key={mensagem.id}
              id={mensagem.id}
              idEnviou={mensagem.idEnviou}
              texto={mensagem.texto}
              timestamp={mensagem.timestamp}
              onLoad={() => console.log("aaa")}
            />
          );
        })}
      </Box>
    );
  } else {
    return (
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress style={{ color: "#6DDB94" }} />
      </Box>
    );
  }
}
