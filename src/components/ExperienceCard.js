import React, { Component } from 'react';
import '../css/Card.css';
import Card from './Card';

export default class ExperienceCard extends Component {
  state = {  }
  render() { 
    return ( 
      <Card
        myClass={`experienceCard ${ this.props.cardCat }`} 
        myID={this.props.myID}
      >
        <div className="titleBar">
          <h4 className="project-title">{this.props.expTitle}</h4>
          <p className="date">{this.props.date}</p>
        </div>
        {this.props.children}
      </Card>
    );
  }
}