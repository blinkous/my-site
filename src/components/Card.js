import React, { Component } from 'react';
import '../css/Card.css';

export default class Card extends Component{
  render(){
    return(
      <div className={`card ${ this.props.myClass}`} id={this.props.myID}>
        {this.props.children}
      </div>
    );
  }
}