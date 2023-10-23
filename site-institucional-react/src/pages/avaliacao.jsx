import React, { useState } from 'react';
import Menu from '../components/menu/Menu_logado.jsx';
import '../css-images/css/avaliacao.css';
import Historico from '../components/canvas/historico.jsx';
import CanvaAvaliacao from '../components/canvas/canva_avalia.jsx'
import Breadcrumb from '../components/Breadcrumb/breadcrumb';

function Avaliacao() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const breadcrumbLinks = [
        { label: 'Home', to: '/pagina_inicial' },
        { label: 'Perfil', to: '/perfil' },
        { label: 'Avaliação', to: '/avaliacao' }
    ];

    const renderComponent = () => {
        if (activeButton === 'avaliacao') {
            return <CanvaAvaliacao />;
        } else if (activeButton === 'historico') {
            return <Historico />;
        }
        return null;
    }

    return (
        <>
            <Menu />

            <div className="containerAvaliacao">
                <div className="botoesAvaliacao">
                    <button className={`btnAvaliacao ${activeButton === 'avaliacao' ? 'ativo' : ''}`} onClick={() => handleButtonClick('avaliacao')}>
                        Avaliações
                    </button>
                    <button className={`btnHistorico ${activeButton === 'historico' ? 'ativo' : ''}`} onClick={() => handleButtonClick('historico')}>
                        Histórico
                    </button>
                </div>

                <div className="auxiliar">
                    {renderComponent()}
                </div>
            </div>
        </>
    );
}

export default Avaliacao;
