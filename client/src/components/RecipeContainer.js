import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

import './styles/RecipeContainer.css';
import {IngredientList} from './IngredientList';
import InstructionList from './InstructionList';

class RecipeContainer extends Component {
  constructor(props){
    super(props);
    this.props.fetchRecipe(this.props.match.params.id);
  }

  render(){
    return(
      <div className='recipe-container'>
        <h1 className='recipe-title'>{this.props.recipe.title}</h1>
        <div className='recipe-image'>
          <img alt={this.props.recipe.title} src={'https://spoonacular.com/recipeImages/' + this.props.recipe.id + '-556x370.jpg'}/>
        </div>
        <IngredientList ingredients={this.props.recipe.extendedIngredients}/>
        <InstructionList instructions={this.props.recipe.instructions}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    recipe: state.current_recipe
  });
}

export default connect(mapStateToProps, actions)(RecipeContainer);
