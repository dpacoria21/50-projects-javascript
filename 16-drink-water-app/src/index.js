import './components/index';
import {createBottle, createGlasses} from  './components/index';
import {fitGlasses, fitBottle} from './helpers';

document.querySelector('#app').innerHTML = `
  <header>
    <p class="title">Drink Water</p>
    <p class="subtitle">Goal: 2 liters</p>
  </header>
  <main>
    <div class="bottle-container">
      
    </div>

    <p class="subtitle">Select how many glasses of water that you have drank</p>

    <div class="glasses-container">
    </div>


  </main>
`;
const bottle = document.querySelector('.bottle-container');
createBottle(bottle);

const glasses = document.querySelector('.glasses-container');
createGlasses(glasses);

const allGlasses = document.querySelectorAll('.mini');

allGlasses.forEach((glass) => {
  let isActive = false;
  glass.addEventListener('click', () => {

    const index = glass.getAttribute('data-index');
    if(glass.classList.contains('fit')===true && Boolean(allGlasses[index]?.classList.contains('fit'))===false){
      glass.classList.remove('fit');
    }else {
      fitGlasses(allGlasses, index);
    }

    fitBottle(bottle, glasses);
    
  })
})


