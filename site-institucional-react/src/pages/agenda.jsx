import React from 'react'
import Menu from '../components/menu/Menu_logado.jsx'
import Footer from '../components/footer/footer.jsx'
import '../css-images/css/agenda.css'


function Agenda() {
  return (
    <>
    <Menu/>
    <div className="containerAgenda">
        <span className="tituloAgenda">
        Esses são os treinos agendados com você
        </span>
    </div>
    <Footer/>
    </>
  )
}

export default Agenda