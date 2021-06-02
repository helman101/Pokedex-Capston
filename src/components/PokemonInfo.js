import React, { useState } from 'react';
import PropTypes from 'prop-types';
import pokemonAPIModule from '../API/PokemonAPI'

const PokemonInfo = (props) => {
  const [pokeInfo, setPokeInfo] = useState(null);
  pokemonAPIModule.setAPIInfo(setPokeInfo, props.url);
  return(
    <div>
      {pokeInfo && <div>{pokeInfo.game_indices[pokeInfo.game_indices.length - 1].game_index}</div>}
      {pokeInfo && <div>{pokeInfo.name}</div>}
      {pokeInfo && <img src={pokeInfo.sprites.front_default} alt={pokeInfo.name} />}
    </div>
  )
}

PokemonInfo.propTypes = {
  url: PropTypes.string,
}

export default PokemonInfo;