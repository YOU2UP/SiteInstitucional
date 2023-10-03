import React from "react";
import Logo from "../../css-images/img/logo.png"
import Usuario from "../../css-images/img/icon_usu.png"
import Close from '../../css-images/img/close.png'
import More from '../../css-images/img/more.png'
import '../../css-images/css/usu_nav.css'
import { useState } from "react";


function MenuLogado(){
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        setIsActive(current => !current);
    };
  

    function fechar(){
        
        document.getElementById("botoesNavLogado").classList.remove('aberto');
        document.getElementById("logo").classList.remove('some');
        document.getElementById("iconmenu").classList.remove('some');
       
    }
return(
    <>
    <header className="navlogado">
        <div className="logoNavLogado">
           <img src={Logo} alt=""  className="logo"/>    
        </div>
        <nav id="botoesNavLogado" className={isActive ? 'aberto' : ''}>
            <ul>
                <li><a href="/pagina_inicial">Home</a></li>
                <li><a href="/chat">Chat</a></li>
                <li><a href="/avaliacao">Avaliação</a></li>
                <li><a href="/agenda">Agenda</a></li>
                <li><a href="/perfil"><img src={Usuario} alt=""  className="usuarioNav"/></a></li>
            </ul>
            <img src={Close} className="icon close" alt="" onClick={handleClick}></img>
        </nav>
                <img src={More} alt="" className="icon" onClick={handleClick} id="iconmenu"/>
    </header>
    </>
)
}

export default MenuLogado