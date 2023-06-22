

export const fitGlasses = (fitGlasses, index, flag) => {
    let isActive = false;
    fitGlasses.forEach((glass, i) => {

        if(i<index) {
            glass.classList.add('fit');
            isActive = true;
        }else{
            glass.classList.remove('fit');
            isActive = false;
        }
    });
}