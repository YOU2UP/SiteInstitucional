import React, { useEffect, useState } from 'react';
import Menu from '../components/menu/Menu_logado';
import api from '../api';
import '../css-images/css/perfil.css';
import Adicionar from '../css-images/img/adicionar.png';
import Config from '../css-images/img/config.png';
import Grafico from '../components/canvas/canvas_dash';
import Barra from '../components/barra/barra';
import Breadcrumb from '../components/Breadcrumb/breadcrumb';
import FeedFoto from '../components/fotos/feed';
import Modal from '../components/modal/modal_foto_perfil'

function Perfil() {
  const nome = sessionStorage.getItem('nome');
  const id = sessionStorage.getItem('id');
  const token = sessionStorage.getItem('token');
  const [usuario, setUsuario] = useState(null);
  const [open, setOpen] = useState(false);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const breadcrumbLinks = [
    { label: 'Home', to: '/pagina_inicial' },
    { label: 'Perfil', to: '/perfil' },
  ];

  const currentPage = '/perfil';

  const [treinos, setTreinos] = useState([]);
  const [media, setMedia] = useState();
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    api.get(`/usuarios/${id}`, config)
      .then((response) => {
        setUsuario(response.data);
      })
      .catch((error) => {
        console.log('Erro: ', error);
      });

    api.get(`/treinos/contagem-treinos/${id}`, config)
      .then((response) => {
        setTreinos(response.data);
      })
      .catch((error) => {
        console.log('Erro: ', error);
      });

    api.get(`/avaliacoes/media/${id}`, config)
      .then((response) => {
        setMedia(response.data);
      })
      .catch((error) => {
        console.log('Erro media: ', error);
      });

    api.get(`/treinos/contagem-treinos/${id}`, config)
      .then((response) => {
        setRanking(response.data);
      })
      .catch((error) => {
        console.log('Erro:', error);
      });
  }, []);

  const qtdTreinos = treinos.length;

  function ContagemTreinos(ranking) {
    const counts = {};
    ranking.forEach((nome) => {
      if (counts[nome]) {
        counts[nome]++;
      } else {
        counts[nome] = 1;
      }
    });

    return counts;
  }

  const contagemNome = ContagemTreinos(ranking);

  const nomesOrdenados = Object.keys(contagemNome).sort((a, b) => contagemNome[b] - contagemNome[a]);

  const top4 = nomesOrdenados.slice(0, 4);

  const data = top4.map((nome, index) => (
    <div key={index}>{nome}</div>
  ));

  const [corTextoFotos, setCorTextoFotos] = useState('#FF9200');
  const [corTextoGraficos, setCorTextoGraficos] = useState('#000');
  const [componente, setComponente] = useState('fotos');

  const decideComponente = (componente) => {
    if (componente === 'fotos') {
      return usuario && usuario.feedFotos ? <FeedFoto fotos={usuario.feedFotos}  id={id}/> : null;
    } else if (componente === 'graficos') {
      return <Grafico />;
    } else {
      return null;
    }
  };

  console.log(usuario)

  return (
    <>
      <Menu />
      <div className="seguraBrad">
        <Breadcrumb links={breadcrumbLinks} currentPage={currentPage} />
        <a href="/configuracao" className="btnConfig">
          <img src={Config} alt="engrenagem" className="imgConfig" />
        </a>
      </div>

      <div className="containerPerfil">
        {usuario && (
          <div className="infos">
            <div className="foto">
              <img src={usuario.fotoPerfil.url} alt={nome} className="imgPerfil" />
              <div className="seguraBtnFotoPerfil">
                <button className='btnFotoPerfil'>
                  <img className='imgAdiciona' src={Adicionar} alt="" onClick={() => setOpen(true)}/>
                </button>
              </div>
            </div>
            <div className="informacoes">
              <h1 className="nomeUsuarioPerfil">{nome}</h1>
              <span className="descricao">{usuario.descricao}</span>
              <div style={{ marginTop: 30 }}>
                <span className="treinosRealizados">Treinos Realizados: </span> {qtdTreinos}
              </div>
              <div className="metas">
                <h1 className="meta">Meta</h1>
                {usuario.metaTreinos === 0 ? (
                  <div>
                    <span>Você ainda não Possui Metas</span>
                    <button className="btnMeta">Defina Uma Meta</button>
                  </div>
                ) : (
                  <Barra qtdTreinos={qtdTreinos} metaTreinos={usuario.metaTreinos} />
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="containerPerfil2">
        <div className="seguraBtnPerfil">
          <button
            className="btnFotos"
            style={{ color: corTextoFotos }}
            onClick={() => {
              setCorTextoFotos('#FF9200');
              setCorTextoGraficos('#000');
              setComponente('fotos');
            }}
          >
            Fotos
          </button>
          <button
            className="btnGraficos"
            style={{ color: corTextoGraficos }}
            onClick={() => {
              setCorTextoFotos('#000');
              setCorTextoGraficos('#FF9200');
              setComponente('graficos');
            }}
          >
            Graficos
          </button>
        </div>
        <div className="seguraPerfil">{decideComponente(componente)}</div>
      </div>
      <Modal open={open} setOpen={setOpen}/>
    </>
  );
}

export default Perfil;
