import * as $ from 'jquery';

$(document).on('click', '.product_add', function(){
    let modal = $('.modal');
    $(modal).addClass('modal__active');
});