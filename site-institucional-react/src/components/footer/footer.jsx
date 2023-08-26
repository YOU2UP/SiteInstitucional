import React from 'react'
import '../../css-images/css/footer_logado.css'
import logo from '../../css-images/img/logo.png'
import Copy from '../../css-images/img/copyright.png'
import face from '../../css-images/img/facebook.png'
import insta from '../../css-images/img/instagram.png'
import twitter from '../../css-images/img/twitter.png'

function Footer() {
  return (
    <>
    <footer className='corpo_footer'>
          <div className="parte_cima">
            <img src={logo} alt="" className='img_footer' />

            <div className="contatos_footer">
              <span className="texto_redes">
                Entre Em Contato:
              </span>

              <span className="contatos">
              you2up@sptech.school

              </span>
              <span className="contatos">
              Rua Haddock Lobo, nº 595

              </span>
            </div>
            <div className="redes_footer">
              <span className="texto_redes">
                Nossas Redes:
              </span>

              <div className="icones_redes">
                <img src={face} alt="" className="icone_footer" />
                <img src={insta} alt="" className="icone_footer" />
                <img src={twitter} alt="" className="icone_footer" />
              </div>
            </div>
          </div>
            <div className="parte_baixo">
              <span className="texto_footer">
                <br/>
                <img src={Copy} alt="" className='copy_footer'/>
                2023 - Todos os direitos reservados YOU2UP - SPTECH
              </span>
        </div>

    </footer>
    </>
  )
}

export default Footer