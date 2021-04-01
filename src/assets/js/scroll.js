import * as $ from 'jquery';
let menuLogo = $('.menu_item__logo');
$(window).on('scroll',function(){
    if(window.innerWidth < 767){
        let  position = $('.menu').offset().top;

        if(position > 284){
            $(menuLogo).css({display: 'flex'})
        } else {
            $(menuLogo).css({display: 'none'})
        }
    }
});
$(window).trigger('scroll');

document.addEventListener("scroll", function(){
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if(st > 370 && window.innerWidth > 767){
        $('header').addClass('relative');
        $('.menu_item__logo').css({'display': 'flex'});
        $('.menu_group .header_right').css({display: 'flex', padding: '10px 0'});
    }else{
        $('header').removeClass('relative');
        $('.menu_item__logo').css({'display': 'none'});
        $('.menu_group .header_right').css({display: 'none', padding: '0'});
    }
});

$(document).on('click', '.menu_item', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 500,
        easing: "linear"
    });

    return false;
});