const inputs = document.querySelectorAll('.form-input');

const letters = document.querySelectorAll('.placeholder');



inputs.forEach((input, i) => {
    const label = letters[i].querySelectorAll('p');
    input.addEventListener('focus', (e) => {
        e.preventDefault();
        // console.log('Hizo focus');
        label.forEach((letter, i) => {
            setTimeout(() => {
                letter.style.transform = `translateY(8px)`;
                setTimeout(() => {
                    letter.style.transform = ``;
                    letter.classList.add('elevate-placeholder');
                },90);

                input.style.borderBottom = `2px solid #769bf0`;
            }, (100 * (i + 1)))
        })
    });

    input.addEventListener('blur', (e) => {
        e.preventDefault();

        if (!!input.value) return;

        label.forEach((letter, i) => {
            setTimeout(() => {
                letter.style.transform = `translateY(-35px)`;
                setTimeout(() => {
                    letter.style.transform = ``;
                    letter.classList.remove('elevate-placeholder')
                    input.style.borderBottom = `2px solid #fff`;
                }, 90)
            }, 100 * (i + 1));
        })
    })
})
