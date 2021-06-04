import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from '../style.module.css';
import pokeIndex from '../utilities/helpers';

const PokemonPage = (props) => {
  const { pokemon } = props;

  const { pokI } = pokeIndex(pokemon);

  return (
    <div className={styles.marginTop10}>
      <div className={styles.backLink}>
        <Link to="/">Back</Link>
      </div>
      <div className={`${styles.dFlex} ${styles.flexWrap}`}>
        <div className={`${styles.width40}`}>
          <img
            className={`${styles.pokePageSprite} ${styles.height100}`}
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        </div>
        <div className={`${styles.width40} ${styles.height100} ${styles.rigthContainer}`}>
          <div
            className={
              `${styles.dFlex}
              ${styles.justifyContentAround}
              ${styles.idName}
              ${styles.alignItemsCenter}`
            }
          >
            <div>{pokI}</div>
            <div>{pokemon.name.toUpperCase()}</div>
          </div>
          <div
            className={
              `${styles.dFlex}
              ${styles.types}
              ${styles.justifyContentCenter}
              ${styles.alignItemsCenter}`
            }
          >
            Types:
            {pokemon.types.map((element) => (
              <div
                className={styles.type}
                key={element.type.name}
              >
                {element.type.name.toUpperCase()}
              </div>
            ))}
          </div>
          <div
            className={
              `${styles.dFlex}
              ${styles.abilities}
              ${styles.justifyContentCenter}
              ${styles.alignItemsCenter}`
            }
          >
            Abilities:
            {pokemon.abilities.map((element) => (
              <div
                className={styles.ability}
                key={element.ability.name}
              >
                {element.ability.name.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.stats}>
          <div className={`${styles.dFlex} ${styles.flexWrap}`}>
            {pokemon.stats.map((element) => (
              <div
                className={`${styles.stat} ${styles.dFlex} ${styles.justifyContentBetween}`}
                key={element.stat.name}
              >
                <span>{element.stat.name.concat(': ').toUpperCase()}</span>
                <span>{element.base_stat}</span>
              </div>
            ))}
          </div>
        </div>
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
