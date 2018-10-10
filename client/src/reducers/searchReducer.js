import {SEARCH_CATEGORY, SEARCH} from '../actions/types';

export const category = (initial="keyword", action) => {
  switch(action.type){
    case SEARCH_CATEGORY.INGREDIENTS:
      return action.payload
    case SEARCH_CATEGORY.KEYWORD:
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
