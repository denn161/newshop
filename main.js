const hb = document.querySelector('.header__btn');
const menu = document.querySelector('.header');
const close = document.querySelector('.menu__close-btn');
const hidden = document.querySelector('body');
const slider =document.querySelector('.image-slider')
  
hb.addEventListener('click', function () {
  menu.classList.toggle('active');
  hidden.classList.toggle('lock');
});

const swiper = new Swiper(slider, {
  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  //  scrollbar: {
  //   el: '.swiper-scrollbar',  // },


});


    

  



































