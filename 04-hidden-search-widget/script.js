const container = document.querySelector('.container-search');

const lupa = document.querySelector('.lupa');

lupa.addEventListener('click', () => {
    container.classList.toggle('hidden');
})