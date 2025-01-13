const search = document.getElementById('inpSearch');
const randomPokemonID = Math.floor(Math.random() * 151) + 1;

search.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const pokemonUserChoice = search.value.toLowerCase();
  }
});