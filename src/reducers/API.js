const LOADED = 'LOADED';

const APILoaded = (state = {}, action) => {
  if (action.type === LOADED) {
    return {
      pokemon: action.payload,
    };
  }
  return state;
};

export default APILoaded;
