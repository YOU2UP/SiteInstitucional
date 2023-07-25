import React from "react";
import Logo from "../css-images/img/logo.png"
import Usuario from "../css-images/img/icon_usu.png"
import '../css-images/css/usu_nav.css'

function Menu(){
return(
    <>
    <header id="Menu">
        <div className="logo">
           <img src={Logo} alt="" srcSet="" className="iconLogado"/>
                
        </div>
        <nav id="NavBar">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Chat</a></li>
                <li><a href="">Avaliação</a></li>
                <li><a href="">Agenda</a></li>
                <li><a href="/perfil"><span className="liLogado">Perfil</span></a></li>
                <li><a href=""><img src={Usuario} alt=""  className="usuarioNav"/></a></li>
            </ul>
        </nav>
    </header>
    </>
)
}

export default Menu