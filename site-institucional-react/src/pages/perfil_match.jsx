import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css-images/css/perfil.css';
import api from '../api';
import Menu from '../components/menu/Menu_logado';
import Barra from '../components/barra/barra_match';
import Bread from '../components/Breadcrumb/breadcrumb';
import Modal from '../components/modal/modal_agenda';
import Feed from '../components/fotos/feed';

function Perfil_match() {
  const { id } = useParams();
  const token = sessionStorage.getItem('token');
  const [usuario, setUsuario] = useState(null);
  const [treinos, setTreinos] = useState([]);
  const [open, setOpen] = useState(false);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const breadcrumbLinks = [
    { label: 'Home', to: '/pagina_inicial' },
    { label: 'Perfil', to: `/perfil_match/${id}` },
  ];

  const currentPage = '/perfil_match/:id';

  useEffect(() => {
    api.get(`/usuarios/${id}`, config)
      .then((response) => {
        setUsuario(response.data);
      })
      .catch((error) => {
        console.log("Erro: ", error);
      });

    api.get(`/treinos/contagem-treinos/${id}`, config)
      .then((response) => {
        setTreinos(response.data);
      })
      .catch((error) => {
        console.log("Erro: ", error);
      });

  }, [id]);

  const qtdTreinos = treinos.length;

  return (
    <>
      <Menu />
      <Bread links={breadcrumbLinks} currentPage={currentPage} />
      <div className="containerPerfil">
        {usuario && (
          <div className="infosMatch">
            <div className='fotosInfo'>
              <div className="foto">
                <img src={usuario.fotoPerfil?.url || ''} alt={usuario.nome} className='imgPerfil' />
              </div>
              <div className="informacoes">
                <h1 className='nomeUsuarioPerfil'>{usuario.nome}</h1>
                <span className='descricao'>
                  {usuario.descricao}
                </span>
                <br />
                <br />
                <br />
                <div className='info2'>
                  <div>
                    <span className="treinosRealizados">Treinos Realizados: </span> {qtdTreinos}
                  </div>
                  <div>
                    <span className="treinosRealizados">Avaliação: </span> {usuario.notaMedia?.toFixed(1)}
                  </div>
                  <div className="seguraBotao1">
                    <button className='btnConversaMatch' onClick={() => setOpen(true)}>Marcar Treino</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="metasMatch">
              <div className="tituloMatch">
                Meta
              </div>
              {usuario.Metatreinos === 0 ? (
                <div>
                  <span>Esse usuário não possui metas </span>
                </div>
              ) : (
                  <Barra nome={usuario.nome} qtdTreinos={qtdTreinos} metaTreinos={usuario.metaTreinos} />
                )}
            </div>
          </div>
        )}
      </div>
      <div className='seguraFeedPerfil'>
        {usuario && usuario.feedFotos && (
          <Feed id={id} fotos={usuario.feedFotos} />
        )}
      </div>
      <Modal setOpen={setOpen} open={open} idUsu={usuario?.id} />
    </>
  )
}

export default Perfil_match;