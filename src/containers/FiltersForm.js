import React from 'react';
import PropTypes from 'prop-types';
import types from '../utilities/types';

const FiltersForm = (props) => {
  const { handleChange } = props;
  return (
    <div>
      <div>
        <select onChange={handleChange}>
          <option key="null" value={null}>All</option>
          {types.map((type) => (<option key={type} value={type}>{type}</option>))}
        </select>
        <button type="button">Submit</button>
      </div>
    </div>
  );
};

FiltersForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default FiltersForm;
