const elements = document.querySelectorAll('.card');
const container = document.querySelector('.container');

window.addEventListener('scroll', () => {

    let side = '';
    let hiddenSide = true;
    
    elements.forEach((element) => {

        console.log(hiddenSide);        
        const {availHeight: height} = window.screen;

        const hiddenTop = element.getBoundingClientRect().y;
        const hiddenBottom = element.getBoundingClientRect().bottom;

        hiddenSide ? side = 'hidden-card-left': side ='hidden-card-right';
        
        if(hiddenTop <= 0 || hiddenBottom >= height) {
            element.classList.add(side);
            element.classList.remove('show-card');
        }else {
            element.classList.add('show-card');
            element.classList.remove(side);
        }
        hiddenSide = !hiddenSide;
        
    });
});
