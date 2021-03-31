import * as $ from 'jquery';
let menuLogo = $('.menu_item__logo');
$(window).on('scroll',function(){
    $(menuLogo).css({display: 'none'});
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