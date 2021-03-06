import React, { Component } from 'react';
import '../css/Card.css';
import GitHub_Logo_Black from '../images/GitHub-logo-black.png';
import Card from './Card';

export default class ProjectCard extends Component {
  state = {  }
  render() { 
    return ( 
      <Card
        myClass={`myProjectCard ${ this.props.projType }`} 
        myID={this.props.myID}
      >
      {/* <div className={`myProjectCard ${ this.props.projType }`} id={this.props.myID}> */}
        {/* Linking the entire top bar to the project's site */}
        <a href={this.props.githubLink} target="_blank" rel="noopener noreferrer" title={`${ this.props.projTitle} GitHub Repository`}>
          <div className="titleBar">
            <img src={GitHub_Logo_Black} alt="Github Project Link" title={`${this.props.projTitle} on GitHub`} className="github_logo"/>
            <h4 className="project-title">{this.props.projTitle}</h4>
            <p className="date">{this.props.date}</p>
          </div>
        </a>

        {/* Left side of the project card, only contains an img, but is inside a div in case more images were to be added*/}
        <div className="cardLeft">
          <a href={this.props.githubLink} target="_blank" rel="noopener noreferrer" className={this.props.imageDisplay}>
            <img src={ this.props.coverImage } alt={this.props.imgAlt} />
          </a>
        </div>

        {/* Right side of the project card */}
        <div className="cardRight">
          <p className="proj-desc">{this.props.projDesc}</p>
          <h5 className="stackTitle">Tech Stack</h5>
          {this.props.children}
        </div>
      {/* </div> */}
      </Card>
    );
  }
}