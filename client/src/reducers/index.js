import {category, search} from './searchReducer';
import {recipe} from './recipeReducer';
import authReducer from './authReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  category,
  auth: authReducer,
  result: search,
  current_recipe: recipe
});
