import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import * as actions from '../actions';
import './styles/App.css';

import Header from "./Header";
import SearchContainer from "./SearchContainer";
import RecipeContainer from "./RecipeContainer";

class App extends Component {

  componentDidMount(){
    this.props.fetchUser();
  }

  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={SearchContainer}/>
            <Route path='/recipe/:id' component={RecipeContainer}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
