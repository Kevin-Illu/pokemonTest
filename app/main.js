import { getPokemonArr } from "./fetchData.js";
import { printData } from "./renderData.js";

init();

async function init() {
  loadScreen(true);
  const pokemons = await getPokemonArr();
  loadScreen(false);
  printData(pokemons)
}

function loadScreen(isLoading) {
  const main = document.querySelector('#main');
  if (isLoading) {
    const loadDiv = document.createElement('div');
    loadDiv.classList.add('pt-6');
    loadDiv.setAttribute('id', 'loading');
    loadDiv.innerHTML = `
    <div class="spinner">
      <div class="dot1"></div>
      <div class="dot2"></div>
    </div>
    <div class="text-center">
      <p class="
        text-lg 
        font-bold
        capitalize 
        tracking-wide
        md:text-xl
        lg:text-2xl
      "
      >Loading ...</p>
    </div>
    `
    main.appendChild(loadDiv);
  } else {
    const loadDiv = document.querySelector('#loading');
    main.removeChild(loadDiv);
  }
}
