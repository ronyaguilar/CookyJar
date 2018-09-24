import {SEARCH_CATEGORY, SEARCH} from '../actions/types';

export const category = (initial="ingredients", action) => {
  switch(action.type){
    case SEARCH_CATEGORY.INGREDIENT:
      return action.payload
    case SEARCH_CATEGORY.CUISINE:
      return action.payload
    default:
      return initial
  }
}

export const search = (initial=[], action) => {
  switch(action.type){
    case SEARCH:
      return action.payload
    default:
      return initial
  }
}
