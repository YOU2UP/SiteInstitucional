import React from "react";
import {
  Divider,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Avatar,
  List,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";
import "./style.css";
import { denunciarUsuario } from "../../services/utils";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function ChatHeader(props) {
  const [open, setOpen] = React.useState(props.abreModal);
  const [denuncia, setDenuncia] = React.useState("");
  const [outro, setOutro] = React.useState("");
  const [ehOutro, setEhOutro] = React.useState(false);
  const [erro, setErro] = React.useState(false);

  const handleChange = (event) => {
    if (event.target.value === 3) {
      setEhOutro(true);
    }
    if (event.target.value !== null) {
      setErro(false);
    }
    setDenuncia(event.target.value);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setDenuncia("");
    setOutro("");
    setEhOutro(false);
  };

  const denunciar = () => {

   
    if (ehOutro) {
     
      if (outro === "") {
        setErro(true);
        return;
      }
      setErro(false);
    } else if (denuncia === "") {
      setErro(true);
      return;
    }
    var objetoDenuncia = {
      motivo: outro? outro: denuncia,
      idDenunciante: Number(sessionStorage.idUsuario),
      idDenunciado: props.idUsuarioConversa,
      idConversa: props.idConversa
    }
    denunciarUsuario(objetoDenuncia)
    handleClose();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Gostaria de denunciar {props.nome}?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Qual o motivo da denúncia?
          </DialogContentText>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Motivo da denúncia
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={denuncia}
              label="Motivo da denúncia"
              onChange={handleChange}
              error={erro}
            >
              <MenuItem value={"Bullying e assédio"}>Bullying e assédio</MenuItem>
              <MenuItem value={"Palavras ofensivas"}>Palavras ofensivas</MenuItem>
              <MenuItem value={"Informações incorretas prejudiciais"}>Informações incorretas prejudiciais</MenuItem>
              <MenuItem value={3}>Outro</MenuItem>
            </Select>
            {ehOutro ? (
              <TextField
                id="outlined-basic"
                label="Outro motivo"
                variant="outlined"
                value={outro}
                error={erro}
                helperText={erro ? "Digite o motivo da denúncia" : ""}
                onChange={(e) => setOutro(e.target.value)}
              />
            ) : (
              <></>
            )}
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Não</Button>
          <Button onClick={denunciar} autoFocus>
            Sim, denunciar
          </Button>
        </DialogActions>
      </Dialog>

      <Grid item xs={3} style={{ borderRight: "500" }}>
        <List className="chat_header">
          <ListItem key={props.nome}>
            <ListItemIcon>
              <Avatar alt={props.nome} src={props.src} />
            </ListItemIcon>
            <ListItemText primary={props.nome}></ListItemText>
          </ListItem>
          <ListItem
            key={0}
            style={{ width: "min-content", marginRight: "10px" }}
            button
            onClick={handleOpen}
          >
            <SmsFailedIcon style={{fontSize: "40px"}}/>
          </ListItem>
        </List>
        <Divider />
      </Grid>
    </>
  );
}
