import React, { Component } from 'react';
import './styles/main.css';
import Home from '../../components/home/Home';
import Resume from '../../components/e-portfolio/ePortfolio';
import ProjectDocuments from '../../components/project-documents/ProjectDocuments';

export default class Main extends Component
{
  pageSelector(selectedPage)
  {
    switch(selectedPage)
    {
      case "home": return <Home />;
      case "projectDocs": return <ProjectDocuments />;
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