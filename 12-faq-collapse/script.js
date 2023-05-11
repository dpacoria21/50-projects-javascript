const cards = document.querySelectorAll('.card');

const rectangulos = document.querySelectorAll('.rectangulo');
const texts = document.querySelectorAll('.card-body');

const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    let hidden = true;
    button.addEventListener('click', () => {
        button.classList.toggle('hidden');
        const card = button.closest('.card');
        card.classList.toggle('addHeight');

        const bodyText = card.querySelector('.card-body');
        bodyText.classList.toggle('show-body');
        
        const rectangulos = card.querySelectorAll('.rectangulo');
        rectangulos.forEach((rect) => {
            rect.classList.toggle('hidden');
        })
    })
})

rectangulos.forEach((rect) => {
    rect.classList.toggle('hidden');
});


