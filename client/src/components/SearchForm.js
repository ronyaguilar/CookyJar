import React, {Component} from 'react';
import {connect} from 'react-redux';

import './styles/SearchForm.css';

import * as actions from '../actions';
import SearchButtonGroup from './SearchButtonGroup';
import SearchInputField from './SearchInputField';

class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("Handling submit with: " + this.props.category);
    switch(this.props.category){
      case 'ingredients':
        this.props.searchByIngredient(this.state.value);
        break;
      case 'cuisine':
        this.props.searchByCuisine(this.state.value);
        break;
      default:
        break;
    }
  }

  onTextChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  render(){
    return(
      <form className='search-form' onSubmit={(e) => this.onSubmit(e)}>
        <h1 className='intro'>Hungry?</h1>
        <SearchButtonGroup />
        <SearchInputField
          category={this.props.category}
          value={this.state.value}
          handleChange={this.onTextChange}/>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {category: state.category};
}

export default connect(mapStateToProps, actions)(SearchForm);
