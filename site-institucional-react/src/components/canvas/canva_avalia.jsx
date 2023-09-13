import React, { useState,useEffect} from 'react'
import '../../css-images/css/canva_historico.css'
import api from '../../api.js'
import Card from '../cards/card_avaliacao.jsx'

function Canva_avalia() {
    const id = sessionStorage.getItem("id");
    const token = sessionStorage.getItem("token");
    const [dadosAvaliacao, setDadosAvaliacao] = useState([]);
    const [paginaAtual, setPaginaAtual] = useState(0); 
    const cardsPorPagina = 3;

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };

    useEffect(() => {

        api.get(`/treinos/nao-avaliados/${id}`, config).then((response) => {
            console.log("teste", response.data)
            setDadosAvaliacao(response.data)
        })
        .catch((error) => {
            console.log("erro", error)
        })

    }, [])

    function defineImg(historico) {
        var imagem;
    
        if (historico.usuarios[1].nome === "Christopher Nolan") {
          imagem = "https://ca-times.brightspotcdn.com/dims4/default/2f89e42/2147483647/strip/true/crop/5400x7200+0+0/resize/1200x1600!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F0b%2F71%2F301a805d4250aea241fcf4d02dd9%2F1312323-et-christopher-nolan-2.jpg"
        }
        else if (historico.usuarios[1].nome === "Steven Spielberg") {
          imagem = "https://www.planocritico.com/wp-content/uploads/2016/12/steven-spielberg-veredito-cinefilo-melhores-piores-filmes-plano-critico.jpg"
        }
        else if (historico.usuarios[1].nome === "Quentin Tarantino") {
          imagem = "https://img.etimg.com/thumb/width-1200,height-900,imgsize-121638,resizemode-75,msid-98682598/magazines/panache/end-of-an-era-quentin-tarantino-is-reportedly-working-on-his-last-film.jpg"
        }
        else if (historico.usuarios[1].nome === "Alfred Hitchcock") {
          imagem = "https://br.web.img2.acsta.net/c_310_420/pictures/15/02/25/20/43/378174.jpg"
        }
        else if (historico.usuarios[1].nome === "Martin Scorsese") {
          imagem = "https://multiversonoticias.com.br/wp-content/uploads/2023/05/Martin-Scorsese-1024x650.jpg"
        }
        else {
          imagem = "../../css-images/img/icone_card.png"
        }
    
        return imagem;
    
    
      }

      function handleProximaPagina() {
        if ((paginaAtual + 1) * cardsPorPagina < dadosAvaliacao.length) {
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
      {dadosAvaliacao.slice(paginaAtual * cardsPorPagina, (paginaAtual + 1) * cardsPorPagina).map((dados, index) => (
        <Card
          key={index}
          nome={dados.usuarios[1].nome}
          img={defineImg(dados)}
          descricao_pessoa={dados.usuarios[1].descricao}
          nota="Avaliar"
          />
      ))}
       <div className="botoesNavegacao">
          <button onClick={handlePaginaAnterior} disabled={paginaAtual === 0} className='btnPagina'>
            Página Anterior
          </button>
          <button onClick={handleProximaPagina} disabled={(paginaAtual + 1) * cardsPorPagina >= dadosAvaliacao.length} className='btnPagina'>
            Próxima Página
          </button>
        </div>
    </div>
  )
}

export default Canva_avalia
