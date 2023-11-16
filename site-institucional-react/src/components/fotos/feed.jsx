import React, {useState} from 'react'
import '../../css-images/css/feed.css'

function Feed(props) {

    const fotos = props.fotos;
    console.log("aquii 2", fotos)

    return(
        <>
        <div className="containerFeed">
            {
                fotos === undefined ? <p>Carregando...</p> :
                fotos === null ? <p>Não há fotos cadastradas</p> :
                fotos.map((foto) => {
                    <div className="cardFoto">
                        {/* <img src={foto.url} alt="" /> */}
                        {/* {foto.url} */}
                        a
                    </div>
                })
            }
           
        </div>
        </>
    )  
}

export default Feed