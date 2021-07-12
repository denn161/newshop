class Basket{
    constructor() {
        this.basket = {};   
       
    }    
    addedProductinToObjectBasket(productId) {
       if (!(productId in this.basket)) {
            this.basket[productId] = 1;             
        }
        else {
            this.basket[productId]++;
        }       
    }
    calculTotalSummInBasket() {
        let totalSum = 0;
        let productSumm = 0;
   
        for (let productId in this.basket) {
        productSumm += this.basket[productId];      
        totalSum+= CATALOG[productId].price*this.basket[productId];      
    }
        basketTotalValueEl.textContent = "$" + totalSum.toFixed(2);     
        basketTotalValueEl.style.color = "red";
        productTotalSummEl.textContent = productSumm;

    }
    
    renderNewProductinBasket(event) {
        let productId = event.getAttribute('data-productId');
        this.addedProductinToObjectBasket(productId);
        this.calculTotalSummInBasket();
        const productCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
        const productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);        
        if (productCountEl) {
            productCountEl.textContent++;
            productTotalRowEl.innerHTML = (this.basket[productId] * CATALOG[productId].price).toFixed(2);
        }
        else {       
          
            let htmlContent = `
        <div class="basket__list">
            <div class="product__name">${CATALOG[productId].name}</div>
            <div>
                <span class="productCount" data-productId="${productId}">1</span> шт.
            </div>
            <div>$${CATALOG[productId].price}</div>
            <div>
                $<span class="productTotalRow" data-productId="${productId}">${CATALOG[productId].price}</span>
            </div>
        </div>
         `;
        
            ROOT_BASKET.insertAdjacentHTML('beforebegin', htmlContent);
        }
             
             
    }

}

const basketPage = new Basket();



