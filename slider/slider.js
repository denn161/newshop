const slider = document.querySelector('.image-slider');


const swiper = new Swiper(slider, {
    slidesPerView: 3,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    //  scrollbar: {
    //   el: '.swiper-scrollbar',
    // },


});