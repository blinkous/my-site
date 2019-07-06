import React, { Component } from 'react';
import '../css/Card.css';
import GitHub_Logo_Black from '../images/GitHub-logo-black.png';

export default class Card extends Component {
  state = {  }
  render() { 
    const children = React.Children.toArray(this.props.children);

    return ( 
      <div className={`myCard ${ this.props.projType }`} id={this.props.myID}>
        
        <div className="titleBar">
          <a href={this.props.githubLink} target="_blank" rel="noopener noreferrer">
            <img src={GitHub_Logo_Black} alt="Github Project Link" title={`${this.props.projTitle} on GitHub`} className="github_logo"/>
          <h4 className="project-title">{this.props.projTitle}</h4>
          </a>
          <p className="date">{this.props.date}</p>
        </div>

        <div className="cardLeft">
          <a href={this.props.githubLink} target="_blank" rel="noopener noreferrer" className={this.props.imageDisplay}>
            <img src={ this.props.coverImage } alt={this.props.imgAlt} />
          </a>

          <a href={this.props.githubLink} target="_blank" rel="noopener noreferrer" className={this.props.videoDisplay}>
            <video autoPlay muted loop className="demoVideo" alt={this.props.vidAlt}>
              <source src={this.props.coverVideo} type="video/mp4" />
            </video>
          </a>
        </div>

        <div className="cardRight">
          {children[0]}
          <h5 className="stackTitle">Tech Stack</h5>
          {children[1]}
          {/* <a href={this.props.githubLink} target="_blank"><img src={GitHub_Logo_Black} alt="Github Project Link" title={`${this.props.projTitle} on GitHub`} className="github_logo"/></a> */}
        </div>
      </div>
    );
  }
}