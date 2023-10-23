import React, { useState } from 'react';
import { Button, Modal, Box, Typography, TextField } from '@mui/material';

const DateTimePickerModal = () => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Abrir Modal</Button>
      <Modal
        open={open}
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
        </Box>
      </Modal>
    </div>
  );
};

export default DateTimePickerModal;