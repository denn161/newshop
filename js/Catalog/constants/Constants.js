
const ROOT_CATALOGS = document.querySelector('.catalogs__products');
const ROOT_BASKET = document.querySelector('.basket__total');
const basketCount = document.querySelector('.basket__count');
const basketButton = document.querySelector('.basket__link');
const basket = document.querySelector('.basket');
const basketTotalEl = document.querySelector('.basket__total');
const basketTotalValueEl = document.querySelector('.basket__total-value');
const productTotalSummEl = document.querySelector('.product__summ');

basketButton.addEventListener('click', () => {
    basket.classList.toggle('hidden');


});
