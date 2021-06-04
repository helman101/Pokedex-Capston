import { filterChangeAction, loadedAction } from '../actions/pokemon';

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

const searchByType = (type) => async (dispatch) => {
  const result = await fetch(`https://pokeapi.co/api/v2/type/${type}`).then((res) => res.json());
  console.log(result);
  dispatch(filterChangeAction(result));
};

const setAPIInfo = async (set, url) => {
  const result = await fetch(url).then((res) => res.json());
  set(result);
};

const firstPokemon = async (dispatch) => {
  try {
    const result = await fetch('https://pokeapi.co/api/v2/pokemon/').then((res) => res.json());
    dispatch(loadedAction(result));
  } catch (err) {
    console.log(err);
  }
};

const pokeFilter = async (dispatch, type) => {
  const result = await fetch(`https://pokeapi.co/api/v2/type/${type}`).then((res) => res.json());
  dispatch(filterChangeAction(result));
};

export {
  pokeAPI,
  searchByName,
  searchByType,
  setAPIInfo,
  firstPokemon,
  pokeFilter,
};
