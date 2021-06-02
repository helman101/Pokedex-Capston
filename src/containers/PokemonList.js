import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PokemonInfo from '../components/PokemonInfo';
import styles from '../style.module.css';

const PokemonList = (props) => {
  const { pokemon } = props;
  return (
    <div className={`${styles.pokeList}`}>
      <ul>
        {
          pokemon.results
          && pokemon.results.map((element) => (
            <PokemonInfo key={element.name} url={element.url} />))
        }
      </ul>
    </div>
  );
};

PokemonList.propTypes = {
  pokemon: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  pokemon: state.pokemon,
});

export default connect(mapStateToProps)(PokemonList);
