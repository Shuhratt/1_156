"use strict";$(document).ready(function(){$(document).on("click",".header__burg",function(e){$(".header__top").hasClass("active")?($(this).removeClass("active"),$(".header__top").removeClass("active"),$("html, body").removeClass("hidden")):($(this).addClass("active"),$(".header__top").addClass("active"),$("html, body").addClass("hidden"))}),$(document).on("click",".header__top-box-close",function(e){$(".header__top").removeClass("active"),$("html, body").removeClass("hidden")});try{$(".slider__boxing").slick({slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!0,prevArrow:$(".slider__arrow-left"),nextArrow:$(".slider__arrow-right"),infinite:!0,responsive:[{breakpoint:1370,settings:{}},{breakpoint:968,settings:{}},{breakpoint:768,settings:{}}]})}catch(e){console.error(e)}});