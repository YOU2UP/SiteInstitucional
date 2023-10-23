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

function AvaliacaoModal() {
  const [open, setOpen] = useState(false);
  const [avaliacao, setAvaliacao] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAvaliar = () => {
    // Aqui você pode enviar a avaliação para o servidor ou fazer o que for necessário com a avaliação.
    console.log('Avaliação:', avaliacao);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Avaliar
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Avaliação</DialogTitle>
        <DialogContent>
          <Typography variant="body1" align="center">
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