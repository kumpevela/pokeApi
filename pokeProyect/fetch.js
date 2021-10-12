const API_GET_POKEMON = `https://pokeapi.co/api/v2/pokemon/`;
const API_GET_IMG = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
const NUM_POKEMON = 151;

const getPokemon = async () => {
  const response = await fetch(`${API_GET_POKEMON}?offset=0&limit=${NUM_POKEMON}`);
  const responseToJson = await response.json();
  let allCharacters = responseToJson.results;


  const paintPokemons = () => {
      const ul = document.querySelector('.display');
      let ulContent = '';

      let cont = 0;
      allCharacters.map(pokemon => {
        cont = ++cont;
        ulContent += `<li>
                          <h2>${pokemon.name}</h2>
                          <img src="${API_GET_IMG}${cont}.png"/>
                        </li>`;
      })
      ul.innerHTML = ulContent;
  }

  paintPokemons();

};

getPokemon(); 