import { combineReducers } from 'redux';
import recipeReducer from './Recipe/reducer';

export default combineReducers({
  recipes: recipeReducer
})