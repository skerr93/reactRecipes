import * as actionTypes from './actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch(action.type){
    case actionTypes.RECIPE_SET:
      return setRecipes(state, action);
    case actionTypes.RECIPE_ADD_INGREDIENT:
      return addIngredient(state, action);
    default:
      return state;
  }
}

function setRecipes(state, action) {
  const { recipes } = action; //Takes recipes OUT OF action. equivelent to doing const recipes = action.recipes
  return [ ...state, ...recipes ];
}

function addIngredient(state, action){
  const { name, recipeId } = action;
  let recipeToUpdate = retrieveRecipe(state, recipeId);
  const indexToUpdate = state.indexOf(recipeToUpdate);

  recipeToUpdate.ingredients=[...recipeToUpdate.ingredients, {name}];
  return [...state.slice(0, indexToUpdate), recipeToUpdate, ...state.slice(indexToUpdate+1)];

}

function retrieveRecipe(recipes, id){
  return recipes.filter((obj) => {
    if(id === obj.id){
      return obj;
    }
  })[0];
}