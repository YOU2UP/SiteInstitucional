import React, { useState } from 'react';
import setaDireita from '../../css-images/img/seta_feed_direita.png'
import setaEsquerda from '../../css-images/img/seta_feed_esquerda.png'
import Adicionar from '../../css-images/img/adicionar.png'
import Modal_foto from '../modal/modal_foto';
import '../../css-images/css/feed.css';

function Feed(props) {
    const fotos = props.fotos;
    const idLogado = sessionStorage.getItem('id');
    const id = props.id;
    const [open, setOpen] = useState(false);

    // Constantes de controle
    const [currentPageUsuario, setCurrentPageUsuario] = useState(1);
    const [currentPageMatch, setCurrentPageMatch] = useState(1);
    const photosPerPageUsuario = 5;
    const photosPerPageMatch = 6;

    // Lógica de paginação para usuário
    const indexOfLastPhotoUsuario = currentPageUsuario * photosPerPageUsuario;
    const indexOfFirstPhotoUsuario = indexOfLastPhotoUsuario - photosPerPageUsuario;
    const currentPhotosUsuario = fotos.slice(indexOfFirstPhotoUsuario, indexOfLastPhotoUsuario);

    // Lógica de paginação para match
    const indexOfLastPhotoMatch = currentPageMatch * photosPerPageMatch;
    const indexOfFirstPhotoMatch = indexOfLastPhotoMatch - photosPerPageMatch;
    const currentPhotosMatch = fotos.slice(indexOfFirstPhotoMatch, indexOfLastPhotoMatch);

    // Mudança de página para usuário
    const paginateUsuario = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= Math.ceil(fotos.length / photosPerPageUsuario)) {
            setCurrentPageUsuario(pageNumber);
        }
    };

    // Mudança de página para match
    const paginateMatch = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= Math.ceil(fotos.length / photosPerPageMatch)) {
            setCurrentPageMatch(pageNumber);
        }
    };

    return (
        <>
            {id === idLogado ? (
                <div className="seguraFeed">
                    <div className="containerFeed">
                        {currentPageUsuario === 1 && (
                            <button className="uploadFoto" onClick={() => setOpen(true)}>

                                <img className='adicionarImg' src={Adicionar} alt="" />
                                <span className="txtUpload">
                                    adicionar foto
                                </span>
                            </button>
                        )}
                        {currentPhotosUsuario.map((foto) => (
                            <div className="cardFoto" key={foto.id}>
                                <img src={foto.url} className="fotoFeed" alt={`Foto ${foto.id}`} />
                            </div>
                        ))}
                    </div>
                    <div className="paginaFotos">
                        <button
                            className="btnPagFeed"
                            onClick={() => paginateUsuario(currentPageUsuario - 1)}
                            disabled={currentPageUsuario === 1}
                        >
                            <img className='imgBtnFeed' src={setaEsquerda} alt="" />
                        </button>
                        <span className="infoPagina">{currentPageUsuario} de {Math.ceil(fotos.length / photosPerPageUsuario)}</span>

                        <button
                            className="btnPagFeed"
                            onClick={() => paginateUsuario(currentPageUsuario + 1)}
                            disabled={indexOfLastPhotoUsuario >= fotos.length}
                        >
                            <img className='imgBtnFeed' src={setaDireita} alt="" />
                        </button>
                    </div>
                    <Modal_foto setOpen={setOpen} open={open}/>
                </div>
            ) : (
                <div className="seguraFeed">
                    <div className="containerFeed">
                        {currentPhotosMatch.map((foto) => (
                            <div className="cardFoto" key={foto.id}>
                                <img src={foto.url} className="fotoFeed" alt={`Foto ${foto.id}`} />
                            </div>
                        ))}
                    </div>
                    <div className="paginaFotos">
                        <button
                            className="btnPagFeed"
                            onClick={() => paginateMatch(currentPageMatch - 1)}
                            disabled={currentPageMatch === 1}
                        >
                            <img className='imgBtnFeed' src={setaEsquerda} alt="" />
                        </button>
                        <span className="infoPagina">{currentPageMatch} de {Math.ceil(fotos.length / photosPerPageMatch)}</span>
                        <button
                            className="btnPagFeed"
                            onClick={() => paginateMatch(currentPageMatch + 1)}
                            disabled={indexOfLastPhotoMatch >= fotos.length}
                        >
                            <img className='imgBtnFeed' src={setaDireita} alt="" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Feed;