import React from "react";
import Logo from "../../css-images/img/logo.png"
import Usuario from "../../css-images/img/icon_usu.png"
import '../../css-images/css/usu_nav.css'

function MenuLogado(){
return(
    <>
    <header className="navlogado">
        <div className="logoNavLogado">
           <img src={Logo} alt=""  className="iconLogado"/>    
        </div>
        <nav className="botoesNavLogado">
            <ul>
                <li><a href="/pagina_inicial">Home</a></li>
                <li><a href="/chat">Chat</a></li>
                <li><a href="/avaliacao">Avaliação</a></li>
                <li><a href="/agenda">Agenda</a></li>
                <li><a href="/perfil"><img src={Usuario} alt=""  className="usuarioNav"/></a></li>
            </ul>
        </nav>
    </header>
    </>
)
}

export default MenuLogado