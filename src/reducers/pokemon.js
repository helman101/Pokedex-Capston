const LOADED = 'LOADED';

const pokemonReducer = (state = {}, action) => {
  if (action.type === LOADED) {
    return action.payload;
  }

  return state;
};

export default pokemonReducer;
