import React, {useState} from 'react'
import '../../css-images/css/feed.css'

function Feed(props) {

    const fotos = props.fotos;
    console.log("aquii 2", fotos)

    return(
        <>
        <div className="containerFeed">
            <div className="uploadFoto">
                a
            </div>
            {fotos.map((foto) => (
                <div className="cardFoto">
                    <img src={foto.url} className="fotoFeed" />
                </div>
            
            ))}
               <div className="paginaFotos">
                a
               </div>
        </div>

        </>
    )  
}

export default Feed