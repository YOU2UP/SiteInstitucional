import React from 'react'
import Menu from '../components/menu/Menu_logado.jsx'
import Footer from '../components/footer/footer.jsx'
import '../css-images/css/avaliacao.css'

function Avaliacao() {
  return (
    <>
        <Menu/>

        <div className="containerAvaliacao">

            <div className="botoesAvaliacao">
                <button>
                    Avaliações
                </button>
            </div>
            <div className="cardsAvaliacao"></div>
        </div>
        <Footer/>

    
    </>
  )
}

export default Avaliacao
