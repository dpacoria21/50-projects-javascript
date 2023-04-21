const cards = document.querySelectorAll('.card');
const hidden = true;

function callback(entries, observer) {
    console.log(entries);
    entries.forEach((entry) => {
        console.log('Hola bb!');
        if(entry.isIntersecting) {
            console.log('Elemento visible');
        }else {
            console.log('No es visible su elemento');
        }
    });
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1
};

const observer = new IntersectionObserver(callback, options);

cards.forEach((card) => {
    observer.observe(card);
})