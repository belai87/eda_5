import * as $ from 'jquery';

$(document).on('click', '.tab_item', function(){
    let tabContainer = $('.tab_container'),
        tabItem = $('.tab_item'),
        content = $(this).data('content');

    $(tabItem).removeClass('tab_item__active');
    $(this).addClass('tab_item__active');
    $(tabContainer).removeClass('tab_container__active');
    $(`#${content}`).addClass('tab_container__active');
});