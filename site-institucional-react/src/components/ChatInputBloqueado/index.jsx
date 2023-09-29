import React from 'react'
import "./style.css"
import { Box } from "@mui/material";

function ChatInputBloqueado(props) {
  return (
    <Box className="background-bloqueado">
      <Box className="texto-bloqueado">Sua conversa com {props.nome} está bloqueada por motivo de denúncia. Por favor, caso você entenda que algo está errado, entre em contato com o nosso suporte.</Box>
    </Box>
  )
}

export default ChatInputBloqueado
