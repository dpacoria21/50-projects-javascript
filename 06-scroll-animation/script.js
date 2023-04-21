const elements = document.querySelectorAll('.card');
const container = document.querySelector('.container');

window.addEventListener('scroll', () => {

    const {availHeight: height} = window.screen;

    let side = '';
    let hiddenSide = true;
    elements.forEach((element) => {
        
        const hiddenTop = element.getBoundingClientRect().y;
        const hiddenBottom = element.getBoundingClientRect().bottom;
        hiddenSide ? side = 'hidden-card-left': side ='hidden-card-right';
        if(hiddenTop <= 0 || hiddenBottom > height) {
            element.classList.add(side);
            element.classList.remove('show-card');
        }else {
            element.classList.add('show-card');
            console.log(side);
            element.classList.remove(side);
        }
        hiddenSide = !hiddenSide;
        
    });
});
