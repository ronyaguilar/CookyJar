import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class SearchButtonGroup extends Component {

  clickHandler(e) {
    e.preventDefault();
    let oldButton = document.querySelector('.active');
    oldButton.className = 'btn btn-secondary';
    e.target.className = 'btn btn-secondary active';
  }

  render(){
    return(
      <div className='btn-group btn-group-sm tabs' role='group' aria-label='Filter Tabs'>
        <button onClick={(e) => {
          this.clickHandler(e);
          this.props.changeCategory('keyword');
        }} type='button' className='btn btn-secondary active'>Search By Keyword</button> 
        <button onClick={(e) => {
            this.clickHandler(e);
            this.props.changeCategory('ingredients');
          }
        } type='button' className='btn btn-secondary'>Search By Ingredients</button>
      </div>
    );
  }
}


export default connect(null, actions)(SearchButtonGroup);
