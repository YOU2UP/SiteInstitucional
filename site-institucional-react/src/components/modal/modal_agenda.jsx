import React, { useState } from 'react';
import { Button, Modal, Box, Typography, TextField } from '@mui/material';
import api from '../../api'

const DateTimePickerModal = (props) => {
  
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const token = sessionStorage.getItem("token")
  const id = sessionStorage.getItem("id")

  const handleOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  function createLocalDateTime(dateString, timeString) {
    const isoDateTime = `${dateString}T${timeString}:00`;
    const localDateTime = new Date(isoDateTime).toISOString();
    return localDateTime;
  }

  const handleMarcar = () => {
      const localDateTime = createLocalDateTime(selectedDate, selectedTime);
      console.log("teste", localDateTime);

      const headers = {
        'Authorization': `Bearer ${token}`,
      };

      const data ={
        "periodo":"noturno",
        "inicioTreino": localDateTime,
        "usuarios": [
          {
              "idUsuario": id,
          },
          {
              "idUsuario": props.idUsu
          }

        ],
      }

      api.post(`/treinos`, data, { headers }).then((response) => {

      }).catch((error) => {
        console.log(error)
      })

      props.setOpen(false)
  }

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="datetime-modal-title"
        aria-describedby="datetime-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography id="datetime-modal-title" variant="h6" component="h2">
            Selecione Data e Hora Do Treino
          </Typography>
          <TextField
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            fullWidth
          />
          <TextField
            type="time"
            value={selectedTime}
            onChange={handleTimeChange}
            fullWidth
          />
          <Button onClick={handleClose}>Fechar</Button>
          <Button onClick={handleMarcar}>Marcar</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default DateTimePickerModal;