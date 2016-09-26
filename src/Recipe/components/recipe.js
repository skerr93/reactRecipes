import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Ingredient from './ingredient';
import * as actions from '../actions';

function Recipe({ recipe = {}, ingredients, onAdd}) {
  let ingredientName;
  console.log(recipe);
  return (
    <li key = {recipe.name}>
        {recipe.name}
        <input type="text" ref={(ref) => ingredientName = ref} />
        <button onClick={() => {onAdd(ingredientName.value, recipe.id); ingredientName.value=""}} type="button">Add Ingredient</button>
        <ul key = {recipe.name}>
          {
            ingredients.map(ingredient =>
              <Ingredient ingredient={ingredient} />
            )
          }
        </ul>
    </li>
  );
}

// function mapStateToProps(state, ownProps){
//   const recipe = retrieveRecipe(state.recipes, ownProps.recipeId);
//   console.log("MSTP Recipe, ", recipe);

//   return {
//     recipe
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    onAdd: (ingredientName, recipeId) => dispatch(actions.addIngredient(ingredientName, recipeId))
  }
}

// function retrieveRecipe(recipes, id){
//   console.log(recipes, id);
//   return recipes.filter((obj) => {
//     if(id === obj.id){
//       return obj;
//     }
//   })[0];
// }

export default connect(null, mapDispatchToProps)(Recipe);