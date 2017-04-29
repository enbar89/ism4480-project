import React, { Component } from 'react';
import './styles/e-portfolio.css';

export default class ePortfolio extends Component
{
  constructor()
  {
    super(props);

    this.state = { bodyClass: "src-components-e-portfolio--bodyHidden" }
  }

  componentDidMount()
  {
    const { bodyClass }= this.state;

    if(bodyClass === "src-components-e-portfolio--bodyHidden")
    {
      this.setState({ bodyClass: "src-components-e-portfolio--body" })
    }
  }

  render()
  {
    const { hiddenClass } = this.props;

    let bodyClass;

    if(hiddenClass)
    {
      bodyClass = "src-components-e-portfolio--bodyHidden";
    }
    else
    {
      bodyClass = "src-components-e-portfolio--body";
    }

    return (
      <div className="src-components-e-portfolio--containerHidden">

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

        <div className={bodyClass}>

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