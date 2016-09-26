import * as actionTypes from './actionTypes';

export function setRecipes(recipes) {
  return {
    type: actionTypes.RECIPE_SET,
    recipes
  };
};

export function addIngredient(name, recipeId) {
  return {
    type: actionTypes.RECIPE_ADD_INGREDIENT,
    name,
    recipeId
  };
};