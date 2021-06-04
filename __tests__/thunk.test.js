import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import {
  firstPokemon, searchByType, nextPokeList, previousPokeList,
} from '../src/API/PokemonAPI';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Thunks', () => {
  afterEach(() => {
    fetchMock.resetMocks();
  });

  fetchMock.once('https://pokeapi.co/api/v2/pokemon/');

  const store = mockStore({ pokemon: { previous: 'https://pokeapi.co/api/v2/pokemon/', next: 'https://pokeapi.co/api/v2/pokemon/' } });

  describe('firstPokemon', () => {
    it('return a list of pokemons when the fecth is done', () => store.dispatch(firstPokemon).then(() => {
      expect(store.getActions()[0]).toHaveProperty('payload.results');
    }));
  });

  describe('searchByType', () => {
    it('return a list of pokemons when the fecth is done', () => store.dispatch(searchByType('water')).then(() => {
      expect(store.getActions()[0]).toHaveProperty('payload.results');
    }));
  });

  describe('nextPokeList', () => {
    it('return a list of pokemons when the fecth is done', () => store.dispatch(nextPokeList).then(() => {
      expect(store.getActions()[0]).toHaveProperty('payload.results');
    }));
  });

  describe('previousPokeList', () => {
    it('return a list of pokemons when the fecth is done', () => store.dispatch(previousPokeList).then(() => {
      expect(store.getActions()[0]).toHaveProperty('payload.results');
    }));
  });
});
