document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
});

function eventListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
    // console.log('mobilemenu');
}

function navegacionResponsive(){
    const navegacion = document.querySelector('.navegacion');

    navegacion.classList.toggle('mostrar');
    // console.log('clickiiiii');
}


//============================ carrusel
(function () {
    const sliders = [...document.querySelectorAll('.slider__body')];
    //console.log(sliders);
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');
    let value;

    arrowNext.addEventListener('click', ()=>changePosition(1));
    arrowBefore.addEventListener('click', ()=>changePosition(-1));


    function changePosition(change){
        // console.log(change)
        const currentElement = Number(document.querySelector('.slider__body--show').dataset.id);

        //console.log(currentElement)

        value = currentElement;
        value+= change; 
        // console.log(value);
        console.log(sliders.length);
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle('slider__body--show');
        sliders[value-1].classList.toggle('slider__body--show');

    }
    
})()
