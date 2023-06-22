const getCantGlassesFit = (containerGlasses) => {
    const glasses = containerGlasses.querySelectorAll('.mini');
    return [...glasses].reduce((sum, glass) => {
        if(glass.classList.contains('fit')) {
            return sum+125;
        }else {
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
    halfEmpty.textContent = `${cantidadEmpty/10}%`;

    halfFit.style.height = `${cantidad/10}%`;
    halfFit.textContent = `${cantidad/10}%`;


}