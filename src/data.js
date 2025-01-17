
function searchData(inputValue, list) {
  const newSearch = list.filter(pokemon => pokemon.name.includes(inputValue));
  return newSearch;
}

function filterPokemon(value, list) {
  const newFilter = list.filter(pokemon => pokemon.type.includes(value));
  return newFilter;
}

function filterRarityPokemon(value, list) {
  const newFilterRarity = list.filter(pokemon => pokemon.pokemonRarity.includes(value));
  return newFilterRarity;
}

function order(value, list) {
  const copia = [...list]
  if (value === "a-z") {
    copia.sort(function(a,b){
      if(a.name < b.name){
        return -1;
      }
        return 1;
    });
  }
  else if (value === "z-a") {
    copia.sort(function(a,b){
      if(a.name < b.name){
        return 1;
      }
        return -1;
    })
  }
  return copia
}

function computerType (newFilter, list) {
  return ((newFilter.length / list.length)*100).toFixed(2)
}

export {
  searchData,
  filterPokemon,
  filterRarityPokemon, 
  order, 
  computerType
};

//criar uma função que pegue o valor escrito no input
//consulte o pokemon.js(data) e imprima na tela todos com aquele nome
