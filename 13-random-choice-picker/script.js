const textareaBox = document.querySelector('textarea');
const resultadoBox = document.querySelector('.container-box');


let texto = '';
let picker;

const generateTextBox = (text) => {
    const words = text.split(',');
    let html = '';
    words.forEach((word) => {
        if(word != '') {
            html += `
                <p class="text-box">${word}</p>
            `;    
        }
    });
    resultadoBox.innerHTML = html;
}

const randomNumber = (max) => {
    return Math.floor(Math.random()*(max));
}

const getWinner = (boxes) => {
    return new Promise((resolve, reject) => {
        let random;
        let time = (boxes.length/3+1)*1000;
        picker = setInterval(() => {
            if(time<=0) {
                clearInterval(picker);
                // boxes[random].style.background = '#e423a2';
                resolve(random);
                return;
            }
            random = randomNumber(boxes.length);
            boxes[random].style.background = '#a3e6f2';
            color = setTimeout(() => {
                boxes[random].style.background = '#e3a376';
            }, 150);
            time-=300;
        }, 200);
    })
}

const startRandomChoice = async(boxes) => {
    const winner = await getWinner(boxes);
    boxes[winner].style.background = '#a3e6f2';
}

textareaBox.addEventListener('input', (e) => {
    if(textareaBox.value.trim() === '') {
        textareaBox.value = '';
        return;
    };
    if(e.inputType === 'insertLineBreak') {
        startRandomChoice(resultadoBox.querySelectorAll('.text-box'));
        textareaBox.value = ''; 
    }else {
        generateTextBox(textareaBox.value);
    }
});