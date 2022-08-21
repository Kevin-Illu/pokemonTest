import { getPokemonArr } from "./fetchData.js";
import { printData } from "./renderData.js";
import { loadScreen } from './loading.js';

async function init() {
  loadScreen(true);
  const pokemons = await getPokemonArr();
  loadScreen(false);
  printData(pokemons)
}

init();
