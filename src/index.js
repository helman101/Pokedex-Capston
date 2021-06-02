import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import pokemonAPIModule from './API/PokemonAPI';
import Routes from './routes/Routes'

const defaultState = {
  pokemon: {},
}

let reducer = (state = {}, action) => {
  if (action.type === 'LOADED') {
    return {
      pokemon: action.payload
    }
  }

  return state
}

const store = createStore(reducer, defaultState, applyMiddleware(thunk));

let twentyPokemon = async (dispatch, getState) => {
  let result = await pokemonAPIModule.pokeAPI('https://pokeapi.co/api/v2/pokemon/');
  dispatch({ type: 'LOADED', payload: result });
}

store.dispatch(twentyPokemon)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);