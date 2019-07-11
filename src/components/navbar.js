import React, { Component } from 'react';
import '../css/navbar.css';
import favicon from '../images/favicon.png';

export default class NavBar extends Component {
  state = {  }
  render() { 
    return (
      // <div className="myNavbar">
      //   <img src={favicon} alt="Logo" id="myLogo" />
      //   <ul>
      //     <a href="#diamonds-svg"><li>Home</li></a>
      //     <a href="#ProgrammerAnchor"><li>Programmer</li></a>
      //     <a href="#DesignerAnchor"><li>Designer</li></a>
      //     <a href="#CrafterAnchor"><li>Crafter</li></a>
      //   </ul>
      // </div>
      <nav className="navbar navbar-expand-lg navbar-light myNavbar">
        <a className="navbar-brand" href="#diamonds-svg"><img src={favicon} alt="Logo" id="myLogo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#diamonds-svg">Home<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ProgrammerAnchor">Programmer</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#DesignerAnchor">Designer</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#CrafterAnchor">Crafter</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}