export const createBottle = (container) => {
    const bottle = document.createElement('div');
    bottle.classList.add('bottle');
    container.appendChild(bottle);

    bottle.innerHTML = `
        <div class="half-empty center">
            <p> 50% </p> 
        </div>
        <div class="half-fit center">
            <p> 50% </p> 
        </div>
    `;

    // //Mitad vacia
    // const halfEmpty = document.createElement('div');
    // halfEmpty.classList.add('half-empty');   
    // halfEmpty.classList.add('center');
    // bottle.appendChild(halfEmpty);
    
    // //Mitad llenada de abajo
    // const halfFit = document.createElement('div');
    // halfFit.classList.add('half-fit');
    // halfFit.classList.add('center');
    // bottle.appendChild(halfFit);

    
}