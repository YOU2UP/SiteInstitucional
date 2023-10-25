import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';

function CancelTrainingConfirmationModal(props) {

  const handleOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleCancelTraining = () => {
    // Coloque aqui a lógica para cancelar o treino
    // Por exemplo, pode enviar uma solicitação para o servidor
    // e depois fechar o modal.
    // Depois de cancelar o treino, você pode redirecionar o usuário
    // ou atualizar a interface do usuário conforme necessário.
    // Certifique-se de implementar essa lógica de acordo com sua aplicação.
    props.setOpen(false);
  };

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: 'center' }}>Confirmar Cancelamento</DialogTitle>
        <DialogContent  sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '10vh',
          minWidth: '30vw',
          fontSize: '1.1rem',
        }}>
          Tem certeza de que deseja cancelar o treino?
        </DialogContent>
        <DialogActions sx={{justifyContent: 'center'}}>
          <Button onClick={handleCancelTraining} color="primary">
            Sim
          </Button>
          <Button onClick={handleClose} color="primary">
            Não
          </Button>
        </DialogActions>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          aria-label="fechar"
          sx={{
            position: 'absolute',
            right: 15,
            top: 8,
          }}
        >
          <CancelIcon />
        </IconButton>
      </Dialog>
    </div>
  );
}

export default CancelTrainingConfirmationModal;
