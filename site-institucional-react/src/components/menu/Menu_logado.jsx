import React from "react";
import Logo from "../../css-images/img/logo.png"
import Usuario from "../../css-images/img/icon_usu.png"
import '../../css-images/css/usu_nav.css'

function Menu(){
return(
    <>
    <header id="Menu" className="teste35">
        <div className="logo">
           <img src={Logo} alt="" srcSet="" className="iconLogado"/>
                
        </div>
        <nav id="NavBar">
            <ul>
                <li><a href="/pagina_inicial">Home</a></li>
                <li><a href="">Chat</a></li>
                <li><a href="/avaliacao">Avaliação</a></li>
                <li><a href="">Agenda</a></li>
                <li><a href="/perfil"><img src={Usuario} alt=""  className="usuarioNav"/></a></li>
            </ul>
        </nav>
    </header>
    </>
)
}

export default Menu