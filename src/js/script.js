$(document).ready(function(){
    $('.carousel__inner').slick({
      infinite: true,
      speed: 1000,
      adaptiveHeight: 1,
      slidesToShow: 1,
      prevArrow: '<button type="button" class="slick-prev"><img alt="left-arrow"  src="icons/left-arrow.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img alt="right-arrow"  src="icons/right-arrow.svg"></button>',
      responsive: [
       {
          breakpoint: 1024,
          settings: {
            slidesToScroll: 3,
            dots: true,
            slidesToShow: 3
        }
       }
      ]
    });
  });
      