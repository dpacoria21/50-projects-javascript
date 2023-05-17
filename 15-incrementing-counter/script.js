const views = [12000, 8000, 15000];

const counters = document.querySelectorAll('.counter');

counters.forEach((counter, i) => {
    let time=0;
    const count = setInterval(() => {
        if(time>=views[i]) {
            clearInterval(count);
        } 
        counter.textContent = time;
        time+=20;
    }, 1)
})


