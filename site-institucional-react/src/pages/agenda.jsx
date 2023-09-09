import React from 'react'
import Menu from '../components/menu/Menu_logado.jsx'
import Footer from '../components/footer/footer.jsx'
import Card from '../components/cards/card_agenda.jsx'
import '../css-images/css/agenda.css'
import CardMarcado from '../components/cards/card_agenda_marc.jsx'
import Julia from '../css-images/img/meninona.png'


function Agenda() {
  return (
    <>
    <Menu/>
    <div className="containerAgenda">
        <span className="tituloAgenda">
        Esses são os treinos agendados com você
        </span>
        <div className="seguraCard">
          <div className="duplaCard">
            <Card img={Julia} nome='Julia Silva' dataTreino='Data: 23/04/2023' horaTreino='14:00' localTreino='Academia Salvador'></Card>
            <CardMarcado img={Julia} nome='Julia Silva' dataTreino='Data: 23/04/2023' horaTreino='14:00' localTreino='Academia Salvador'></CardMarcado>
          </div>
          <div className="duplaCard">
            <Card img={Julia} nome='Julia Silva' dataTreino='Data: 23/04/2023' horaTreino='14:00' localTreino='Academia Salvador'></Card>
            <CardMarcado img={Julia} nome='Julia Silva' dataTreino='Data: 23/04/2023' horaTreino='14:00' localTreino='Academia Salvador'></CardMarcado>
          </div>
          <div className="duplaCard">
            <Card img={Julia} nome='Julia Silva' dataTreino='Data: 23/04/2023' horaTreino='14:00' localTreino='Academia Salvador'></Card>
            <CardMarcado img={Julia} nome='Julia Silva' dataTreino='Data: 23/04/2023' horaTreino='14:00' localTreino='Academia Salvador'></CardMarcado>
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Agenda