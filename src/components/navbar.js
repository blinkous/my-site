import React, { Component } from 'react';
import '../css/navbar.css';
import favicon from '../images/favicon.png';

export default class NavBar extends Component {
  state = {  }
  render() { 
    return (
      <div className="navbar">
        <img src={favicon} alt="Logo" />
        <ul>
          <a href="#diamonds-svg"><li>Home</li></a>
          <a href="#Programmer"><li>Programmer</li></a>
          <a href="#Designer"><li>Designer</li></a>
          <a href="#Crafter"><li>Crafter</li></a>
        </ul>
      </div>
    );
  }
}