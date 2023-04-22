// const cards = document.querySelectorAll('.card');
// const hidden = true;

// function callback(entries, observer) {
//     console.log(entries);
//     entries.forEach((entry) => {
//         console.log('Hola bb!');
//         if(entry.isIntersecting) {
//             console.log('Elemento visible');
//         }else {
//             console.log('No es visible su elemento');
//         }
//     });
// }

// const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 1
// };

// const observer = new IntersectionObserver(callback, options);

// cards.forEach((card) => {
//     observer.observe(card);
// })

const cards = document.querySelectorAll('.card');
let hidden = true;

cards.forEach((card) => {
    let hiddenSide = hidden ? 'hidden-card-left' : 'hidden-card-right'
    card.classList.add(hiddenSide);
    hidden = !hidden;
})


function callback(entries, observer) {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            console.log('Esta dentro uwu', entry.target);
            entry.target.classList.add('show-card');
        }else {
            console.log('Salio de la pantalla')
            entry.target.classList.remove('show-card');
        }
    })
}

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
}

const observer = new IntersectionObserver(callback, options);

cards.forEach(card => {
    observer.observe(card);
})