import React, { useEffect, useState } from 'react'
import Menu from '../components/menu/Menu_logado.jsx'
import Footer from '../components/footer/footer.jsx'
import api from '../api.js';

function Chat() {
  const id = sessionStorage.getItem("id");
    const token = sessionStorage.getItem("token");

    const [treinos, setTreinos] = useState([]);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };

    useEffect(() => {
      setTreinos("oIE");
      console.log(treinos);
    }, [])

  return (
    <div>chat</div>
  )
}

export default Chat