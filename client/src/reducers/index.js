import {category, search} from './searchReducer';
import {recipe} from './recipeReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  category,
  result: search,
  current_recipe: recipe
});
