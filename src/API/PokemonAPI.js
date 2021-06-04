import { filterChangeAction, loadedAction } from '../actions/pokemon';

const nextPokeList = async (dispatch, getState) => {
  if (getState().pokemon.next) {
    try {
      const result = await fetch(getState().pokemon.next).then((res) => res.json());
      dispatch(loadedAction(result));
    } catch (err) {
      console.log(err);
    }
  }
};

const previousPokeList = async (dispatch, getState) => {
  if (getState().pokemon.previous) {
    try {
      const result = await fetch(getState().pokemon.previous).then((res) => res.json());
      dispatch(loadedAction(result));
    } catch (err) {
      console.log(err);
    }
  }
};

const searchByType = (type) => async (dispatch) => {
  const result = await fetch(`https://pokeapi.co/api/v2/type/${type}`).then((res) => res.json());
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

export {
  setAPIInfo,
  nextPokeList,
  firstPokemon,
  searchByType,
  previousPokeList,
};
