import {FETCH_RECIPE} from '../actions/types';

export const recipe = (initial = {}, action) => {
  switch(action.type){
    case FETCH_RECIPE:
    const instructions = action.payload[0].instructions.split('.');
    action.payload[0].instructions = instructions;
    console.log(action.payload[0]);
      return action.payload[0];
    default:
      return initial;
  }
}
