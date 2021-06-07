import changeCurrentPokemon from '../src/actions/current';
import { loadedAction, filterChangeAction } from '../src/actions/pokemon';

describe('Actions', () => {
  const objectTest = { say: 'Hi!' };
  describe('changeCurrentPokemon', () => {
    it('returns an object', () => {
      expect(changeCurrentPokemon(objectTest)).toBeInstanceOf(Object);
    });
    it('the object should contain a payload property', () => {
      expect(changeCurrentPokemon(objectTest).payload).toEqual(objectTest);
    });
    it('the type property should be equal to CHANGE_CURRENT', () => {
      expect(changeCurrentPokemon(objectTest).type).toMatch('CHANGE_CURRENT');
    });
  });
  describe('loadedAction', () => {
    it('returns an object', () => {
      expect(loadedAction(objectTest)).toBeInstanceOf(Object);
    });
    it('the object should contain a payload property', () => {
      expect(loadedAction(objectTest).payload).toEqual(objectTest);
    });
    it('the type property should be equal to LOADED', () => {
      expect(loadedAction(objectTest).type).toMatch('LOADED');
    });
  });
  describe('filterChangeAction', () => {
    it('returns an object', () => {
      expect(filterChangeAction(objectTest)).toBeInstanceOf(Object);
    });
    it('the object should contain a payload property', () => {
      expect(filterChangeAction(objectTest).payload).toEqual(objectTest);
    });
    it('the type property should be equal to FILTER_CHANGE', () => {
      expect(filterChangeAction(objectTest).type).toMatch('FILTER_CHANGE');
    });
  });
});
