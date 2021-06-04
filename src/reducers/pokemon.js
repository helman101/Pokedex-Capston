const LOADED = 'LOADED';
const FILTER_CHANGE = 'FILTER_CHANGE';

const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case LOADED: {
      return action.payload;
    }

    case FILTER_CHANGE: {
      const newState = action.payload.pokemon.map((elem) => elem.pokemon);
      return {
        ...state,
        results: newState,
      };
    }

    default:
      return state;
  }
};

export default pokemonReducer;
