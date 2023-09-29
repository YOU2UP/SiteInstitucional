$('.single-item').slick({
    infinite : true,
    autoplay : true,
    autoplaySpeed : 2500,
    dots : false,
    prevArrow: $("#prev-banner"),
    nextArrow: $("#next-banner"),

});
				
$(function() {
    

$(".watch-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    prevArrow: $("#arrow-prev"),
    nextArrow: $("#arrow-next"),
    responsive : [
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }  
    ]
});
    $(".watch-slider2").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        prevArrow: $("#arrow-prevdev"),
        nextArrow: $("#arrow-nextdev"),
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
    });


})
		



const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration:700, 
    reset : true

})
scrollReveal.reveal(`
#carrouselPrinciapal,
#propaganda,
#comentarios,
#ajuda,
#desenvolvedores,
#contato

`
, {interval:100} )



const header =document.querySelector("#header")
const navHeight =header.offsetHeight
window.addEventListener('scroll',function(){
    if(window.scrollY>=navHeight-5){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
})