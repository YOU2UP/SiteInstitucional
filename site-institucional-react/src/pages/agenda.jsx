import React, { useState, useEffect } from 'react';
import Menu from '../components/menu/Menu_logado.jsx';
import Footer from '../components/footer/footer.jsx';
import '../css-images/css/agenda.css';
import CardFuturo from '../components/cards/card_agenda_marc.jsx';
import CardMarcado from '../components/cards/card_agenda.jsx';
import api from '../api';

function Agenda() {
  const id = sessionStorage.getItem("id");
  const token = sessionStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
  };

  const [Agendamentos, setAgendamentos] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(0); 
  const cardsPorPagina = 2;

  useEffect(() => {
    api.get(`treinos/usuario/${id}`, config)
      .then((response) => {
        setAgendamentos(response.data);
      })
      .catch((error) => {
        console.log("teste");
        console.log("Erro: ", error);
      });
  }, []);

  useEffect(() => {
    console.log("a", Agendamentos);
  }, [Agendamentos])

  function defineImg(agenda) {
    var imagem;

    if (agenda.usuarios[1].nome === "Christopher Nolan") {
      imagem = "https://ca-times.brightspotcdn.com/dims4/default/2f89e42/2147483647/strip/true/crop/5400x7200+0+0/resize/1200x1600!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F0b%2F71%2F301a805d4250aea241fcf4d02dd9%2F1312323-et-christopher-nolan-2.jpg"
    }
    else if (agenda.usuarios[1].nome === "Steven Spielberg") {
      imagem = "https://www.planocritico.com/wp-content/uploads/2016/12/steven-spielberg-veredito-cinefilo-melhores-piores-filmes-plano-critico.jpg"
    }
    else if (agenda.usuarios[1].nome === "Quentin Tarantino") {
      imagem = "https://img.etimg.com/thumb/width-1200,height-900,imgsize-121638,resizemode-75,msid-98682598/magazines/panache/end-of-an-era-quentin-tarantino-is-reportedly-working-on-his-last-film.jpg"
    }
    else if (agenda.usuarios[1].nome === "Alfred Hitchcock") {
      imagem = "https://br.web.img2.acsta.net/c_310_420/pictures/15/02/25/20/43/378174.jpg"
    }
    else if (agenda.usuarios[1].nome === "Martin Scorsese") {
      imagem = "https://multiversonoticias.com.br/wp-content/uploads/2023/05/Martin-Scorsese-1024x650.jpg"
    }
    else {
      imagem = "../../css-images/img/icone_card.png"
    }

    return imagem;


  }

  function defineData(agenda) {
    const datahora = agenda.inicioTreino.split("T")

    const data = datahora[0];
    const hora = datahora[1];

    const dataFormatada = data.split("-").reverse().join("/");

    return dataFormatada;
  }

  function defineHora(agenda) {
    const datahora = agenda.inicioTreino.split("T")

    const data = datahora[0];
    const hora = datahora[1];

    const horaFormatada = hora.split(":").slice(0, 2).join(":");

    return horaFormatada;
  }

  function isDataFutura(dataTreino) {
    const dataTreinoTimestamp = new Date(dataTreino).getTime();
    const dataAtualTimestamp = new Date().getTime();
    return dataTreinoTimestamp > dataAtualTimestamp;
  }

  function handleProximaPagina() {
    if ((paginaAtual + 1) * cardsPorPagina < Agendamentos.length) {
      setPaginaAtual(paginaAtual + 1);
    }
  }

  function handlePaginaAnterior() {
    if (paginaAtual > 0) {
      setPaginaAtual(paginaAtual - 1);
    }  
  }

  function renderCards(listaAgendamentos) {
    {listaAgendamentos.slice(paginaAtual * cardsPorPagina, (paginaAtual + 1) * cardsPorPagina).map((agenda, index) => (
      <div className="duplaCard" key={index}>
        {isDataFutura(agenda.inicioTreino) ? (
          <>
            <CardFuturo
              dataTreino={defineData(agenda)}
              horaTreino={defineHora(agenda)}
              nome={agenda.usuarios[1].nome}
              img={defineImg(agenda)}
              localTreino={agenda.usuarios[1].localTreino.nome}
            />
            {index + 1 < cardsPorPagina && ( // Verifique se há espaço para outro card
              <CardFuturo
                dataTreino={defineData(listaAgendamentos[index + 1])}
                horaTreino={defineHora(listaAgendamentos[index + 1])}
                nome={listaAgendamentos[index + 1].usuarios[1].nome}
                img={defineImg(listaAgendamentos[index + 1])}
                localTreino={listaAgendamentos[index + 1].usuarios[1].localTreino.nome}
              />
            )}
          </>
        ) : (
          <>
            <CardMarcado
              dataTreino={defineData(agenda)}
              horaTreino={defineHora(agenda)}
              nome={agenda.usuarios[1].nome}
              img={defineImg(agenda)}
              localTreino={agenda.usuarios[1].localTreino.nome}
            />
            {index + 1 < cardsPorPagina && (
              <CardMarcado
                dataTreino={defineData(listaAgendamentos[index + 1])}
                horaTreino={defineHora(listaAgendamentos[index + 1])}
                nome={listaAgendamentos[index + 1].usuarios[1].nome}
                img={defineImg(listaAgendamentos[index + 1])}
                localTreino={listaAgendamentos[index + 1].usuarios[1].localTreino.nome}
              />
            )}
          </>
        )}
      </div>
            ))}
  }

  return (
    <>
      <Menu />
      <div className="containerAgenda">
        <span className="tituloAgenda">
          Esses são os treinos agendados com você
        </span>
        <div className="seguraCard">
            {renderCards(Agendamentos)}
        </div>
        <div className="botoesNavegacao">
          <button onClick={handlePaginaAnterior} disabled={paginaAtual === 0} className='btnPagina'>
            Página Anterior
          </button>
          <button onClick={handleProximaPagina} disabled={(paginaAtual + 1) * cardsPorPagina >= Agendamentos.length} className='btnPagina'>
            Próxima Página
          </button>
        </div> 
      </div>
      <Footer />
    </>
  );
}

export default Agenda;
