import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PokemonInfo = (props) => {
  const { pokemon } = props;

  return(
    <div>
      <div>{pokemon.game_indices.last.game_index}</div>
      <img src={pokemon.sprites.front_default} />
    </div>
  );
}

export default PokemonInfo;