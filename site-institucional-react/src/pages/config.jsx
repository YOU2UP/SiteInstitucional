import React from 'react'
import Menu from '../components/menu/Menu_logado.jsx';
import Footer from '../components/footer/footer.jsx';
import '../css-images/css/config.css';

function Config() {
  return (
        <>


        <Menu/>

        <div className="containerConfig">
            <div className="botoesConfig">
                <button className="btnAltera">
                Configurações de Conta
                </button>
                <button className="btnAltera">
                    Definir Meta
                </button>
                <button className="btnSair">
                    Sair
                </button>

            </div>
            <div className="telaConfig">
                
            </div>
        </div>

        </>
      
  )
}

export default Config
