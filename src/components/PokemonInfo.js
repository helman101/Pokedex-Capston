import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setAPIInfo } from '../API/PokemonAPI';
import styles from '../style.module.css';
import pokeIndex from '../utilities/helpers';

const PokemonInfo = (props) => {
  const { url, handleLink } = props;
  const [pokeInfo, setPokeInfo] = useState(null);
  useEffect(() => {
    setAPIInfo(setPokeInfo, url);
  }, []);

  let pokI = '';
  let name = '';

  if (pokeInfo) {
    const result = pokeIndex(pokeInfo);
    pokI = result.pokI;
    name = result.name;
  }

  return (
    <Link
      key={pokeInfo && pokeInfo.id}
      onClick={handleLink(pokeInfo)}
      className={`${styles.textDecorationNone}`}
      to="/pokemon"
    >
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
          {pokeInfo && (
            <div
              className={`${styles.heigthFitContent}`}
            >
              {pokI}
            </div>
          )}
        </div>
        {pokeInfo && <div className={`${styles.pokeName}`}>{name}</div>}
      </div>
    </Link>
  );
};

PokemonInfo.propTypes = {
  url: PropTypes.string.isRequired,
  handleLink: PropTypes.func.isRequired,
};

export default PokemonInfo;
