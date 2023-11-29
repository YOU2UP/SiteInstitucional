import React, { useState } from 'react';
import Menu from '../components/menu/Menu_logado.jsx';
import '../css-images/css/config.css';
import Altera from '../components/comp_config/alterar.jsx'
import Meta from '../components/comp_config/meta.jsx'
import Breadcrumb from '../components/Breadcrumb/breadcrumb';

function Config() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const breadcrumbLinks =[
        { label: 'Home', to: '/pagina_inicial' },
        { label: 'Perfil', to: '/perfil' },
        { label: 'Configuração', to: '/configuracao'}
    ];

    const renderComponent = () => {
        if(activeButton === 'config') {
            return <Altera />
        } else if(activeButton === 'meta') {
            return <Meta/>
        } 
        else{
            return null;
        }
    }

    function sair(){
        sessionStorage.clear();
        window.location.href = '/'
    }

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
                    <button className={`btnSair ${activeButton === 'sair' ? 'active' : ''}`} onClick={sair}>
                        Sair
                    </button>
                </div>
                <div className="telaConfig">
                    
                    {renderComponent()}
                    
                </div>
            </div>

            
        </>
    );
}

export default Config;
