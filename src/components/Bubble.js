import React, { Component } from 'react';
import '../css/bubble.css';

class Bubble extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="bubble" id={this.props.myID}>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}
 
export default Bubble;