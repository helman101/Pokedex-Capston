const pokeIndex = (pokeInfo) => {
  let pokI = null;
  let name = null;

  if (pokeInfo.id > 99) {
    pokI = 'Nº '.concat(pokeInfo.id);
  } else if (pokeInfo.id > 9) {
    pokI = 'Nº 0'.concat(pokeInfo.id);
  } else {
    pokI = 'Nº 00'.concat(pokeInfo.id);
  }
  name = pokeInfo.name.charAt(0).toUpperCase().concat(pokeInfo.name.slice(1));

  return { pokI, name };
};

export default pokeIndex;
