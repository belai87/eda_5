import * as $ from 'jquery';

$(document).ready(function(){
   let slider = $('.slider_wrapper');
    var time = 4;
    var $bar,
        $slick,
        isPause,
        tick,
        percentTime;

   $(slider).slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '400px',
        variableWidth: false,
        autoplay: true,
        autoplaySpeed: 4000,
       responsive: [
           {
               breakpoint: 1200,
               settings: {
                   centerPadding: '200px',
               }
           },
           {
               breakpoint: 767,
               settings: {
                   centerPadding: '30px',
               }
           }
       ]
    });

    //$bar = $('.slider-progress .progress');
    $bar = $('.slider_line .slider_line-timer');


    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10);
    }

    function interval() {
        if(isPause === false) {
            percentTime += 1 / (time+0.1);
            $bar.css({
                width: percentTime+"%"
            });
            if(percentTime >= 100)
            {
                $(slider).slick('slickNext');
                startProgressbar();
            }
        }
    }


    function resetProgressbar() {
        $bar.css({
            width: 0+'%'
        });
        clearTimeout(tick);
    }

    startProgressbar();

});
