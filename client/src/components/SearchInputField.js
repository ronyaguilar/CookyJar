import React, {Component} from 'react';

class SearchInputField extends Component {

  render(){
    return(
      <div className='input-group mb-3 search-input fill'>
        <input type='text' onChange={this.props.handleChange} className='form-control' placeholder={this.props.category} aria-label='Recipe search' value={this.props.value}/>
        <div className='input-group-append'>
          <button className='btn btn-secondary' type='submit' id='search-button'>Search</button>
        </div>
      </div>
    );
  }
}

export default SearchInputField
