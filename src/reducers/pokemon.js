const LOADED = 'LOADED';
const FILTER_CHANGE = 'FILTER_CHANGE';

const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case LOADED: {
      console.log(action.payload);
      return action.payload;
    }

    case FILTER_CHANGE: {
      const newState = action.payload.pokemon.map((elem) => elem.pokemon);
      console.log(newState);
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
