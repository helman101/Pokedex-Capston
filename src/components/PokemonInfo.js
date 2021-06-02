import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import pokemonAPIModule from '../API/PokemonAPI'

const PokemonInfo = (props) => {
  const [pokeInfo, setPokeInfo] = useState(null);
  const pokemon = async () => { 
    let result = await pokemonAPIModule.pokeAPI(props.url);
    console.log(result)
    setPokeInfo(result);
  }
  pokemon();
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

export default PokemonInfo;