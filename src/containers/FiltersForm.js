import React, { useState } from 'react';
import types from '../utilities/types';

const FiltersForm = () => {
  const [pokeName, setPokeName] = useState(null);
  const [pokeType, setPokeType] = useState('All');

  return(
    <div>
      <div>
        <input type="text" />
        <button>Submit</button>
      </div>
      <div>
        <select>
          {types.map(type => (<option key={type} value={type}>{type}</option>))}
        </select>
      </div>
    </div>
  )
}

export default FiltersForm;
