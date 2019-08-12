import React, { Component } from 'react';
import '../css/navbar.css';
import favicon from '../images/favicon.png';
import GitHub_Logo from '../images/GitHub-logo-black.png';
import LinkedIn from '../images/linkedin_black.png';
// import GitHub_Logo from '../images/GitHub-logo-white.png';
// import LinkedIn from '../images/linkedin_white.png';


export default class NavBar extends Component {
  state = {  }
  render() { 
    return (
      // <div className="myNavbar">
      //   <img src={favicon} alt="Logo" id="myLogo" />
      //   <ul>
      //     <a href="#Home"><li>Home</li></a>
      //     <a href="#ProgrammerAnchor"><li>Programmer</li></a>
      //     <a href="#DesignerAnchor"><li>Designer</li></a>
      //     <a href="#CrafterAnchor"><li>Crafter</li></a>
      //   </ul>
      // </div>
      <nav className="navbar navbar-expand-lg navbar-light myNavbar">
        <a className="navbar-brand" href="#Home"><img src={favicon} alt="Logo" id="myLogo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#Home">Home<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Programmer">Programmer</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Designer">Designer</a>
            </li>
            <li className="nav-item img">
              <a href="https://github.com/blinkous" target="_blank" rel="noopener noreferrer" title="GitHub Link">
                <img className="gitHub nav-link" src={GitHub_Logo} alt="GitHub"/></a>
            </li>
            <li className="nav-item img">
              <a href="https://www.linkedin.com/in/sara-dhani/" target="_blank" rel="noopener noreferrer" title="LinkedIn Link">
                <img className="linkedin nav-link" src={LinkedIn} alt="LinkedIn"/></a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#CrafterAnchor">Crafter</a>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}