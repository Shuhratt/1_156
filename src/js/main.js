$(document).ready(function() {

  $(document).on('click', '.header__burg', function (e) {
    if ($('.header__menu').hasClass('active')) {
      $(this).removeClass('active');
      $('.header__menu').removeClass('active');
      $('html, body').removeClass('hidden');
    } else{
      $(this).addClass('active');
      $('.header__menu').addClass('active');
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

  $(document).on('click', '.item__tabs-head-link',  function() {
    var i = $(this).data('link');
    $('.item__tabs-head-link').removeClass('item__tabs-head-link_active');
    $(this).addClass('item__tabs-head-link_active');
    $('.item__tabs-item').hide().removeClass('item__tabs-item_active');
    $(`.item__tabs-item[data-tab="${i}"]`).show().addClass('item__tabs-item_active');
  });

  const itemTitle = $(document).find('.item__title_desktop').text()
  $('.item__title_mob').text(itemTitle)

  const itemAttr = $(document).find('.item__attr_desktop').html()
  $('.item__attr_mob').append(itemAttr)

  const itemInfo = $(document).find('.item__info_desktop').html()
  $('.item__info_mob').append(itemInfo)

  const linksMob = $(document).find('.header__box-link-for-mob').clone()
  linksMob.each((item, el) => {
    $('.header__menu').append(el)
  })

  const footerPay = $(document).find('.footer__pay').html()
  $('.footer__mob-pay').append(footerPay)

  const footerCopy = $(document).find('.footer__copy').html()
  $('.footer__mob-copy').append(footerCopy)

    try {

      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay: false,
        adaptiveHeight: true
      });
      $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        arrows: true,
        prevArrow: $('.item__photo-left'),
        nextArrow: $('.item__photo-right'),
        infinite: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 598,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 468,
            settings: {
              slidesToShow: 3
            }
          },
        ]

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

      $('.products__box:not(.not-slide)').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.products__box-left'),
        nextArrow: $('.products__box-right'),
        infinite: false,

        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 968,
            settings: {
              slidesToShow: 2,

            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,

            }
          }
        ]
      });



    } catch (e) {
        console.error(e);
    }

});
