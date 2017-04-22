import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/root.css';
// import Header from '../header/Header';
import NavigationMenu from '../navigation-menu/NavigationMenu';
import Main from '../main/Main';
// import Footer from '../footer/Footer';

class Root extends Component
{
  render()
  {
    return (
      <div className="src-sections-root--container">
        <header className="src-sections-root--header">Header</header>

        <div className="src-sections-root--flexContainer">

          <div className="src-sections-root--navMenu">
            <NavigationMenu />
          </div>

          <div className="src-sections-root--main">
            <Main />
          </div>
  
        </div>

        <footer className="src-sections-root--footer">Footer</footer>
      </div>
    );
  }
}

export default connect(null, null)(Root);