import React, { Component } from 'react';
import '../css/footer.css';
import GitHub_Logo_Black from '../images/GitHub-logo-black.png';
import LinkedIn_Black from '../images/linkedin_black.png';
// import GitHub_Logo_White from '../images/GitHub-logo-white.png';
// import LinkedIn_White from '../images/linkedin_white.png';
import smiley from '../images/smiling-emoji.png'

export default class MyFooter extends Component {
  render() {
    return(
      <footer className="myFooter">
        <p>
          Thank you for visiting my site
          <img className="smiley" src={smiley} alt=":)"/>
        </p>
        <a href="https://www.linkedin.com/in/sara-dhani/" target="_blank" rel="noopener noreferrer"><p className="contact_me">Connect with me on LinkedIn</p></a>
        <a href="https://github.com/blinkous" target="_blank" rel="noopener noreferrer" >
          <img className="gitHub" src={GitHub_Logo_Black} alt="GitHub" title="Checkout my GitHub"/></a>
        <a href="https://www.linkedin.com/in/sara-dhani/" target="_blank" rel="noopener noreferrer" >
          <img className="linkedin" src={LinkedIn_Black} alt="LinkedIn" title="Connect on LinkedIn"/></a>
      </footer>
    );
  }
}