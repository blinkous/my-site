import React, { Component } from 'react';
import './css/App.css';
import Diamonds from './components/Diamonds';
import Confetti from './components/confetti';

export default class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>  
        <Diamonds/>
        <div className="confetti-home">
          <Confetti id="confetti-1"/>
        </div>
      </React.Fragment>
    );
  }
}
