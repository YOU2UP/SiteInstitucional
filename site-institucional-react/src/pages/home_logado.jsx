import React, { useEffect, useState} from 'react'
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
    
    useEffect(() => {
      
      api.get(`matches/usuario/${id}`, config).then((response) => {
        setMatches(response.data)
        console.log("matches", response.data)
        console.log(token)
        })
        .catch((error) => {
            console.log("Erro: ", error)
        })

    }, [])

  

  return (
    <>

    <Menu/>

    
    <div className="containerHomeLogado">
    
      {matches.map((match) => (
        <CardMatch img={foto} nome={match.usuario2.nome}/>
      ))}

    </div>
    <Footer/>
    </>
  )
}

export default Home_logado