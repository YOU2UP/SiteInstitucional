import React, { useState } from 'react';
import Menu from '../components/menu/Menu_logado.jsx';
import '../css-images/css/avaliacao.css';
import Historico from '../components/canvas/historico.jsx';
import CanvaAvaliacao from '../components/canvas/canva_avalia.jsx'


function Avaliacao() {
  const id = sessionStorage.getItem("idUsuario");
  const token = sessionStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
  };

  const [ativoAvaliacao, setAtivoAvaliacao] = useState(false);
  const [ativoHistorico, setAtivoHistorico] = useState(false);

  const [dadosAvaliacao, setDadosAvaliacao] = useState([]);
  const [dadosHistorico, setDadosHistorico] = useState([]);

  const activeAvaliacao = () => {
    setAtivoAvaliacao(true);
    setAtivoHistorico(false);

  };

  const activeHistorico = () => {
    setAtivoAvaliacao(false);
    setAtivoHistorico(true);
  };

 
  let componenteAuxiliar = null;

  if (ativoAvaliacao) {
    componenteAuxiliar = <CanvaAvaliacao dados={dadosAvaliacao} />;
  } else if (ativoHistorico) {
    componenteAuxiliar = <Historico dados={dadosHistorico} />;
  }

  return (
    <>
      <Menu />

      <div className="containerAvaliacao">
        <div className="botoesAvaliacao">
          <button
            className={`btnAvaliacao ${ativoAvaliacao ? 'ativo' : ''}`}
            onClick={activeAvaliacao}
          >
            Avaliações
          </button>

          <button
            className={`btnHistorico ${ativoHistorico ? 'ativo' : ''}`}
            onClick={activeHistorico}
          >
            Histórico
          </button>
        </div>

        <div className="auxiliar">
          {componenteAuxiliar}
        </div>
      </div>
      <div className="espaco">
        
      </div>

    </>
  );
}

export default Avaliacao;
