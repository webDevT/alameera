$(function(){
$(".products__tab").click(function() {
	window.scrollBy(0, 1);
	$(".products__tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".product__tab-content-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
//start open-close mobile menu
$('.header__menu-btn').click(function(){
	$(this).toggleClass('active');
	$('.header__menu').slideToggle();
})
//end  open-close mobile menu

$(".slider-recipe .slick-slide").click(function() {;
  $(".slider-recipe .slick-slide").removeClass("active").eq($(this).index()).addClass("active");
  $(".recipe-tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$.lazyLoadXT.onload.addClass = "animated fadeIn";

$(".halawa-tab").click(function() {
  $(".halawa-tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".halawa-tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".product-recipe-tab").click(function() {
  $(".product-recipe-tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".product-recipe-tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


 $('.slider').slick({
prevArrow: false,
nextArrow: false,
slidesToShow: 4,
centerMode: true,
centerPadding: '40px',

responsive: [
   {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      centerPadding: '50px'
    }
  },
   {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      centerPadding: '6vw'
    }
  },

  ]
});


});

 $('.slider-recipe').slick({

slidesToShow: 4,
infinite: false,
prevArrow: $('.prev'),
nextArrow: $('.next'),
responsive: [
   {
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
    }
  },
   {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
    }
  },

  ]



});

 $('.othe-recipes__slider').slick({

slidesToShow: 3,
infinite: false,
prevArrow: $('.prev1'),
nextArrow: $('.next1'),
responsive: [
   {
    breakpoint: 1130,
    settings: {
      slidesToShow: 2,
    }
  },
   {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
    }
  },

  ]



});


if($(window).width() < 700) {
$(function(){
	$('span.header__menu-link').click(function(){
		$('.header__sub-menu').slideToggle();
		$(this).toggleClass('active');
	})
});
}


// function tinyScroll() {
        
//       }

