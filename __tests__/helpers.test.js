import pokeIndex from '../src/utilities/helpers';

describe('helpers', () => {
  describe('pokeIndex', () => {
    it('retuns the info name capitalized', () => {
      const info = { id: 5, name: 'minus' };
      expect(pokeIndex(info).name).toMatch('Minus');
    })
    it('retuns the info id organized', () => {
      const info = { id: 5, name: 'minus' };
      expect(pokeIndex(info).pokI).toMatch('Nº 005');
    })
  })
})