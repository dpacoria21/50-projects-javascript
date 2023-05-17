const lineUp = document.querySelector('.line-up');
const lineDown = document.querySelector('.line-down');

const list = document.querySelector('.list');

const container = document.querySelector('.container');
const containerButton = document.querySelector('.container-button');
const listas = document.querySelectorAll('li');
console.log(listas);

containerButton.addEventListener('click', () => {

    listas.forEach((l) => {
        l.classList.toggle('girarY');
    })

    if (!container.classList.contains('show-list')) {
        lineUp.classList.toggle('girar-up');
        lineDown.classList.toggle('girar-down');
        container.classList.toggle('show-list');
        list.classList.toggle('hidden');
        setTimeout(() => {
            lineUp.classList.toggle('girar-up');
            lineDown.classList.toggle('girar-down');

            lineUp.classList.toggle('rotate-up');
            lineDown.classList.toggle('rotate-down');

        }, 900)
    } else {
        lineUp.classList.toggle('rotate-up');
        lineDown.classList.toggle('rotate-down');
        container.classList.toggle('show-list');
        lineUp.classList.toggle('girar-up');
        lineDown.classList.toggle('girar-down');
        list.classList.toggle('hidden');
        setTimeout(() => {
            lineUp.classList.toggle('girar-up');
            lineDown.classList.toggle('girar-down');
        }, 900)
    }
})