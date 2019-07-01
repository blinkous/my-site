import React, { Component } from 'react';
import './css/App.css';
import Diamonds from './components/Diamonds';
import Confetti from './components/confetti';
import MyName from './components/MyName';

export default class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>  
        {/* <h1 className="my-name">Sara Dhani</h1> */}
        <div className="myName">
          <MyName />
          <div id="white-name">
            <MyName />
          </div>
        </div>
        <div className="myDiamonds">
          <Diamonds/>
        </div>
        <div className="confetti-home">
          <Confetti/>
        </div>
      </React.Fragment>
    );
  }
}
