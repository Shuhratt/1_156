"use strict";$(document).ready(function(){$(document).on("click",".header__burg",function(e){$(".header__top").hasClass("active")?($(this).removeClass("active"),$(".header__top").removeClass("active"),$("html, body").removeClass("hidden")):($(this).addClass("active"),$(".header__top").addClass("active"),$("html, body").addClass("hidden"))}),$(document).on("click",".header__top-box-close",function(e){$(".header__top").removeClass("active"),$("html, body").removeClass("hidden")});try{$(".popular__slider").slick({slidesToShow:6,slidesToScroll:2,dots:!1,arrows:!0,prevArrow:$(".popular__slider-left"),nextArrow:$(".popular__slider-right"),infinite:!0,centerMode:!0,variableWidth:!1,responsive:[{breakpoint:1370,settings:{slidesToShow:3}},{breakpoint:968,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]})}catch(e){console.error(e)}});