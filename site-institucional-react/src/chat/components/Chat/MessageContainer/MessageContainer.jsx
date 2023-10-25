import React from 'react';
import InputBase from '@mui/material/InputBase';
import { useEffect, useState } from "react";
import { query, collection,doc, addDoc, updateDoc, onSnapshot, orderBy, Timestamp} from "firebase/firestore";
import { db } from "../../../firebase";
import TextBoxChat from "../TextBoxChat/TextBoxChat";
import "./estilo.css"
import {
    Fab
  } from "@mui/material";
import Send from "@mui/icons-material/Send";



function    MessageContainer(props) {
    const [messages, setMessages] = useState([]);
    const [mes, setMes] = useState("");
    const [idConversa, setIdConversa] = useState(props.id);
    const idRequisitante = sessionStorage.getItem("idRequisitante");
    const idRequisitado = sessionStorage.getItem("idRequisitado");

    const enviarMensagem = async () => {
        try {
            const docRef = await addDoc(collection(db, `chat/${idConversa}/conversas`), {
                menssagem: mes,
                idRequisitante: idRequisitante,
                idRequisitado: idRequisitado,
                timestamp: Timestamp.now()
            });
            const banco = await updateDoc(doc(db, `chat`,idConversa), {
                ultimaMensagem: mes
            });
            console.log("f");


        } catch (e) {
            console.log(idRequisitante)
            console.error("Error adding document: ", e);
        }
    }

    useEffect(() => {
        const bancoDados = query(
            collection(db, `chat/${idConversa}/conversas`),orderBy("timestamp", "asc")
        );
        const atualiza = onSnapshot(bancoDados, (querySnapshot) => {
            let vetor = [];
            querySnapshot.docs.map((doc) => (
                vetor.push(doc.data())
              ))
              setMessages(vetor);
        });

        return () => atualiza;
    }, []);

    const handleChange = (event) => {
        setMes(event.target.value);
    };


    return (
        <>
            <div className="messages">
                {
                    messages.map((m) => {
                        var horario = m.timestamp.toDate();
                        var hora = ""+horario.getHours();
                        if(hora.length==1){
                            hora = "0"+horario.getHours();
                        }
                        horario = hora+":"+horario.getMinutes();
                        return (
                            <TextBoxChat horario={horario} menssagem={m.menssagem} idUsuario={m.idRequisitado}></TextBoxChat>
                        )
                    })
                }
            </div>
            <div className="inputContainer">
                <InputBase style={{padding:"10px"}}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Insira aqui a sua mensagem"
                    autoFocus={true}
                    multiline
                    rows={2}
                    className="inputField"
                    fullWidth
                    onChange={handleChange}
                    value={mes}
                />
                <Fab onClick={enviarMensagem} style={{ margin: "8px" }} color="rgba(29, 185, 84, 0.25)" aria-label="add">
                    <Send style={{ fontSize: "25px" }} />
                </Fab>
            </div>
        </>

    )
}

export default MessageContainer
