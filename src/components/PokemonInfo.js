import React, { useState } from 'react';
import PropTypes from 'prop-types';
import pokemonAPIModule from '../API/PokemonAPI'

const PokemonInfo = (props) => {
  const [pokeInfo, setPokeInfo] = useState(null);
  pokemonAPIModule.setAPIInfo(setPokeInfo);
  if (pokeInfo != null) {
    return(
      <div>
        <div>{pokeInfo.game_indices[pokeInfo.game_indices.length - 1].game_index}</div>
        <div>{pokeInfo.name}</div>
        <img src={pokeInfo.sprites.front_default} />
      </div>
    );
  }

  return null
}

PokemonInfo.propTypes = {
  url: PropTypes.string.isRequired,
}

export default PokemonInfo;