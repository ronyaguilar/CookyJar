import React, {Component} from 'react';
import './styles/SearchForm.css';

class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchValue: ""
    };
  }

  clickHandler(e) {
    e.preventDefault();
    console.log(e);
    let oldButton = document.querySelector('.active');
    oldButton.className = 'btn btn-secondary';
    e.target.className = 'btn btn-secondary active';
  }

  render(){
    return(
      <div className='search-form'>
        <h1 className='intro'>Hungry?</h1>
        <div className='btn-group btn-group-sm tabs' role='group' aria-label='Filter Tabs'>
          <button onClick={this.clickHandler} type='button' className='btn btn-secondary active'>Search By Name</button>
          <button onClick={this.clickHandler} type='button' className='btn btn-secondary'>Search By Ingredient</button>
          <button onClick={this.clickHandler} type='button' className='btn btn-secondary'>Search By Category</button>
        </div>
        <div className='input-group mb-3 search-input fill'>
          <input type='text' className='form-control' placeholder='Search for recipes!' aria-label='Recipe search'/>
          <div className='input-group-append'>
            <button className='btn btn-secondary' type='button' id='search-button'>Search</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchForm;
