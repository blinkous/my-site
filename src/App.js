import React, { Component } from 'react';
import './css/App.css';
import Diamonds from './components/Diamonds';
import Confetti from './components/confetti';
import MyName from './components/MyName';
import Bubble from './components/Bubble';

export default class App extends Component {
  // centralizing color control for name and diamond elements
  state = { 
    name: {
      // startColor: "red",
      // stopColor: "blue",
      startColor: "#7c8ccf",
      stopColor: "#ac99c7",
    },
    diamonds: {
      outerMostColor: "#c7d2ff",
      outerColorSec: "#d1d2ff",
      innerColorSec: "#d7d4ff",
      innerMostColor: "#f3ebff"
    }
  };

  render() { 
    return ( 
      <React.Fragment>  
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

        <div className="myName">
          <MyName 
            startColor={this.state.name.startColor}
            stopColor={this.state.name.stopColor}
          />
          <div id="white-name">
            <MyName />
          </div>
        </div>
        
        <div className="titleBubbles">
          <Bubble title="Programmer" myID="bubble1"/>
          <Bubble title="Designer" myID="bubble2"/>
          <Bubble title="Crafter" myID="bubble3"/>
        </div>
      </React.Fragment>
    );
  }
}
