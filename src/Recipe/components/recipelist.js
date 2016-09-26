import React from 'react';
import { connect } from 'react-redux';
import Recipe from './recipe';

function RecipeList({ recipes = [] }) {
  return (
    <div>
      <ul key="recipes">
      {
        recipes.map(recipe =>
          <Recipe recipe={recipe} ingredients={recipe.ingredients}/>
        )
      }
      </ul>
    </div>

  );
}

function mapStateToProps(state){
  const recipes = state.recipes;
  return {
    recipes
  }
}

export default connect(mapStateToProps)(RecipeList);