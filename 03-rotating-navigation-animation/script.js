const circleOptions = document.querySelector('.circle');
const container = document.querySelector('.container');

const menu = document.querySelector('.menu');
const close = document.querySelector('.close');

const navItems = document.querySelectorAll('.nav-item');


const showItems = () => {

    navItems.forEach((item, i) => {
        item.style.transition = `.5s .2s ease-in`;
        item.style.transform = `translateX(${(i+1)*10}px)`;
    });

}

const hiddenItems = () => {
    navItems.forEach((item, i) => {
        item.style.transition = `.5s ease-in`;
        item.style.transform = `translateX(-200px)`;
    });
}

menu.addEventListener('click', () => {
    circleOptions.classList.add('rotateSquare');
    circleOptions.classList.remove('rotateSquareInvert');
    container.classList.toggle('rotate');
    showItems();
});

close.addEventListener('click', () => {
    circleOptions.classList.add('rotateSquareInvert');
    circleOptions.classList.remove('rotateSquare');

    container.classList.toggle('rotate');
    hiddenItems();
});

