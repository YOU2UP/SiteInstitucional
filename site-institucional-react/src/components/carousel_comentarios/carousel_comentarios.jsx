import React, { useState } from 'react'
import Slider from 'react-slick'
import Img1 from '../../css-images/img/slide1.png'
import Img2 from '../../css-images/img/slide2.png'
import Img3 from '../../css-images/img/slide3.png'
import Img4 from '../../css-images/img/4.png'
import Img5 from '../../css-images/img/5.png'
import '../../css-images/css/carousel_comentarios.css'
import {FaArrowRight, FaArrowLeft} from "react-icons/fa"

const images = [Img1, Img2, Img3, Img4, Img5]

function Carousel_comentarios() {

    const NextArrow = ({onClick}) => {
        return(
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight/>
            </div>
        )
    }

    const PrevArrow = ({onClick}) => {
        return(
            <div className="arrow preview" onClick={onClick}>
                <FaArrowLeft/>
            </div>
        )
    }

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 4,
        centerPadding: 0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (curent, next) => setImageIndex(next) 
    }

  return (
    
    <div className="containerC">
        <Slider {...settings}>
            {images.map((img, idx) => (
             <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                <img src={img} alt={idx} />
             </div>   
            ))}
        </Slider>
    </div>
  )
}

export default Carousel_comentarios
