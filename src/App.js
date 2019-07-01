import React, { Component } from 'react';
import './css/App.css';
import Diamonds from './components/Diamonds';
import Confetti from './components/confetti';

export default class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>  
        <h1>hello</h1>
        <Diamonds/>
        <Diamonds/>
        <h1>hello</h1>
        <Confetti/>
        <h1>hello</h1>
      </React.Fragment>
    );
  }
}
