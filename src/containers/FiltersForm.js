import React from 'react';
import types from '../utilities/types';

const FiltersForm = () => (
  <div>
    <div>
      <input type="text" />
      <button type="button">Submit</button>
    </div>
    <div>
      <select>
        {types.map((type) => (<option key={type} value={type}>{type}</option>))}
      </select>
    </div>
  </div>
);

export default FiltersForm;
