const pokemonAPIModule = (() => {
  const pokeAPI = async (url) => {
    const pokemon = await fetch(url).then((res) => res.json()).then((poke) => poke);
    console.log(pokemon);
    return pokemon;
  };

  const searchByName = async (name) => {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await result.json();
    return data;
  };

  const searchByType = async (type) => {
    const result = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const data = await result.json();
    return data;
  };

  const setAPIInfo = async (url) => {
    const result = await fetch(url).then((res) => res.json());
    return result;
  };

  const firstPokemon = async (dispatch) => {
    const result = await fetch('https://pokeapi.co/api/v2/pokemon/').then((res) => res.json());
    dispatch({ type: 'LOADED', payload: result });
  };

  const pokeFilter = async (dispatch, type) => {
    const result = await fetch(`https://pokeapi.co/api/v2/type/${type}`).then((res) => res.json());
    dispatch({ type: 'LOADED', payload: result });
  };

  return {
    pokeAPI, searchByName, searchByType, setAPIInfo, firstPokemon, pokeFilter,
  };
})();

export default pokemonAPIModule;
