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

  const setAPIInfo = async (set, url) => { 
    let result = await pokemonAPIModule.pokeAPI(url);
    console.log(result)
    set(result);
  }

  return { pokeAPI, searchByName, searchByType, setAPIInfo }
})();

export default pokemonAPIModule;