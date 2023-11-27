import React, { useState } from 'react';
import { Button, Modal, Box, Input, Typography } from '@mui/material';

const Modal_foto = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Lógica para fazer upload do arquivo
    // Aqui você pode implementar a lógica para enviar a foto para o servidor
    // e realizar qualquer outra manipulação necessária.
    console.log('Arquivo selecionado:', selectedFile);

    // Fechar o modal após o upload
    props.setOpen(false);
  };

  return (
    <Modal open={props.Open} 
    onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="div">
          Selecione uma foto
        </Typography>
        <Input type="file" onChange={handleFileChange} />
        <Button variant="contained" onClick={handleUpload}>
          Enviar Foto
        </Button>
      </Box>
    </Modal>
  );
};

export default Modal_foto;