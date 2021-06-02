import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PokemonInfo from '../components/PokemonInfo';
import styles from '../style.module.css';
import FiltersForm from './FiltersForm';
import changeFilterAction from '../actions/type';

const PokemonList = (props) => {
  const { pokemon } = props;

  const handleFilterChange = (e) => {
    const type = e.target.value;
    props.dispatch(changeFilterAction(type));
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
        <FiltersForm handleChange={handleFilterChange} />
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
