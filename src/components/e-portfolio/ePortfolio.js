import React, { Component } from 'react';
import './styles/e-portfolio.css';

export default class ePortfolio extends Component
{
  render()
  {
    return (
      <div className="src-components-e-portfolio--container">

        <div className="src-components-e-portfolio--banner">

          <div className="src-components-e-portfolio--bannerLogo">
            <i className="fa fa-tablet" />
            <i className="fa fa-desktop" />
            <i className="fa fa-mobile" />
          </div>

          <div className="src-components-e-portfolio--bannerText">
            Group E-Portfolio Links
          </div>

        </div>

        <div className="src-components-e-portfolio--body">

          <div className="src-components-e-portfolio--bodyRow">
            <div className="src-components-e-portfolio--bodyRowHeader">
              <a href="https://sites.google.com/view/eric-barrier-e-portfolio/home" target="_blank">Eric Barrier</a>
            </div>
          </div>

        </div>

      </div>
    );
  }
}