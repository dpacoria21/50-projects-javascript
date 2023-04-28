const sonidos = document.querySelectorAll('.sound-container');
const audio = new Audio();

sonidos.forEach((sonido) => {
    sonido.addEventListener('click', () => {
        audio.src = `./sounds/${sonido.textContent.trim()}.mp3`;
        audio.play();
    })
});