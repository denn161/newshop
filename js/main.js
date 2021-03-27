const  burger = document.querySelector('.burger'),
    close = document.querySelector('.nav__close-btn'),
       menu = document.querySelector('.header__menu');







burger.addEventListener('click',  function() {
    menu.classList.add('header__menu--visebel');
        


});

  close.addEventListener('click',  function() {
    menu.classList.remove('header__menu--visebel');



});

