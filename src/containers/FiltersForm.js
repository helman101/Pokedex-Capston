import React from 'react';
import PropTypes from 'prop-types';
import types from '../utilities/types';
import styles from '../style.module.css';

const FiltersForm = (props) => {
  const { handleChange, onNextClick, onPreviousClick } = props;
  return (
    <div>
      <div className={`${styles.dFlex} ${styles.justifyContentCenter}`}>
        <select className={`${styles.filter} ${styles.button}`} onChange={handleChange}>
          <option key="null" value={null}>All</option>
          {types.map((type) => (<option key={type} value={type}>{type}</option>))}
        </select>
      </div>
      <div>
        <button className={`${styles.pokeButtons} ${styles.button}`} onClick={onPreviousClick} type="button">Previus</button>
        <button className={`${styles.pokeButtons} ${styles.button}`} onClick={onNextClick} type="button">Next</button>
      </div>
    </div>
  );
};

FiltersForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  onPreviousClick: PropTypes.func.isRequired,
};

export default FiltersForm;
