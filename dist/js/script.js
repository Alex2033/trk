$(document).ready(function () {

    
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
    autoplay: true
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    prevArrow:"<button type='button' class='gallery__pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='gallery__pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",

    responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
});
   
    $('.shares-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true
    });

    /* Табы на странице Плана сайта */

    $(".tab-content").not(":first").hide();
    $(".tabs__item").click(function() {
        $(".tabs__item").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab-content").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".alt-tab-content").not(":first").hide();
    $(".alt-tabs-item").click(function() {
        $(".alt-tabs-item").removeClass("active").eq($(this).index()).addClass("active");
        $(".alt-tab-content").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".services-tab-content").not(":first").hide();
    $(".services-content__level").click(function() {
        $(".services-content__level").removeClass("active").eq($(this).index()).addClass("active");
        $(".services-tab-content").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".services-content").not(":first").hide();
    $(".services-menu .lease__left-item").click(function() {
        $(".services-menu .lease__left-item").removeClass("active").eq($(this).index()).addClass("active");
        $(".services-content").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".alt-services-content").not(":first").hide();
    $(".services-menu__item").click(function() {
        $(".services-menu__item").removeClass("active").eq($(this).index()).addClass("active");
        $(".alt-services-content").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    var windowWidth = document.documentElement.clientWidth;
    if (windowWidth <= 768) {
        $('.lease__slider').slick({
            slidesToShow: 1,
            dots: true,
            arrows: false
        });
    }

    $('.lease__next').click(function(){
        $('.lease__slider').slickNext();
    });
    $('.lease__prev').click(function(){
        $('.lease__slider').slickPrev();
    });

    $('#contact__btn').click(function(){
        $('.contact__callback-form').css({
            'display':'block'
        })
    });

    $('.contact__cross').click(function(){
        $('.contact__callback-form').css({
            'display':'none'
        })
    });

    $('.search__sort').click(function(e){
        e.preventDefault();
        console.log('lcics');
        $('.search__sort').removeClass('search__sort--active');
        $(this).addClass('search__sort--active');
    });

   
    
    $('.censors__slider').slick({
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 550,
                settings: {
                    centerPadding: '30px',
                    slidesToShow: 1
                }
            }
        ]
    });


    $(window).resize(function () {

        $('.menu__nav').removeClass('header__block');
        var windowWidth = document.documentElement.clientWidth;

        if (windowWidth <= 768) {
            $('.lease__slider').slick({
                slidesToShow: 1,
                dots: true,
                arrows: false
            });
        }
    })

    $('.mobile-menu').click(function(){
        $('.mobile-menu__list').toggleClass('header__block');
        $(document).find('.menu__nav').removeClass('header__block');
        $('.mobile-menu .hamburger').toggleClass('is-active');
    });

    $('.hidden-categories').click(function() {
        $('.hidden-categories .hamburger').toggleClass('is-active');
    });

    if ( $(window).width() <= 767 ) {
        $('.menu').click(function() {
            $('.menu .hamburger').toggleClass('is-active');
        });
    }

    $('.menu').click(function(e){
        e.preventDefault();
        $('.menu__nav').toggleClass('header__block');
        $('.trade__list').removeClass('header__block');
        $(document).find('.mobile-menu__list').removeClass('header__block');
    });

    $('#footer__complex').click(function(){
        event.preventDefault();
        $('#footer__complex-list').toggleClass('header__block');
        $(this).find('.header__angle-down').toggleClass('header__rotate');
    });

    $('#about-complex').click(function(){
        event.preventDefault();
        $('.trade__list').removeClass('header__block');
        $('.trade').find('.trade__angle-down').removeClass('trade__rotate');
        $('#complex__list').toggleClass('header__block');
        $(this).find('.trade__angle-down').toggleClass('trade__rotate');
    });

    

    $('.trade').click(function(){
        event.preventDefault();
        $('#complex__list').removeClass('header__block');
        $('#about-complex').find('.trade__angle-down').removeClass('trade__rotate');

        $('.trade__list').toggleClass('header__block');
        $(this).find('.trade__angle-down').toggleClass('trade__rotate');
    });

    $('.complex-list').click(function(e) {
      e.stopPropagation();
    });
    $('.header__menu-sub').click(function(e) {
      e.stopPropagation();
    });

    // Попап окна для раскрытия картинок
    $(function() {
        $("[data-fancybox]").fancybox();
    });

    for (var i = 1; i <= 4; i++) {
        $('.checkbox' + i).change(function(){
            $('input[name="' + $(this).attr('name') +'"]').removeAttr('checked');
            $(this).prop('checked', true);
        }); 
    }
    
    $(function(){
        $('input[type="radio"]').click(function(){
            $(this).attr('checked', function(index, attr){
            return attr ? null : 'checked';
            });
        });
    });

    $('.card-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });
        
 
});

$(document).ready(function(){
	$(document).on('click', '.services-content__link', function(event){
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 400);
	});
});

$(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$("#scrollUp").fadeIn();
		}
		else {
			$("#scrollUp").fadeOut();
		}
	});
	$("#scrollUp").click(function() {
		$("body, html").animate({
			scrollTop: 0
		}, 400);
		return false;
	});
});

$(function() {
    $('.header__menu-list').superfish();
});

$(function() {
    $('.menu').click(function() {
        $('.header__menu').toggleClass('active');
    });
});

$(function() {
    $(".shop-zone-content").not(":first").hide();
    $(".shops__level").click(function() {
        $(".shops__level").removeClass("active").eq($(this).index()).addClass("active");
        $(".shop-zone-content").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
});

function hideCaregories() {

    var $containerWidth = $(window).width();

    if ($containerWidth <= 767) {
        $('.hidden-categories').click(function() {
            if ($('.card__category').is(":visible")) {
                $('.card__category').hide();
            } else {
                $('.card__category').show();
            }
            
        });
    } else {
        $('.hidden-categories').unbind('click');
    }
    
}

$(document).ready(function () {
    hideCaregories();
});