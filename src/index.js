import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './stores/configureStore';
import { RecipeList } from './Recipe/components';
import { setRecipes, addIngredient } from './Recipe/actions';

const recipes = [
  {
    id: 1,
    name: 'Meatballs',
    ingredients: [
      {name: "Ham"},
      {name: "Cheese"}
    ]
  },
  {
    id: 2,
    name: 'Kyle\'s Lunch',
    ingredients: [
      {name: "Beef"},
      {name: "Starch"}
    ]
  },
  {
    id: 3,
    name: 'Fudge',
    ingredients: [
      {name: "Food"}
    ]
  }
];

const store = configureStore();
store.dispatch(setRecipes(recipes));

//TODO: Remove this and add it to the Add Ingredient button with a text field for input

ReactDOM.render(
  <Provider store={store}>
    <RecipeList />
  </Provider>,
  document.getElementById('app')
);