const pokemonAPIModule = (() => {
  let pokeAPI = async (url) => {
    let result = await fetch(url);
    let data = await result.json();
    return data;
  }

  let searchByName = async (name) => {
    let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let data = await result.json();
    return data;
  }

  let searchByType = async (type) => {
    let result = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    let data = await result.json();
    return data;
  }

  return { pokeAPI, searchByName, searchByType }
})();

export default pokemonAPIModule;