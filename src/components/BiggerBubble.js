import React, { Component } from 'react';
import '../css/BiggerBubble.css';
import Bubble from './Bubble';

export default class BiggerBubble extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="bigger-bubble" id={this.props.myID}>
        <Bubble title="Programmer" myID="ProgrammerBubble"/>
      </div>
    );
  }
}