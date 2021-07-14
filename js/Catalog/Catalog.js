

function render() {
    productPage.render();
}

 spinnerPage.render();     
let CATALOG = [];


fetch('server/catalog.json')
    .then(result => result.json())
    .then(body => {
        CATALOG = body;
    
        setTimeout(function () {
            render();
            spinnerPage.handelSpinner();
       },1000)       
    })     
    .catch(error => {
        spinnerPage.handelSpinner();
        errorPage.render();        
        console.log(error);
    });