import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import pokemonAPIModule from './API/PokemonAPI';
import Routes from './routes/Routes';
import pokemonReducer from './reducers/pokemon';
import filterReducer from './reducers/type';
import './index.css';

const defaultState = {
  pokemon: {},
  filter: 'All',
};

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

store.dispatch(pokemonAPIModule.firstPokemon);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
