const pokemonAPIModule = (() => {
  const pokeAPI = async (url) => {
    const result = await fetch(url);
    const data = await result.json();
    return data;
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

  const setAPIInfo = async (set, url) => {
    const result = await pokemonAPIModule.pokeAPI(url);
    set(result);
  };

  const firstPokemon = async (dispatch) => {
    const result = await pokemonAPIModule.pokeAPI('https://pokeapi.co/api/v2/pokemon/');
    dispatch({ type: 'LOADED', payload: result });
  };

  const pokeFilter = async (dispatch, type) => {
    const result = await pokemonAPIModule.pokeAPI(`https://pokeapi.co/api/v2/type/${type}`);
    dispatch({ type: 'LOADED', payload: result.pokemon });
  };

  return {
    pokeAPI, searchByName, searchByType, setAPIInfo, firstPokemon, pokeFilter,
  };
})();

export default pokemonAPIModule;
