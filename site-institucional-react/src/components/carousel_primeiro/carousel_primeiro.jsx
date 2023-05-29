import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Img1 from '../../css-images/img/1.png'
import Img2 from '../../css-images/img/2.png'
import Img3 from '../../css-images/img/3.png'
import '../../css-images/css/carousel_primeiro.css'

function carousel_primeiro() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToshow: 1,
        slidesToScroll: 1
    };

  return (
    <div className="container">
        <Slider {...settings}>
        <div className="corpo">
            <img src={Img1} alt="" className="img" />
        </div>
        <div className="corpo">
            <img src={Img2} alt="" className="img" />
        </div>
        <div className="corpo">
            <img src={Img3} alt="" className="img" />
        </div>
        </Slider>
    </div>
        
  )
}

export default carousel_primeiro



