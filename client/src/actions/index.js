import {SEARCH_CATEGORY, SEARCH, FETCH_RECIPE} from './types';
import {API_KEY} from '../config/key';
import axios from 'axios';

export const changeCategory = (category) => dispatch => {
  switch(category){
    case 'ingredient':
      dispatch({type: SEARCH_CATEGORY.INGREDIENT, payload: 'ingredient'});
      break;
    case 'cuisine':
      dispatch({type: SEARCH_CATEGORY.CUISINE, payload: 'cuisine'});
      break;
    default:
      dispatch({type: SEARCH_CATEGORY.INGREDIENT, payload: 'ingredient'});
  }
}

export const fetchRecipe = (id) => async dispatch => {
  const response = await axios({
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/informationBulk',
    method: 'get',
    params: {
      ids: id,
      includeNutrition: false
    },
    headers: {
      'X-Mashape-Key': API_KEY,
      'Accept': 'application/json'
    }
  });
  dispatch({type: FETCH_RECIPE, payload: response.data});
}

export const searchByIngredient = (text) => async dispatch => {
  const response = await axios({
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients',
    method: 'get',
    params: {
      fillIngredients: false,
      ingredients: text,
      limitLicense: false,
      number: 5,
      ranking: 1
    },
    headers: {
      'X-Mashape-Key': API_KEY,
      'Accept': 'application/json'
    }
  });
  console.log(response.data);
  dispatch({type: SEARCH, payload: response.data});
}

export const searchByCuisine = (text) => async dispatch => {
  const response = await axios({
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search',
    method: 'get',
    params: {
      instructionsRequired: true,
      cuisine: text,
      limitLicense: false,
      number: 5,
    },
    headers: {
      'X-Mashape-Key': API_KEY,
      'Accept': "application/json"
    }
  });
  console.log(response.data.results);
  dispatch({type: SEARCH, payload: response.data.results});
}
