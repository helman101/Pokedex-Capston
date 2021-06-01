import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import pokemonAPIModule from './API/PokemonAPI';
import Routes from './routes/Routes'

const defaultState = {
  filter: null,
  pokemon: null,
}

let reducer = (name='null') => {
  return name
}

const store = createStore(reducer, defaultState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);