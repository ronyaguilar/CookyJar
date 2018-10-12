import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './styles/Card.css';
import * as actions from '../actions';
class ResultCard extends Component {
    constructor(props){
      super(props);
      this.state = {liked : this.isLiked()};
    }

    isLiked = () => {
      return (this.props.user.savedRecipes.indexOf(this.props.recipe.id.toString()) > -1);
    }

    handleToggle = () => {
      const toggle = this.isLiked();
      this.setState({liked: toggle});
    }

    handleLike = async () => {
      await this.props.handleSave(this.props.recipe.id);
      this.handleToggle();
    }

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
                <a href='#' onClick={this.handleLike}><i className={this.state.liked ? 'fas fa-heart fa-2x like' : 'far fa-heart fa-2x like'}></i></a>
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
                <a href='#' onClick={this.handleLike}><i className={this.state.liked ? 'fas fa-heart fa-2x like' : 'far fa-heart fa-2x like'}></i></a>
              </div>
            </div>
          );
        }
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return {user: state.auth};
}
export default connect(mapStateToProps, actions)(ResultCard);
