import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setAPIInfo } from '../API/PokemonAPI';
import styles from '../style.module.css';

const PokemonInfo = (props) => {
  const { url, handleLink } = props;
  const [pokeInfo, setPokeInfo] = useState(null);
  useEffect(() => {
    setAPIInfo(setPokeInfo, url);
  }, []);
  let pokI = null;
  let name = null;

  if (pokeInfo) {
    if (pokeInfo.id > 99) {
      pokI = 'Nº '.concat(pokeInfo.id);
    } else if (pokeInfo.id > 9) {
      pokI = 'Nº 0'.concat(pokeInfo.id);
    } else {
      pokI = 'Nº 00'.concat(pokeInfo.id);
    }
    name = pokeInfo.name.charAt(0).toUpperCase().concat(pokeInfo.name.slice(1));
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
