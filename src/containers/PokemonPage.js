import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from '../style.module.css';

const PokemonPage = (props) => {
  const { pokemon } = props;
  return (
    <div>
      <div>
        <Link to="/">Back</Link>
      </div>
      <div>
        <img
          className={`${styles.pokePageSprite}`}
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </div>
      <div>
        <div>
          <div>{pokemon.id}</div>
          <div>{pokemon.name}</div>
        </div>
        <div>
          <h2>Types</h2>
          {pokemon.types.map((element) => (<div key={element.type.name}>{element.type.name}</div>))}
        </div>
        <div>
          <h2>Abilities</h2>
          {pokemon.abilities.map((element) => (
            <div key={element.ability.name}>{element.ability.name}</div>
          ))}
        </div>
      </div>
      <div>
        <h2>Stats</h2>
        {pokemon.stats.map((element) => (
          <div key={element.stat.name}>
            <span>{element.stat.name.concat(': ')}</span>
            <span>{element.base_stat}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pokemon: state.currentPokemon,
});

PokemonPage.propTypes = {
  pokemon: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(PokemonPage);
