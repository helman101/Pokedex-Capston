import React from 'react';
import PropTypes from 'prop-types';
import types from '../utilities/types';

const FiltersForm = (props) => {
  const { handleChange, onNextClick, onPreviousClick } = props;
  return (
    <div>
      <div>
        <select onChange={handleChange}>
          <option key="null" value={null}>All</option>
          {types.map((type) => (<option key={type} value={type}>{type}</option>))}
        </select>
      </div>
      <div>
        <button onClick={onPreviousClick} type="button">Previus</button>
        <button onClick={onNextClick} type="button">Next</button>
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
