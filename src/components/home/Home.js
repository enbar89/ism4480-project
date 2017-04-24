import React, { Component } from 'react';
import './styles/home.css';

export default class Home extends Component
{
  render()
  {
    return (
      <div className="src-components-home--container">

        <div className="src-components-home--banner">

          <div className="src-components-home--bannerLogo">
            <i className="fa fa-tablet" />
            <i className="fa fa-desktop" />
            <i className="fa fa-mobile" />
          </div>

          <div className="src-components-home--bannerText">
            Professional Web Development Services
          </div>

        </div>

        <div className="src-components-home--body">

          <div className="src-components-home--bodyRow">
            <div className="src-components-home--bodyRowIcon">
              <i className="fa fa-camera-retro" />
            </div>
            <div className="src-components-home--bodyRowIcon">
              <i className="fa fa-tablet" />
              <i className="fa fa-desktop" />
              <i className="fa fa-mobile" />
            </div>
            <div className="src-components-home--bodyRowIcon">
              <i className="fa fa-rocket" />
            </div>
          </div>

          <div className="src-components-home--bodyRow">
            <div className="src-components-home--bodyRowHeader">
              Design
            </div>
            <div className="src-components-home--bodyRowHeader">
              Development
            </div>
            <div className="src-components-home--bodyRowHeader">
              Launch
            </div>
          </div>

          <div className="src-components-home--bodyRow">
            <div className="src-components-home--bodyRowItem">
              Custom-designed websites that will attract your customers.
            </div>
            <div className="src-components-home--bodyRowItem">
              Fully featured development for desktop, tablet, and mobile platforms.
            </div>
            <div className="src-components-home--bodyRowItem">
              Professional hosting services and expert support for the future.
            </div>
          </div>

        </div>

      </div>
    );
  }
}