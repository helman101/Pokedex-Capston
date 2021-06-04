import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PokemonInfo from '../components/PokemonInfo';
import styles from '../style.module.css';
import FiltersForm from './FiltersForm';
import changeCurrentPokemon from '../actions/current';
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
    if (pokemon.next) {
      props.dispatch(nextPokeList);
    }
  };

  const handlePrevious = () => {
    if (pokemon.previous) {
      props.dispatch(previousPokeList);
    }
  };

  const handleLink = (poke) => () => {
    props.dispatch(changeCurrentPokemon(poke));
  };

  return (
    <div className={`${styles.dFlex} ${styles.marginTop10} ${styles.pokedex}`}>
      <div className={`${styles.pokeList}`}>
        {
          pokemon.results
          && pokemon.results.map((element) => (
            <PokemonInfo key={element.name} url={element.url} handleLink={handleLink} />))
        }
      </div>
      <div
        className={`
          ${styles.form} 
          ${styles.dFlex}
          ${styles.flexColumn}
          ${styles.alignItemsCenter}
          ${styles.justifyContentCenter}
        `}
      >
        <img className={styles.pokemonLogo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon logo" />
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
