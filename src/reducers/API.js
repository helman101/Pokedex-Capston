const LOADED = 'LOADED';

let APILoaded = (state = {}, action) => {
  if (action.type === 'LOADED') {
    return {
      pokemon: action.payload
    }
  }
  return state
}

export default APILoaded;

