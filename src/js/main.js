$(document).ready(function() {

  $(document).on('click', '.header__burg', function (e) {
    if ($('.header__top').hasClass('active')) {
      $(this).removeClass('active');
      $('.header__top').removeClass('active');
      $('html, body').removeClass('hidden');
    } else{
      $(this).addClass('active');
      $('.header__top').addClass('active');
      $('html, body').addClass('hidden');
    }
  });

  $('.quest-row').each( function (i, el)  {
    $(el).on('click', function (e) {
      $('.quest-row').removeClass('active');
      $(this).addClass('active')
    });
  })

  $(document).on('click', '.header__top-box-close', function (e) {
    $('.header__top').removeClass('active');
    $('html, body').removeClass('hidden');
  });

    try {

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
        focusOnSelect: true

      });

        $('.slider__boxing').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            prevArrow: $('.slider__arrow-left'),
            nextArrow: $('.slider__arrow-right'),
            infinite: true,

            responsive: [
                {
                    breakpoint: 1370,
                    settings: {

                    }
                },
                {
                    breakpoint: 968,
                    settings: {


                    }
                },
              {
                breakpoint: 768,
                settings: {


                }
              }
            ]
        });





    } catch (e) {
        console.error(e);
    }

});
