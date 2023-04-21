let count = 0;
let blur = 20;

const fondo = document.querySelector('.container');
const percent = document.querySelector('.percent');

setInterval(() => {
    if(count === 100) return;
    count += 1;
    blur -= 0.20;
    fondo.style.filter = `blur(${blur}px)`;
    percent.style.opacity = `${1 - count/100}`; 
    percent.textContent = `${count}%`;
}, 25);