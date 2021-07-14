'use strict'
/**
 * Класс отрисовывает карточки товаров на стринце 
 */
class ProductsCart{
    constructor() {        
      this.addToCart = 'Add to Cart';    
    
  } 
  /**
   * Метод вызывается при клике на кнопку на карточке товара
   * @param {object} event 
   */
  addedProductinToBasket(event) {
    basketCount.textContent++;
    basketPage.renderNewProductinBasket(event);
        
  }
    render() {
        let htmlContent = "";
        
        CATALOG.forEach(({ id, name, img, descr, price }) => {
            
          htmlContent += `<li class="products-item catalog__products-item">
            <div class="products__images">
            <div class="products__hover">
            <button class="products-item__btn-hover btn__reset" data-productId="${id}" onclick="productPage.addedProductinToBasket(this);">     
            ${this.addToCart}</button>
            </div>
            <img src="${img}" alt="productPhoto" class="products__img">
            </div>
            <div class="products-item__content">
            <h3 class="products__title">
           ${name}
            </h3>
            <p class="products__text">
              ${descr}
            </p>
            <p class="products__price">${price.toLocaleString()} USD</p>
            </div>    
        </li>
    `;
        });

        const html = `<div class="container">
         <ul class = "fetured__products catalog__products">
         ${htmlContent}        
         </ul>        
        </div>`;
        ROOT_CATALOGS.insertAdjacentHTML('afterbegin', html);
  } 

}
 
const productPage = new ProductsCart();




