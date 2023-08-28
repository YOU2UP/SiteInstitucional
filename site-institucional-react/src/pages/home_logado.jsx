import React from 'react'
import Menu from '../components/menu/Menu_logado'
import Footer from '../components/footer/footer'
import '../css-images/css/home_logado.css'
import Card_match from '../components/cards/card_match'
import foto from '../css-images/img/meninona.png'

function Home_logado() {
  return (
    <>

    <Menu/>

    
    <div className="containerHome">
    
      
      {/* <Card_match img={foto} nome="Julia Silva " descricao_pessoa='Iniciante, tenho dificuldade com os exercícios' idade='24' localizacao='Academia Salvador - SP'/> */}
    </div>
    <Footer/>
    </>
  )
}

export default Home_logado