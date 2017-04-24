import React, { Component } from 'react';
import './styles/navigation-menu.css';

export default class NavigationMenu extends Component
{
  handleClick(e, selectedPage)
  {
    const { getSelectedPage = ()=>{} } = this.props;

    const selectedMenuItems = [...document.querySelectorAll('div.src-sections-navigation-menu--menuItem')];

    if(selectedMenuItems.some(item => item.className === "src-sections-navigation-menu--menuItem src-sections-navigation-menu--menuItemClicked"))
    {
      selectedMenuItems.map(item => item.className = "src-sections-navigation-menu--menuItem");

      e.target.className = "src-sections-navigation-menu--menuItem src-sections-navigation-menu--menuItemClicked";
    }
    else
    {
      e.target.className = "src-sections-navigation-menu--menuItem src-sections-navigation-menu--menuItemClicked";
    }

    getSelectedPage(selectedPage);
  }

  renderMenuItems(item, index)
  {
    const menuClass = item.selectedPage === "home" ? "src-sections-navigation-menu--menuItem src-sections-navigation-menu--menuItemClicked" : "src-sections-navigation-menu--menuItem";

    return (
      <div key={index} className={menuClass} onClick={(e)=>{this.handleClick(e, item.selectedPage)}}>
        {item.title}
      </div>
    );
  }

  render()
  {
    const menuItems = [
      { title: "Home", selectedPage: "home" },
      { title: "Project Documentation", selectedPage: "projectDocs" },
      { title: "E-Portfolio Links", selectedPage: "ePortfolio" }
    ];

    return (
      <div className="src-sections-navigation-menu--container">

        <div className="src-sections-navigation-menu--logo">Alorian Web Solutions</div>

        <div className="src-sections-navigation-menu--menu">
          { menuItems.map((item, index) => this.renderMenuItems(item, index)) }
        </div>

      </div>
    );
  }
}
