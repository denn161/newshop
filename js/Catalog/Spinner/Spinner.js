

class Spinner{

     handelSpinner() {
        ROOT_SPINNER.innerHTML = "";
    }


    render() {
            const html = `
        <div class="spinner__container">
         <img src="js/Catalog/Spinner/img/Spinner.svg" alt="spinnerPhoto">
         </div>        
        `;

        ROOT_SPINNER.innerHTML = html;
    }

    }


const spinnerPage = new Spinner();
