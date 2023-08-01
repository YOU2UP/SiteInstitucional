import React from 'react'
import Menu from '../components/menu/Menu_logado'
import '../css-images/css/home_logado.css'
import Card_match from '../components/cards/card_match'
import foto from '../css-images/img/meninona.png'

function Home_logado() {
  return (
    <>

    <Menu/>

    
    <div className="containerHome">
      
      <Card_match img={foto} nome="Teste" idade='24' localizacao='apenas um teste para ver se funciona'/>
    </div>

    </>
  )
}

export default Home_logado