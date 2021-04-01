import * as $ from "jquery";

$(document).ready(function(){
    let slider = $('.combo_slider');

    $(slider).slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 10,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    });
});
