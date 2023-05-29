import React from "react";
import Logo from '../css-images/img/logo.png'
import Close from '../css-images/img/close.png'
import More from '../css-images/img/more.png'
import Carousel_primeiro from '../components/carousel_primeiro/carousel_primeiro.jsx'
import Carousel_comentarios from "../components/carousel_comentarios/carousel_comentarios.jsx";
import Carousel_dev from '../components/carousel_devs/carousel_devs.jsx'
import Foto1 from '../css-images/img/foto1.png'
import Copy from '../css-images/img/copyright.png'
import Pin from '../css-images/img/pin (1).png'
import Email from '../css-images/img/email.png'
import Face from '../css-images/img/facebook.png'
import Insta from '../css-images/img/instagram.png'
import Yout from '../css-images/img/youtube.png'


function home(){

    function abrir(){
        document.getElementById("menu").classList.add("aberto");
        document.getElementById("divLogo").classList.add("some");
        document.getElementById("iconmenu").classList.add("some");
        document.getElementById("container").classList.add("aumenta");
    }

    function fechar(){
        
        document.getElementById("menu").classList.remove("aberto");
        document.getElementById("divLogo").classList.remove("some");
        document.getElementById("iconmenu").classList.remove("some");
        document.getElementById("container").classList.remove("aumenta");
    }

    return(

        
        <>

         <header class="MeuHeader" id="header">
        <div class="Meucontainer" id="container">
            <div class="logo" id="divLogo">
                <img src={Logo} alt="logo"/>

            </div>
            <div id="menu">
                <ul id="links">
                    <li><a href="#carrouselPrincipal">Home</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#ajuda">Ajuda</a></li>
                    <li><a href="#contato">Contato</a></li>
                    
                </ul>
                <div className="botoes">
                   <a href="/login"><button className="btn_login">Entrar</button></a> 
                    <a href="/cadastro"><button className="btn_cadastro">Cadastrar</button></a>

                </div>
                <img src={Close} className="icon close" alt="" srcset="" onclick={() => fechar()}></img>
        </div>
                <img src={More} alt="" className="icon" onclick={() => abrir()} id="iconmenu"/>
        </div>

    </header>
    <main>
        <section id="carrouselPrincipal">
            <Carousel_primeiro/>
            
    </section>
    <section id="sobre">
        <div className="containerGrid">
            <div>
                <p className="title">O que é a YOU2UP?</p>
                <p className="text"> A YOU2UP é um projeto que foi criado na faculdade SPTECH visando juntar você que gostaria de treinar com alguém a este alguém que vc procura</p>
            </div>
            <img src={Foto1 } alt="" class="fundo"/>
            
        </div>
        
    </section>
    <section id="propaganda">
        <div className="containerGrid">
            
            <div className="sobreposicao">
                <div className="textoEmcima">
                <p className="title">Como funciona a YOU2UP?</p>
                <p className="text">Nossa plataforma tem finalidade de juntar você nosso usuario a um futuro parceiro para que vocês dois treinem juntos, podendo assim conhecer novas pessoas.</p>
                <button className="botaoinscreva">Inscreva-se</button>
            </div></div>
          
           
        </div>
    </section>
    <section id="comentarios">
        <p className="title">O que nossos usuarios dizem?</p>
            
            <div className="watch-slider">
                <Carousel_comentarios/>   
                
            </div>
    </section>

    <section id="ajuda">
        <div className="container">
            <p className="titleBranco">
                Precisa de ajuda?
            </p>
            <p className="text">
                clique abaixo para falar com um de nossa equipe
            </p>
            <button>Fale Conosco</button>
        </div>
    </section>

    <section id="desenvolvedores">
        <p className="title">Equipe desenvolvedora</p>
        <div className="global-page-container">
            <Carousel_dev/>
        </div>
    </section>

    </main>
    
    <footer id="contato">
        <div className="container">
            <div className="logo">
                <img src={Logo} alt="logoFooter" className = "logoFooter"/>
            </div>
            <div className="social">
                <p className="name">
                    Siga-nos nas redes sociais
                </p>
                <img src={Face} alt="facebook" className="icon"/>
                <img src={Insta} alt="instagram" className="icon"/>
                <img src={Yout} alt="youtube" className="icon"/>
            </div>
            <div className="contact">
                <p className="name">Contate-nos </p>
                <div>
                    <img src={Email} alt="" srcset="" className="icon"/>
                    <p className="desc">you2up@sptech.school</p>
                </div>
               <div>
                <img src={Pin} alt="" srcset="" className="icon"/>
                <p className="desc">Rua Haddock Lobo, nº 595</p>
               </div>
               
                
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
        <div className="divisao"></div>
        <div className="copy">
            <p className="copyText"><img src={Copy} width="15"/> 2020 - Todos os direitos reservados YOU2UP - SPTECH</p>
        </div>
    </footer>

    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="https://unpkg.com/scrollreveal"></script>
    
    <script type="text/javascript" src="http://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
	
    <script src="./script.js"></script>
    

        </>
    )
}

export default home;