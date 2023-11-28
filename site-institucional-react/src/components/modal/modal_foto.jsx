import React, { useState } from 'react';
import { Button, Modal, Box, Input, Typography } from '@mui/material';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../../chat/firebase/index";
import { v4 } from "uuid";
import api from '../../api'
import { set } from 'date-fns';


const Modal_foto = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const id = sessionStorage.getItem('id');
  const token = sessionStorage.getItem('token');

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

    console.log(selectedFile)
    // console.log("img upload", imageUpload)
   
    const foto = {
      "url":"",
      "usuario":{
        "idUsuario": id
      }
    }


    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      },
    };

   

    const imagesListRef = ref(storage, "images/");

    if (selectedFile== null) return;
    const imageRef = ref(storage, `images/${selectedFile.name + v4()}`);
    console.log(imageRef)
    uploadBytes(imageRef, selectedFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        alert(url)
        console.log(url)
        foto.url = url;
        api.post("/fotos", foto, config)
      });
    });
  


    // Fechar o modal após o upload
    props.setOpen(false);
  };

  return (
    <Modal open={props.open} 
    onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          height: 200,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center'
      
        }}
      >
        <Typography variant="h6" component="div">
          Selecione uma foto
        </Typography>
        <Input type="file" onChange={handleFileChange} />
        <Box>
        <Button variant="contained" onClick={handleUpload} sx={{ backgroundColor: '#FF9200'}}>
          Enviar Foto
        </Button>
        <Button variant='contained' onClick={handleClose} sx={{marginLeft: '20px', backgroundColor: '#FF9200'}}>
          fechar
        </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default Modal_foto;