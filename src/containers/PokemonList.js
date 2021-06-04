import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PokemonInfo from '../components/PokemonInfo';
import styles from '../style.module.css';
import FiltersForm from './FiltersForm';
import {
  searchByType,
  nextPokeList,
  firstPokemon,
  previousPokeList,
} from '../API/PokemonAPI';

const PokemonList = (props) => {
  const { pokemon } = props;

  const handleFilterChange = (e) => {
    const type = e.target.value;

    if (type !== 'All') {
      props.dispatch(searchByType(type));
    } else {
      props.dispatch(firstPokemon);
    }
  };

  const handleNext = () => {
    props.dispatch(nextPokeList);
  };

  const handlePrevious = () => {
    props.dispatch(previousPokeList);
  };

  return (
    <div className={`${styles.dFlex}`}>
      <div className={`${styles.pokeList}`}>
        {
          pokemon.results
          && pokemon.results.map((element) => (
            <PokemonInfo key={element.name} url={element.url} />))
        }
      </div>
      <div>
        <FiltersForm
          handleChange={handleFilterChange}
          onPreviousClick={handlePrevious}
          onNextClick={handleNext}
        />
      </div>
    </div>
  );
};

PokemonList.propTypes = {
  pokemon: PropTypes.instanceOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  pokemon: state.pokemon,
});

export default connect(mapStateToProps)(PokemonList);
