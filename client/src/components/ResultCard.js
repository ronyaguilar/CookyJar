import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './styles/Card.css';
import * as actions from '../actions';
class ResultCard extends Component {

    render(){
      if(this.props.recipe){
        if(this.props.recipe.missedIngredients){
          return(
            <div key={this.props.recipe.id} className='card' style={{width: '240px'}}>
              <img className='card-img-top' alt={this.props.recipe.title} src={'https://spoonacular.com/recipeImages/' + this.props.recipe.id + '-240x150.jpg'} height='150px' width='240px'/>
              <div className='card-body'>
                <h5 className='card-title'>{this.props.recipe.title}</h5>
                <p className='card-text'>Ingredients Missing: </p>
                <ul>{this.props.recipe.missedIngredients.map(ingredient => <li> {ingredient.name} </li>)} </ul>
                <Link to={`recipe/${this.props.recipe.id}`} className='btn btn-primary recipe-btn'>View Recipe</Link>
                // TODO: Add responsive heart color
                <a href='#' onClick={() => this.props.handleSave(this.props.recipe.id.toString())}><i className='far fa-heart fa-2x like'></i></a>
              </div>
            </div>
          );
        }
        else if(this.props.recipe.readyInMinutes) {
          return(
            <div key={this.props.recipe.id} className='card' style={{width: '240px'}}>
              <img className='card-img-top' alt={this.props.recipe.title} src={'https://spoonacular.com/recipeImages/' + this.props.recipe.id + '-240x150.jpg'} height='150px' width='240px'/>
              <div className='card-body'>
                <h5 className='card-title'>{this.props.recipe.title}</h5>
                <p className='card-text'>Servings: {this.props.recipe.servings}</p>
                <p className='card-text'>Ready in {this.props.recipe.readyInMinutes} minutes</p>
                <Link to={`recipe/${this.props.recipe.id}`} className='btn btn-primary recipe-btn'>View Recipe</Link>
                <a href='#' onClick={() => this.props.handleSave(this.props.recipe.id)}><i className='far fa-heart fa-2x like'></i></a>
              </div>
            </div>
          );
        }
    }
    return null;
  }
}

export default connect(null, actions)(ResultCard);
