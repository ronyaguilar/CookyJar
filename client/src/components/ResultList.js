import React, {Component} from 'react';
import {connect} from 'react-redux';

import './styles/ResultList.css';
import ResultCard from './ResultCard';

class ResultList extends Component {

  renderResults() {
    return(
      this.props.results.map(_recipe => <ResultCard key={_recipe.id} recipe={_recipe} />)
    );
  }
  render(){
    return (
      <div className='search-results'>
        { this.renderResults() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {results: state.result}
}

export default connect(mapStateToProps)(ResultList);
