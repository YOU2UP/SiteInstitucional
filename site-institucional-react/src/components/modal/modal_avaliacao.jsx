import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Rating,
  Typography,
  Box,
} from '@mui/material';

import api from '../../api.js'
import { set } from 'date-fns';

function AvaliacaoModal(props) {
  const [avaliacao, setAvaliacao] = useState(0);
  const id = sessionStorage.getItem('id');
  const token = sessionStorage.getItem('token');

  

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleAvaliar = () => {
    // console.log('Avaliação:', avaliacao);
    // console.log(token)
    
    const headers = {
        'Authorization': `Bearer ${token}`,
    };

    const data = {
        nota: avaliacao,
        avaliador: {
          idUsuario: id,
        },

        avaliado:{
          idUsuario: props.id,
        },

        treino:{
            idTreino: props.idTreino,
        }

      };

    // console.log(config.body);

    api.post('/avaliacoes', data, { headers }).then((response) => {
      console.log(response);
    }
    ).catch((error) => {
      console.log(error);
    }
    );

    props.setOpen(false);
    window.location.reload();
  };

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Avaliação</DialogTitle>
        <DialogContent>
          <Typography variant="body3" align="center">
            Selecione a sua avaliação:
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Rating
              name="avaliacao"
              value={avaliacao}
              precision={0.5}
              onChange={(event, newValue) => {
                setAvaliacao(newValue);
              }}
              size="large"
            />
          </Box>
          <Box display="flex" justifyContent="space-around" marginTop={2}>
            <Button onClick={handleAvaliar} color="primary" variant="text">
              Avaliar
            </Button>
            <Button onClick={handleClose} color="primary" variant="text">
              Cancelar
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AvaliacaoModal;