import './components/index';
import {createBottle, createGlasses} from  './components/index';

document.querySelector('#app').innerHTML = `
  <header>
    <p class="title">Drink Water</p>
    <p class="subtitle">Goal: 2 liters</p>
  </header>
  <main>
    <div class="bottle-container">
      
    </div>
    <div class="glasses-container">
    </div>
  </main>
`;
const bottle = document.querySelector('.bottle-container');
createBottle(bottle);

const glasses = document.querySelector('.glasses-container');
createGlasses(glasses);
