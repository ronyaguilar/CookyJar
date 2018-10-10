import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../actions';
import "./styles/Header.css";

class Header extends Component {
  renderLogin() {
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return (<a className='btn btn-dark' href='/auth/google'>Login with Google</a>);
      default:
        return (
          <div className='dropdown'>
            <button className='btn btn-dark'>Hello {this.props.auth.name} <i class="fas fa-caret-down"></i> </button>
            <div className='dropdown-content'>
              // TODO: Add Saved Recipes Page
              <Link to='#' className=''>View Saved Recipes</Link>
              // TODO: Fix Logout
              <Link to='/api/logout' className=''>Logout</Link>
            </div>
          </div>);
    }
  }

  render(){
    return(
      <header className="header">
        <h1 className="title"><a href='/'>Cooky Jar</a></h1>
        <div className='header-auth'>
            {this.renderLogin()}
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    auth : state.auth
  });
}

export default connect(mapStateToProps)(Header);
