import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import pokemonAPIModule from './API/PokemonAPI';
import Routes from './routes/Routes';
import APILoaded from './reducers/pokemon';
import './index.css';

const defaultState = {
  pokemon: {},
};

const store = createStore(APILoaded, defaultState, applyMiddleware(thunk));

store.dispatch(pokemonAPIModule.firstPokemon);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
