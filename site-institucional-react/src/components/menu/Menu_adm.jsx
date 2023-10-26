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

            <a href="/pagina_inicial">
           <img src={Logo} alt=""  className="logo"/>    
            </a>
        </div>
        <nav id="botoesNavLogado" className={isActive ? 'aberto' : ''}>
            <img src={Close} className="icon close" alt="" onClick={handleClick}></img>
        </nav>
                <img src={More} alt="" className="icon" onClick={handleClick} id="iconmenu"/>
    </header>
    </>
)
}

export default MenuLogado