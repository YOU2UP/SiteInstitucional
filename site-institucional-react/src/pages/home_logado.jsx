import React, { useEffect, useState } from 'react'
import { differenceInYears } from 'date-fns';
import Menu from '../components/menu/Menu_logado'
import Footer from '../components/footer/footer'
import '../css-images/css/home_logado.css'
import CardMatch from '../components/cards/card_match'
import foto from '../css-images/img/meninona.png'
import api from '../api'

function Home_logado() {

  const id = sessionStorage.getItem("id");
  const token = sessionStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
  };

  const [matches, setMatches] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(0); 
  const cardsPorPagina = 3;


  function handleProximaPagina() {
    if ((paginaAtual + 1) * cardsPorPagina < matches.length) {
      setPaginaAtual(paginaAtual + 1);
    }
  }

  function handlePaginaAnterior() {
    if (paginaAtual > 0) {
      setPaginaAtual(paginaAtual - 1);
    }
  }

  useEffect(() => {

    api.get(`matches/usuario/${id}`, config).then((response) => {
      const filteredMatches = response.data.filter((match) => match.usuario2.id != id);
      setMatches(filteredMatches);
      console.log("matches", response.data)
      console.log(token)
    })
      .catch((error) => {
        console.log("Erro: ", error)
      })

  }, [])

  function calculaIdade(data) {
    const hoje = new Date();
    const dataNasc = new Date(data);

    const idade = differenceInYears(hoje, dataNasc);

    return idade;
  }

  function defineImg(match) {
    var imagem;

    if (match.usuario2.nome === "Christopher Nolan") {
      imagem = "https://ca-times.brightspotcdn.com/dims4/default/2f89e42/2147483647/strip/true/crop/5400x7200+0+0/resize/1200x1600!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F0b%2F71%2F301a805d4250aea241fcf4d02dd9%2F1312323-et-christopher-nolan-2.jpg"
    }
    else if (match.usuario2.nome === "Steven Spielberg") {
      imagem = "https://www.planocritico.com/wp-content/uploads/2016/12/steven-spielberg-veredito-cinefilo-melhores-piores-filmes-plano-critico.jpg"
    }
    else if (match.usuario2.nome === "Quentin Tarantino") {
      imagem = "https://img.etimg.com/thumb/width-1200,height-900,imgsize-121638,resizemode-75,msid-98682598/magazines/panache/end-of-an-era-quentin-tarantino-is-reportedly-working-on-his-last-film.jpg"
    }
    else if (match.usuario2.nome === "Alfred Hitchcock") {
      imagem = "https://br.web.img2.acsta.net/c_310_420/pictures/15/02/25/20/43/378174.jpg"
    }
    else if (match.usuario2.nome === "Martin Scorsese") {
      imagem = "https://multiversonoticias.com.br/wp-content/uploads/2023/05/Martin-Scorsese-1024x650.jpg"
    }
    else {
      imagem = foto;
    }

    return imagem;


  }



  return (
    <>

      <Menu />


      <div className="containerHomeLogado">

        <span className="tituloHomeLogado">Pessoas que mais combinam com você!</span>

        {matches.slice(paginaAtual * cardsPorPagina, (paginaAtual + 1) * cardsPorPagina).map((match, index) => (
          <CardMatch key ={index}
            img={defineImg(match)}
            nome={match.usuario2.nome}
            descricao_pessoa={match.usuario2.descricao}
            localizacao={match.usuario2.localTreino.nome}
            uf={match.usuario2.localTreino.uf}
            idade={calculaIdade(match.usuario2.dataNascimento)}
          />
        ))}

        <div className="botoesNavegacao">
          <button onClick={handlePaginaAnterior} disabled={paginaAtual === 0} className='btnPagina'>
            Página Anterior
          </button>
          <button onClick={handleProximaPagina} disabled={(paginaAtual + 1) * cardsPorPagina >= matches.length} className='btnPagina'>
            Próxima Página
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home_logado