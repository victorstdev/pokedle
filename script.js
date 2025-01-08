const search = document.getElementById('inpSearch');
const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
const randomPokemon = Math.floor(Math.random() * 151) + 1;

search.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const pokemon = search.value.toLowerCase();
    console.log(pokemon, randomPokemon)
  }
});