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
                fotos.map((foto) => {
                    <div className="cardFoto">
                        {/* <img src={foto.url} alt="" /> */}
                        {/* {foto.url} */}
                    </div>
                })
            }
           
        </div>
        </>
    )  
}

export default Feed