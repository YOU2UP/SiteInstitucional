import React, { useState } from 'react';
import Menu from '../components/menu/Menu_logado.jsx';
import '../css-images/css/config.css';
import Altera from '../components/comp_config/alterar.jsx';

function Config() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <>
            <Menu />

            <div className="containerConfig">
                <div className="botoesConfig">
                    <button className={`btnAltera ${activeButton === 'config' ? 'active' : ''}`} onClick={() => handleButtonClick('config')}>
                        Configurações de Conta
                    </button>
                    <button className={`btnAltera ${activeButton === 'meta' ? 'active' : ''}`} onClick={() => handleButtonClick('meta')}>
                        Definir Meta
                    </button>
                    <button className={`btnSair ${activeButton === 'sair' ? 'active' : ''}`}>
                        Sair
                    </button>
                </div>
                <div className="telaConfig">
                    <Altera/>
                </div>
            </div>

            
        </>
    );
}

export default Config;
