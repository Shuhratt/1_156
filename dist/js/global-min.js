"use strict";$(document).ready(function(){$(document).on("click",".header__burg",function(e){$(".header__top").hasClass("active")?($(this).removeClass("active"),$(".header__top").removeClass("active"),$("html, body").removeClass("hidden")):($(this).addClass("active"),$(".header__top").addClass("active"),$("html, body").addClass("hidden"))}),$(".quest-row").each(function(e,t){$(t).on("click",function(e){$(".quest-row").removeClass("active"),$(this).addClass("active")})}),$(document).on("click",".header__top-box-close",function(e){$(".header__top").removeClass("active"),$("html, body").removeClass("hidden")});var e=document.querySelector(".basket__list-check input");if(e){e.addEventListener("click",function(){var e=document.querySelectorAll(".basket__item");function t(e,t){return e.forEach(function(e){return e.querySelector("input").checked=t})}this.checked?t(e,!0):t(e,!1)})}var t=document.querySelectorAll(".basket__item");t.length>0&&(t.forEach(function(e){return e.querySelector(".btn__minus").addEventListener("click",function(){var e=this.parentNode.querySelector("span");e.textContent>0&&(e.textContent=Number(e.textContent)-1)})}),t.forEach(function(e){return e.querySelector(".btn__plus").addEventListener("click",function(){var e=this.parentNode.querySelector("span");e.textContent=Number(e.textContent)+1})}));try{$(".slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".slider-nav",autoplay:!1,adaptiveHeight:!0}),$(".slider-nav").slick({slidesToShow:6,slidesToScroll:1,asNavFor:".slider-for",dots:!1,centerMode:!1,focusOnSelect:!0,arrows:!0,prevArrow:$(".item__photo-left"),nextArrow:$(".item__photo-right"),infinite:!1}),$(".slider__boxing").slick({slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!0,prevArrow:$(".slider__arrow-left"),nextArrow:$(".slider__arrow-right"),infinite:!0,responsive:[{breakpoint:1370,settings:{}},{breakpoint:968,settings:{}},{breakpoint:768,settings:{}}]})}catch(e){console.error(e)}});