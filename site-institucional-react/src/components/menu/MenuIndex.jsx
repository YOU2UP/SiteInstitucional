import React from "react";
import Logo from "../../css-images/img/logo.png"
import Close from '../../css-images/img/close.png'
import More from '../../css-images/img/more.png'
import Icon from '../../css-images/img/icon_usu.png'
import "../../css-images/css/menuIndex.css"
function MenuIndex(){
    function abrir(){
        document.getElementById("menuMenor").classList.add('aberto');
        document.getElementById("logo").classList.add('some');
        document.getElementById("iconmenu").classList.add('some');
        
    }

    function fechar(){
        
        document.getElementById("menuMenor").classList.remove('aberto');
        document.getElementById("logo").classList.remove('some');
        document.getElementById("iconmenu").classList.remove('some');
       
    }
return(

    <>
    <header id="MenuIndex">
        <div id="logo">
           <img src={Logo} style={{width: '200px', marginLeft: '40px'}} alt="" />
                
        </div>
        <nav id="menuMenor">
            <ul id="links">
                <li><a href="/home">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Ajuda</a></li>
                <li><a href="#">Contato</a></li>
                <li><a href="/cadastro"><button className="buttonCadastro">Cadastro</button></a></li>
                <li><a href="/login"><button className="buttonLogin"><img src={Icon} style={{width: '50px', height:'50px'}} alt="" /></button></a></li>
            </ul>
            <img src={Close} className="icon close" alt="" onClick={() => fechar()}></img>
        </nav>
                <img src={More} alt="" className="iconmenu" onClick={() => abrir()} id="iconmenu"/>
   
    </header>
    </>
)
}

export default MenuIndex