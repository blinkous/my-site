import React, { Component } from 'react';
import './css/App.css';
import Diamonds from './components/Diamonds';
import Confetti from './components/confetti';
import MyName from './components/MyName';
import Bubble from './components/Bubble';
import BiggerBubble from './components/BiggerBubble';
// import anim from './components/anim.js'

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
        <div className="myDiamonds mycontainer">
          <Diamonds
            outerMostColor={this.state.diamonds.outerMostColor}
            outerColorSec={this.state.diamonds.outerColorSec}
            innerColorSec={this.state.diamonds.innerColorSec}
            innerMostColor={this.state.diamonds.innerMostColor}
          />
        </div>

        <div className="confetti-home mycontainer">
          <Confetti/>
        </div>

        <div className="myName mycontainer">
          <MyName 
            startColor={this.state.name.startColor}
            stopColor={this.state.name.stopColor}
          />
          <div id="white-name">
            <MyName />
          </div>
        </div>
        
        <div className="titleBubbles mycontainer">
          <a href="#Programmer">
            <Bubble 
            title="Programmer" 
            myID="bubble1"
            myStyle="red"
          /></a>
          <a href="#Designer">
            <Bubble 
            title="Designer" 
            myID="bubble2"
          /></a>
          <a href="#Crafter">
            <Bubble 
            title="Crafter" 
            myID="bubble3"
          /></a>
        </div>
        <div className="experience mycontainer">
          <BiggerBubble
            myID="Programmer"
            myClass="experience"
            />
        </div>
      </React.Fragment>
    );
  }
}
