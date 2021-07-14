class Error{
    
    render() {
        const html = `<div class="error__container">
        <div class="error__text"><h3>Нет доступа.</h3><p>Попробуйте зайти позже</p></div>
        </div>        
        `;

        ROOT_ERROR.innerHTML = html;
        document.querySelector('.error__container').addEventListener('mouseover', function () {
            document.querySelector('.error__text').classList.add('active');
            
        })
        document.querySelector('.error__container').addEventListener('mouseout', function () {
            document.querySelector('.error__text').classList.remove('active');
            
        })
    }


}
 
const errorPage = new Error();
      