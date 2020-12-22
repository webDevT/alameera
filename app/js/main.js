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


$.lazyLoadXT.onload.addClass = "animated fadeIn";





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

