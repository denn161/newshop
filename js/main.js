
$(function () {
  $('.slider').slick({
    arrows: false,
    fade: true,
    autoplay: 3000,
    dots: true




  });

  $('.burger').on('click', function () {
    $('.header__menu').addClass('menu--visibel');



  });
  $('.nav__close-btn').on('click', function () {
    $('.header__menu').removeClass('menu--visibel');

  });



});























// const  burger = document.querySelector('.burger'),
//     close = document.querySelector('.nav__close-btn'),
//        menu = document.querySelector('.header__menu');

// burger.addEventListener('click',  function() {
//     menu.classList.add('header__menu--visebel');      


// });

//   close.addEventListener('click',  function() {
//     menu.classList.remove('header__menu--visebel');



// });
