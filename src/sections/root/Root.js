import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/root.css';
import NavigationMenu from '../navigation-menu/NavigationMenu';
import Main from '../main/Main';

class Root extends Component
{
  render()
  {
    return (
      <div className="src-sections-root--outerContainer">

        <div className="src-sections-root--navMenu">
          <NavigationMenu />
        </div>

        <div className="src-sections-root--bodyContainer">
          <Main />
        </div>

      </div>
    );
  }
}

export default connect(null, null)(Root);