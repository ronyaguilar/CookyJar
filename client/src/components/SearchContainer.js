import React, {Component} from 'react';

import SearchForm from './SearchForm';
import ResultList from './ResultList';

class SearchContainer extends Component {

  render(){
    return (
      <div className='search-container'>
        <SearchForm />
        <ResultList />
      </div>
    );
  }
}
export default SearchContainer;
