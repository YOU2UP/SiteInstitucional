import React, {useState} from 'react'
import Menu from '../components/menu/Menu_logado.jsx'
import Footer from '../components/footer/footer.jsx'
import Card from '../components/cards/card_avaliacao.jsx'
import Elaine from '../css-images/img/elaine.png'
import '../css-images/css/avaliacao.css'

function Avaliacao() {

  const [ativoAvaliacao, setAtivoAvaliacao] = useState(false);
  const [ativoHistorico, setAtivoHistorico] = useState(false);

  const activeAvaliacao = () => {
    setAtivoAvaliacao(true);
    setAtivoHistorico(false);


  };

  const activeHistorico = () => {
    setAtivoAvaliacao(false);
    setAtivoHistorico(true);
  };

  return (
    <>
        <Menu/>

        <div className="containerAvaliacao"> 

            <div className="botoesAvaliacao">
                <button className={`btnAvaliacao ${ativoAvaliacao ? 'ativo' : ''}`} onClick={activeAvaliacao}>
                    Avaliações
                </button>

                <button className={`btnHistorico ${ativoHistorico ? 'ativo' : ''}`} onClick={activeHistorico}>
                  Histórico
                </button>
            </div>
            <div className="cardsAvaliacao">
              <div className="agrupaCards">

                <Card img={Elaine} nome='Elaine Souza' descricao_pessoa='Nunca treinei antes por medo de ir sozinha' />
              </div>

            </div>
        </div>

        <Footer/>

    
    </>
  )
}

export default Avaliacao
