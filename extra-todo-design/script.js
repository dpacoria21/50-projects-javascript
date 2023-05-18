const buttons = document.querySelectorAll('.todo-options');

const movementes = [
    [100, 125],
    [200, 0],
    [100, -125],
];

buttons.forEach((button) => {
    let active = true;
    const options = button.querySelectorAll('.option');
    button.addEventListener('click', () => {
        if(active) {
            options.forEach((option, i) => {
                option.style.transform = `translate(-${movementes[i][0]}%, ${movementes[i][1]}%)`;
                option.style.transitionDelay = `.${(i+1)*2}s`;
                option.style.zIndex = '2';
            })
        }else {
            options.forEach((option, i) => {
                option.style.transform = `translate(0, 0)`;
                option.style.transitionDelay = `.${(i+1)*2}s`;
                option.style.zIndex = '-1';
            })
        }
        active = !active;
    })
})

