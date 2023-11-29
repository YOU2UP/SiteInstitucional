import React, { useState } from "react";
import "../../css-images/css/menu_logado_adm.css";
import Icon from "../../css-images/img/ico_adm.png";
import Exporta from "../../css-images/img/exportar.png";
import Txt from "../../css-images/img/txt.png";
import Recarregar from '../../css-images/img/recarregar.png'
import Sair from '../../css-images/img/sair.png'

function MenuLogadoAdm() {
  const [mostrarLegendaCsv, setMostrarLegendaCsv] = useState(false);
  const [mostrarLegendaTxt, setMostrarLegendaTxt] = useState(false);
  const [mostrarLegendaReload, setMostrarLegendaReload] = useState(false);
  const [mostrarLegendaSair, setMostrarLegendaSair] = useState(false);

  const handleMouseOverCsv = () => {
    setMostrarLegendaCsv(true);
  };

  const handleMouseOutCsv = () => {
    setMostrarLegendaCsv(false);
  };

  const handleMouseOverTxt = () => {
    setMostrarLegendaTxt(true);
  };

  const handleMouseOutTxt = () => {
    setMostrarLegendaTxt(false);
  };

  const handleMouseOverReload = () => {
    setMostrarLegendaReload(true);
  };

  const handleMouseOutReload = () => {
    setMostrarLegendaReload(false);
  };

    const handleMouseOverSair = () => {
    setMostrarLegendaSair(true);
    };

    const handleMouseOutSair = () => {
    setMostrarLegendaSair(false);
    };

    function Acao(Resp){
        if(Resp === 'csv'){
            alert('Exportando dados em CSV')
        }else if(Resp === 'txt'){
            alert('Exportando dados em TXT')
        }else if(Resp === 'reload'){
            alert('Atualizando dados')
            window.location.reload()
        }else if(Resp === 'sair'){
            alert('Saindo da conta')
            sessionStorage.clear();
            window.location.href = '/'
        }
    }


  return (
    <>
      <div className="navlogadoAdm">
        <div className="logoAdm">
          <img src={Icon} alt="" className="icoAdm" />
        </div>

        <div className="seguraFunc">
          <button
            className="exportaAdm"
            onMouseOver={handleMouseOverCsv}
            onMouseOut={handleMouseOutCsv}
            onClick={() => Acao('csv')}
          >
            <img src={Exporta} alt="" className="imgBtnAdm" />
            {mostrarLegendaCsv && (
              <span style={{ color: "#FFFFFF" }}>Exportar CSV</span>
            )}
          </button>

          <button
            className="exportaAdm"
            onMouseOver={handleMouseOverTxt}
            onMouseOut={handleMouseOutTxt}
            onClick={() => Acao('txt')}
          >
            <img src={Txt} alt="" className="imgBtnAdm" />
            {mostrarLegendaTxt && (
              <span style={{ color: "#FFFFFF" }}>Exportar TXT</span>
            )}
          </button>

          <button
            className="exportaAdm"
            onMouseOver={handleMouseOverReload}
            onMouseOut={handleMouseOutReload}
            onClick={() => Acao('reload')}
          >
            <img src={Recarregar} alt="" className="imgBtnAdm" />
            {mostrarLegendaReload && (
              <span style={{ color: "#FFFFFF" }}>atualizar Dados</span>
            )}
          </button>
        </div>
        <div className="sairAdm">
        <button
            className="exportaAdm"
            onMouseOver={handleMouseOverSair}
            onMouseOut={handleMouseOutSair}
            onClick={() => Acao('sair')}
          >
            <img src={Sair} alt="" className="imgBtnAdm" style={{width: '40px', height: '40px'}} />
            {mostrarLegendaSair && (
              <span style={{ color: "#FFFFFF" }}>Sair da Conta</span>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default MenuLogadoAdm;
