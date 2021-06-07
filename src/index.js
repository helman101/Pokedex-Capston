import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { firstPokemon } from './API/PokemonAPI';
import Routes from './routes/Routes';
import pokemonReducer from './reducers/pokemon';
import currentReducer from './reducers/current';
import './index.css';

const defaultState = {
  pokemon: {},
  currentPokemon: {},
};

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  currentPokemon: currentReducer,
});

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

store.dispatch(firstPokemon);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
