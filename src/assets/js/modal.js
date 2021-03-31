import * as $ from 'jquery';

$(document).on('click', '.modal_close', function(){
    let modalWindow = $(this).parents('.modal');
    $(modalWindow).removeClass('modal__active');
})