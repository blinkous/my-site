import React, { Component } from 'react';
import '../css/navbar.css';
import favicon from '../images/favicon.png';

export default class NavBar extends Component {
  state = {  }
  render() { 
    return (
      <div className="myNavbar">
        <img src={favicon} alt="Logo" id="myLogo" />
        <ul>
          <a href="#diamonds-svg"><li>Home</li></a>
          <a href="#ProgrammerAnchor"><li>Programmer</li></a>
          <a href="#DesignerAnchor"><li>Designer</li></a>
          <a href="#CrafterAnchor"><li>Crafter</li></a>
        </ul>
      </div>
    );
  }
}