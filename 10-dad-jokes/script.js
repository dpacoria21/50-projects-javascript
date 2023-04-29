const apiURL = 'https://icanhazdadjoke.com/slack';

const button = document.querySelector('.card-button');
const containerJoke = document.querySelector('.card-content');

const getJoke = async () => {
    try{
        const res = await fetch(`${apiURL}`);
        const [joke] = (await res.json()).attachments;
        containerJoke.innerHTML = joke.text;
    }catch(err) {
        console.log(err);
    }
}

button.addEventListener('click', getJoke);

getJoke();