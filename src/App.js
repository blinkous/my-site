import React, { Component } from 'react';
import './css/App.css';
import Diamonds from './components/Diamonds';
import Confetti from './components/confetti';
import DiamondsWithConfetti from './components/DiamondsWithConfetti';

export default class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>  
        <h1 className="my-name">Sara Dhani</h1>
        {/* <DiamondsWithConfetti /> */}
        <Diamonds/>
        <div className="confetti-home">
          <Confetti id="confetti-1"/>
        </div>
      </React.Fragment>
    );
  }
}
