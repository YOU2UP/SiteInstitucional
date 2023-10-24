import { ListItemText } from '@mui/material';
import React, { useState } from 'react';
import "./estilo.css"

const TextBoxChat = (props) => {

  var flag = false;
  if (props.idUsuario == sessionStorage.idUsuario) {
    flag = true;
  }

  return (
    <div style={{width:"100%", display: "flex", flexDirection: "row", justifyContent: `${flag ? 'right' : 'left'}`}}>
      <div style={{height: "7%", maxWidth:"fit-content"}}>
        <ListItemText primary={`${props.menssagem}`} className={`${flag ? 'usuario' : 'convidado'}`} secondary={props.horario} />
      </div>
    </div>
  );
};

export default TextBoxChat;