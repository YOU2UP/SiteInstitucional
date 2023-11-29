import React from 'react';
import { Dialog, DialogContent, CircularProgress, Typography } from '@mui/material';
import loadingGif from '../../css-images/img/load.gif'; // Substitua pelo caminho real do seu GIF

const LoadingModal = (props) => {
  // Adiciona uma função para fechar o modal
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Dialog open={props.open} maxWidth="xs" fullWidth onClose={handleClose}>
      <DialogContent>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={loadingGif} alt="loading" style={{ width: '50px', height: '50px' }} />
          <Typography variant="subtitle1" style={{ marginLeft: '16px' }}>
            Carregando...
          </Typography>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoadingModal;