import React, { Component } from 'react';
import '../css/BiggerBubble.css';

export default class BiggerBubble extends Component {
  state = {  }
  render() { 
    const children = React.Children.toArray(this.props.children);
    return ( 
      <div className="bigger-bubble" id={this.props.myID}>
        <div className="topPortion">
          <div className="titleHolder">
            <h2 id={this.props.myLittleBubbleID}>{this.props.myID}</h2>
          </div>
          <div className="skillsHolder">
            {children[0]}
          </div>
        </div>
        {children[1]}
      </div>
    );
  }
}