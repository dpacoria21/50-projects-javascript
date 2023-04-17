const images = document.querySelectorAll('.img');

images.forEach((image) => {
    image.addEventListener('click', () => {
        images.forEach((img) => img.classList.remove('select'));
        image.classList.add('select');
    });
});
