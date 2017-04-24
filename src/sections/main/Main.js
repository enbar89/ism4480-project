import React, { Component } from 'react';
import './styles/main.css';
import Home from '../../components/home/Home';
import Resume from '../../components/resume/Resume';

export default class Main extends Component
{
  pageSelector(selectedPage)
  {
    switch(selectedPage)
    {
      case "home": return <Home />;
      case "2": return <div>2</div>;
      case "3": return <div>3</div>;
      case "4": return <div>4</div>;
      case "5": return <div>5</div>;
      case "ePortfolio": return <Resume />;
    }
  }

  render()
  {
    const { selectedPage } = this.props;

    return (
    <div className="src-sections-main--container">

      <div className="src-sections-main--body">
        { this.pageSelector(selectedPage) }
      </div>

    </div>
    );
  }
}