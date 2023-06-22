const getCantGlassesFit = (containerGlasses) => {
    const glasses = containerGlasses.querySelectorAll('.mini');
    return [...glasses].reduce((sum, glass) => {
        if(glass.classList.contains('fit')) {
            glass.style.color = '#fff';
            return sum+125;
        }else {
            glass.style.color = '#000'
            return sum+0;
        }
    }, 0);
}

export const fitBottle = (containerBottle, containerGlasses) => {
    const cantidad = getCantGlassesFit(containerGlasses);
    
    const halfEmpty = containerBottle.querySelector('.half-empty');
    const halfFit = containerBottle.querySelector('.half-fit');

    const cantidadEmpty = 1000-cantidad;

    halfEmpty.style.height = `${(cantidadEmpty)/10}%`;
    halfEmpty.innerHTML = `<p>${cantidadEmpty/1000}L</p><p>remained</p>`;

    halfFit.style.height = `${cantidad/10}%`;
    halfFit.innerHTML = `<p>${cantidad/10}%</p>`;
}