import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './styles/App.css';

import Header from "./Header";
import SearchForm from "./SearchForm";

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={SearchForm}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
