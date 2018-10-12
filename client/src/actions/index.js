import {SEARCH_CATEGORY, SEARCH, FETCH_RECIPE, FETCH_USER} from './types';
import {API_KEY} from '../config/key';
import axios from 'axios';

export const changeCategory = (category) => dispatch => {
  switch(category){
    case 'ingredients':
      dispatch({type: SEARCH_CATEGORY.INGREDIENTS, payload: 'ingredients'});
      break;
    case 'keyword':
      dispatch({type: SEARCH_CATEGORY.KEYWORD, payload: 'keyword'});
      break;
    default:
      dispatch({type: SEARCH_CATEGORY.KEYWORD, payload: 'keyword'});
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

export const searchByIngredients = (text) => async dispatch => {
  const response = await axios({
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients',
    method: 'get',
    params: {
      fillIngredients: true,
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
  dispatch({type: SEARCH, payload: response.data});
}

export const searchByKeyword = (text) => async dispatch => {
  const response = await axios({
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search',
    method: 'get',
    params: {
      instructionsRequired: true,
      query: text,
      limitLicense: false,
      number: 5,
    },
    headers: {
      'X-Mashape-Key': API_KEY,
      'Accept': "application/json"
    }
  });
  dispatch({type: SEARCH, payload: response.data.results});
}

export const fetchUser = () => async dispatch => {
  const response = await axios.get('/api/current_user');
  dispatch({type: FETCH_USER, payload: response.data});
}

export const handleSave = (id) => async dispatch => {
  const response = await axios.post('/api/save', {id});
  dispatch({type: FETCH_USER, payload: response.data});
}
