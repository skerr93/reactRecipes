import React from 'react';

function Ingredient({ ingredient = {} }) {
  return <li key={ingredient.name}>{ingredient.name}</li>;
}

export default Ingredient;