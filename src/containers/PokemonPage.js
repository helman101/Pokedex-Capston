import React from 'react';
import { useLocation } from 'react-router-dom';

const PokemonPage = () => {
  const data = useLocation();
  const { pokemon } = data;

  return (
    <div>{pokemon.name}</div>
  );
};

export default PokemonPage;
