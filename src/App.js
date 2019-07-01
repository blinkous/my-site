import React, { Component } from 'react';
import './css/App.css';
import Diamonds from './components/Diamonds';
import Confetti from './components/confetti';
import MyName from './components/MyName';

export default class App extends Component {
  // centralizing color control
  state = { 
    name: {
      startColor: "#7c8ccf",
      stopColor: "#ac99c7",
    },
    diamonds: {
      outerMostColor: "#c7d2ff",
      outerColorSec: "#d1d2ff",
      innerColorSec: "#d7d4ff",
      innerMostColor: "#ecdeff"
    }
  };
  
  constructor(props) {
    super(props);
    console.log('app constructor', this.props);
    // this.state = this.props.something; // in the constructor, you use = to set the state
  }

  render() { 
    return ( 
      <React.Fragment>  
        <div className="myName">
          <MyName 
            startColor={this.state.name.startColor}
            stopColor={this.state.name.stopColor}
          />
          <div id="white-name">
            <MyName />
          </div>
        </div>
        <div className="myDiamonds">
          <Diamonds
            outerMostColor={this.state.diamonds.outerMostColor}
            outerColorSec={this.state.diamonds.outerColorSec}
            innerColorSec={this.state.diamonds.innerColorSec}
            innerMostColor={this.state.diamonds.innerMostColor}
          />
        </div>
        <div className="confetti-home">
          <Confetti/>
        </div>
      </React.Fragment>
    );
  }
}
