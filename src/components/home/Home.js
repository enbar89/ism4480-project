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
            <div className="src-components-home--bodyRowItem">
              <i className="fa fa-desktop" />
            </div>
            <div className="src-components-home--bodyRowItem">
              <i className="fa fa-mobile" />
            </div>
            <div className="src-components-home--bodyRowItem">
              <i className="fa fa-tablet" />
            </div>
          </div>

          <div className="src-components-home--bodyRow">
            <div className="src-components-home--bodyRowItem">
              Desktop
            </div>
            <div className="src-components-home--bodyRowItem">
              Mobile
            </div>
            <div className="src-components-home--bodyRowItem">
              Tablet
            </div>
          </div>

        </div>

      </div>
    );
  }
}