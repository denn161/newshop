const hb = document.querySelector('.header__btn');
const menu = document.querySelector('.header__menu');
const close = document.querySelector('.menu__close-btn');
const link = document.querySelector('.menu__list-link');





  

  
hb.addEventListener('click', function (e) {
  e.preventDefault();


  menu.classList.add('active'); 


});
close.addEventListener('click', function () {
  menu.classList.remove('active');
  
});

// women__btn.addEventListener('click', function () {

//   service.classList.toggle('women--active');


// });








// $(function () {
//   $('.product__slider').slick({
//     slidesToShow: 1,
//     dots: false,
//     // adaptiveHeight: true,
//     prevArrow: '<button class="product-slider__btn product-slider__btn-prev btn__reset"><img src="images/arrow-left.svg" alt=""></button>',
//     nextArrow: '<button class="product-slider__btn product-slider__btn-next btn__reset "><img src="./images/arrow-right.svg" alt=""></button>',

//   });
// });

new Swiper('.image-slider', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  //  scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  



});






























// $(function () {
//   $('.slider').slick({
//     arrows: false,
//     fade: true,
//     autoplay: 3000,
//     dots: true




//   });

//   $('.burger').on('click', function () {
//     $('.header__menu').addClass('menu--visibel');



//   });
//   $('.nav__close-btn').on('click', function () {
//     $('.header__menu').removeClass('menu--visibel');

//   });



// });























// const  burger = document.querySelector('.burger'),
//     close = document.querySelector('.nav__close-btn'),
//        menu = document.querySelector('.header__menu');

// burger.addEventListener('click',  function() {
//     menu.classList.add('header__menu--visebel');      


// });

//   close.addEventListener('click',  function() {
//     menu.classList.remove('header__menu--visebel');



// });

