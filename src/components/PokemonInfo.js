import React, { useState } from 'react';
import PropTypes from 'prop-types';
import pokemonAPIModule from '../API/PokemonAPI';
import styles from '../style.module.css';

const PokemonInfo = (props) => {
  const { url } = props;
  const [pokeInfo, setPokeInfo] = useState(null);
  pokemonAPIModule.setAPIInfo(setPokeInfo, url);
  const pokI = pokeInfo ? pokeInfo.game_indices[pokeInfo.game_indices.length - 1].game_index : null;
  const name = pokeInfo ? pokeInfo.name.charAt(0).toUpperCase().concat(pokeInfo.name.slice(1)) : '';
  return (
    <div className={`${styles.dFlex} 
      ${styles.alignItemsCenter}
      ${styles.justifyContentBetween}
      ${styles.pokeContainer}`}
    >
      <div className={`${styles.dFlex} 
        ${styles.alignItemsCenter}
        ${styles.pokeRed}
        ${styles.justifyContentCenter}`}
      >
        {pokeInfo && (
          <img
            className={`${styles.pokeListSprite}`}
            src={pokeInfo.sprites.front_default}
            alt={pokeInfo.name}
          />
        )}
        {pokeInfo && <div className={`${styles.heigthFitContent}`}>{pokI}</div>}
      </div>
      {pokeInfo && <div className={`${styles.pokeName}`}>{name}</div>}
    </div>
  );
};

PokemonInfo.propTypes = {
  url: PropTypes.string.isRequired,
};

export default PokemonInfo;
