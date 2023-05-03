const text = document.querySelector('.container-text');

window.addEventListener('keydown', (e) => {
    console.log(e.key);
    console.log(e.keyCode);
    text.innerHTML = `
        ${e.key} - event.key <br>
        ${e.keyCode} - event.keyCode <br>
        ${e.code} - event.code
    `;
})