import React, {useState} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../css-images/css/carousel_devs.css'
import Desenvolvedor from './desenvolvedor.jsx'
import Img1 from '../../css-images/img/grossi.png'
import Img2 from '../../css-images/img/joao.png'
import Img3 from '../../css-images/img/matheus.png'
import Img4 from '../../css-images/img/rafa.png'
import Img5 from '../../css-images/img/vinicius.png'
import Img6 from '../../css-images/img/vitor.png'



function Carousel_devs() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive : [
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      },

      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
      }
  }
  ]
  }

  return (
    <div className='containerCarousel'>
      <Slider {...settings}>
        <div className="dev">
          <Desenvolvedor img={Img1} nome="felipe Grossi" funcao="Analista de Dados"></Desenvolvedor>
        </div>
        <div className="dev">
          <Desenvolvedor img={Img2} nome="João Gabriel" funcao="Analista de Dados"></Desenvolvedor>
        </div>
        <div className="dev">
          <Desenvolvedor img={Img3} nome="Matheus Leal" funcao="Back-end Developer"></Desenvolvedor>
        </div>
        <div className="dev">
          <Desenvolvedor img={Img4} nome="Rafaella P. Filipe " funcao="Front-end Developer"></Desenvolvedor>
        </div>
        <div className="dev">
          <Desenvolvedor img={Img5} nome="Vinicius Cardoso" funcao="Back-end Developer"></Desenvolvedor>
        </div>
        <div className="dev">
          <Desenvolvedor img={Img6} nome="Vitor Fernando" funcao="Front-end Developer"></Desenvolvedor>
        </div>
      </Slider>
      
    </div>
  )
}

export default Carousel_devs
