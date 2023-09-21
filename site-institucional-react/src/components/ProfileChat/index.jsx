import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  ListItem,
  Avatar,
  Typography,
  ListItemIcon,
} from "@mui/material";
import "./style.css";

export default function ProfileChat() {
  return (
    <>
      <ListItem className="chat_profile">
        <ListItem button className="voltar" style={{
          display: "flex",
          justifyContent: "left",
          width: "fit-content",
          height: "fit-content",
        }}>
          <ArrowBackIcon style={{
            width: "35px",
            height: "35px",
            padding: "5px",
            borderRadius: "100%",
            background: "#363636",
          }} />
        </ListItem>
        <ListItemIcon>
          <Avatar src={sessionStorage.src} />
        </ListItemIcon>
        <Typography variant="h6" component="div">
          {sessionStorage.nomeUsuario}
        </Typography>
      </ListItem>
    </>
  );
}
