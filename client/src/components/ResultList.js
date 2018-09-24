import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './styles/ResultList.css';
import * as actions from '../actions';

class ResultList extends Component {

  render(){
    return (
      <div className='search-results'>
        {
          this.props.results.map(recipe =>
              <div key={recipe.id} className='card' style={{width: '240px'}}>
                <img className='card-img-top' alt={recipe.title} src={'https://spoonacular.com/recipeImages/' + recipe.id + '-240x150.jpg'} height='150px' width='240px'/>
                <div className='card-body'>
                  <h5 className='card-title'>{recipe.title}</h5>
                  <p className='card-text'>Servings: {recipe.servings}</p>
                  <p className='card-text'>Ready in {recipe.readyInMinutes} minutes</p>
                  <Link to={`recipe/${recipe.id}`} className='btn btn-primary recipe-btn'>View Recipe</Link>
                </div>
              </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {results: state.result}
}

export default connect(mapStateToProps, actions)(ResultList);
