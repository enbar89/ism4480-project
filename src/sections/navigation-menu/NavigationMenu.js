import React, { Component } from 'react';
import './styles/navigation-menu.css';

export default class NavigationMenu extends Component
{
  render()
  {
    return (
      <div className="src-sections-navigation-menu--container">

        <div className="src-sections-navigation-menu--logo">Alorian Web Solutions</div>

        <div className="src-sections-navigation-menu--menu">
          <div className="src-sections-navigation-menu--menuItem">Menu Item 1</div>
          <div className="src-sections-navigation-menu--menuItem">Menu Item 2</div>
          <div className="src-sections-navigation-menu--menuItem">Menu Item 3</div>
          <div className="src-sections-navigation-menu--menuItem">Menu Item 4</div>
          <div className="src-sections-navigation-menu--menuItem">Menu Item 5</div>
          <div className="src-sections-navigation-menu--menuItem">Menu Item 6</div>
        </div>

      </div>
    );
  }
}
