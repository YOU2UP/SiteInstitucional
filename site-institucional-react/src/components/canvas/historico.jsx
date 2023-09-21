import React, { useState, useEffect } from 'react'
import CardAvaliacao from '../cards/card_avaliacao.jsx'
import '../../css-images/css/canva_historico.css'
import Usu from '../../css-images/img/icone_card.png'
import api from '../../api.js'

function Historico() {

  const id = sessionStorage.getItem("id")
  const token = sessionStorage.getItem("token")
  const [historico, setHistorico] = useState([])
  const [paginaAtual, setPaginaAtual] = useState(0);
  const cardsPorPagina = 3;


  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
  };

  useEffect(() => {

    api.get(`/avaliacoes/avaliador/${id}`, config).then((response) => {
      setHistorico(response.data)
    })
      .catch((error) => {
        console.log("erro", error)
      })

  }, [])

  function defineImg(historico) {
    var imagem;

    if (historico.avaliado.nome === "Christopher Nolan") {
      imagem = "https://ca-times.brightspotcdn.com/dims4/default/2f89e42/2147483647/strip/true/crop/5400x7200+0+0/resize/1200x1600!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F0b%2F71%2F301a805d4250aea241fcf4d02dd9%2F1312323-et-christopher-nolan-2.jpg"
    }
    else if (historico.avaliado.nome === "Steven Spielberg") {
      imagem = "https://www.planocritico.com/wp-content/uploads/2016/12/steven-spielberg-veredito-cinefilo-melhores-piores-filmes-plano-critico.jpg"
    }
    else if (historico.avaliado.nome === "Quentin Tarantino") {
      imagem = "https://img.etimg.com/thumb/width-1200,height-900,imgsize-121638,resizemode-75,msid-98682598/magazines/panache/end-of-an-era-quentin-tarantino-is-reportedly-working-on-his-last-film.jpg"
    }
    else if (historico.avaliado.nome === "Alfred Hitchcock") {
      imagem = "https://br.web.img2.acsta.net/c_310_420/pictures/15/02/25/20/43/378174.jpg"
    }
    else if (historico.avaliado.nome === "Martin Scorsese") {
      imagem = "https://multiversonoticias.com.br/wp-content/uploads/2023/05/Martin-Scorsese-1024x650.jpg"
    }
    else {
      imagem = "../../css-images/img/icone_card.png"
    }

    return imagem;


  }

  function handleProximaPagina() {
    if ((paginaAtual + 1) * cardsPorPagina < historico.length) {
      setPaginaAtual(paginaAtual + 1);
    }
  }

  function handlePaginaAnterior() {
    if (paginaAtual > 0) {
      setPaginaAtual(paginaAtual - 1);
    }
  }





  return (
    <div className='cardsAvaliacao'>
      {historico.slice(paginaAtual * cardsPorPagina, (paginaAtual + 1) * cardsPorPagina).map((cards, index) => (
        <CardAvaliacao key={index}
          img={defineImg(cards)}
          nome={cards.avaliado.nome}
          descricao_pessoa={cards.avaliado.descricao}
          nota={cards.nota}
        />
      ))}

      <div className="botoesNavegacao">
        <button onClick={handlePaginaAnterior} disabled={paginaAtual === 0} className='btnPagina'>
          Página Anterior
        </button>
        <button onClick={handleProximaPagina} disabled={(paginaAtual + 1) * cardsPorPagina >= historico.length} className='btnPagina'>
          Próxima Página
        </button>
      </div>

    </div>
  )
}

export default Historico
