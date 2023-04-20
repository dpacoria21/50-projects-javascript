const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const barCharge = document.querySelector('.bar-charge');
const numbers = [...document.querySelectorAll('.circle')];

let charge = 100;
let position = 3;

const activatedButtons = (position) => {    
    if(position === 3) {
        next.classList.add('isPossible');
        prev.classList.remove('isPossible');
    }else if(position < 3 && position >= 1) {
        prev.classList.add('isPossible');
        next.classList.add('isPossible');
    }else {
        prev.classList.add('isPossible');
        next.classList.remove('isPossible');
    }
}

next.addEventListener('click', () => {
    if(position === 0) return;
    barCharge.style.transform = `translateX(-${33*(--position)}%)`;
    activatedButtons(position);
    numbers[3-position].classList.add('isActive');
});

prev.addEventListener('click', () => {
    if(position === 3) return;
    barCharge.style.transform = `translateX(-${33*(++position)}%)`;
    activatedButtons(position);
    numbers[4-position].classList.remove('isActive');
});