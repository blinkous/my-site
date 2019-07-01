import React, { Component } from 'react';
import './css/App.css';
import Diamonds from './components/Diamonds';

export default class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <Diamonds id="diamonds-left"/>
        <Diamonds id="diamonds-right"/>
      </React.Fragment>
    );
  }
}
