import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/root.css';
import NavigationMenu from '../navigation-menu/NavigationMenu';
import Main from '../main/Main';

class Root extends Component
{
  constructor(props)
  {
    super(props);

    this.state = { selectedPage: 'home' }
  }

  getSelectedPage(selectedPage)
  {
    this.setState({ selectedPage });
  }

  render()
  {
    const { selectedPage } = this.state;

    return (
      <div className="src-sections-root--outerContainer">

        <div className="src-sections-root--navMenu">
          <NavigationMenu getSelectedPage={this.getSelectedPage.bind(this)} />
        </div>

        <div className="src-sections-root--bodyContainer">
          <Main selectedPage={selectedPage} />
        </div>

      </div>
    );
  }
}

export default connect(null, null)(Root);