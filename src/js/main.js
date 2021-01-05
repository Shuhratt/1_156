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


  const checkAll = document.querySelector('.basket__list-check input')

  if(checkAll){

    function checkingAll() {
      const items = document.querySelectorAll('.basket__item');

      function itemsCheck(el, type) {
        return el.forEach((item) => item.querySelector('input').checked = type )
      }

      if (this.checked){
        itemsCheck(items, true)
      } else{
        itemsCheck(items, false)
      }

    }

    checkAll.addEventListener('click', checkingAll)
  }


  const items = document.querySelectorAll('.basket__item');

  if(items.length > 0){
    items.forEach((item) => item.querySelector('.btn__minus').addEventListener('click', function () {
      let num =  this.parentNode.querySelector('span')

      if(num.textContent > 0){
        num.textContent = Number(num.textContent) - 1
      }

    }))

    items.forEach((item) => item.querySelector('.btn__plus').addEventListener('click', function () {
      let num =   this.parentNode.querySelector('span')
      num.textContent = Number(num.textContent) + 1
    }))
  }






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
