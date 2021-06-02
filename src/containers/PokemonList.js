import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PokemonInfo from '../components/PokemonInfo';

const PokemonList = (props) => {
  const { pokemon } = props;
  return(
    <div>
      <ul>
        {
          pokemon.results && pokemon.results.map(element => (<PokemonInfo url={element.url} />))
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pokemon: state.pokemon
})

export default connect(mapStateToProps)(PokemonList);