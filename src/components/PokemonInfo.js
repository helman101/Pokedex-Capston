import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import pokemonAPIModule from '../API/PokemonAPI'

const PokemonInfo = (props) => {
  const pokemon = pokemonAPIModule.pokeAPI(props.name);

  return(
    <div>
      <div>{pokemon.game_indices.last.game_index}</div>
      <img src={pokemon.sprites.front_default} />
    </div>
  );
}

export default PokemonInfo;