import React, {Component} from 'react';
import '../css/confetti.css';

export default class Confetti extends Component{
  size = {
    radius1: 10,
    startingY: -10
  };
  render() { 
  return (
    <React.Fragment>
    {/* <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
    width="10" height="10" viewBox="0 0 10 10" id="circle-svg">
      <circle cx="5" cy="5" r="5"></circle>
    </svg> */}
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
    width="1000" height="1000" viewBox="0 0 1000 1000" id="circle-svg">
      <defs>
        <radialGradient id="circleGlowGradient">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#ffffff00"/>
        </radialGradient>
      </defs>
      <circle cx="20" cy={this.size.startingY} r={this.size.radius1} id="confetti-1"></circle>
      <circle cx="50" cy={this.size.startingY} r={this.size.radius1} id="confetti-2"></circle>
      <circle cx="80" cy={this.size.startingY} r={this.size.radius1} id="confetti-3"></circle>
      <circle cx="100" cy={this.size.startingY} r={this.size.radius1} id="confetti-4"></circle>
      <circle cx="140" cy={this.size.startingY} r={this.size.radius1} id="confetti-5"></circle>
      <circle cx="170" cy={this.size.startingY} r={this.size.radius1} id="confetti-6"></circle>
      <circle cx="200" cy={this.size.startingY} r={this.size.radius1} id="confetti-7"></circle>
      <circle cx="90" cy={this.size.startingY} r={this.size.radius1} id="confetti-8"></circle>
      <circle cx="100" cy={this.size.startingY} r={this.size.radius1} id="confetti-9"></circle>
      <circle cx="20" cy={this.size.startingY} r={this.size.radius1} id="confetti-10"></circle>
      <circle cx="25" cy={this.size.startingY} r={this.size.radius1} id="confetti-11"></circle>
      <circle cx="29" cy={this.size.startingY} r={this.size.radius1} id="confetti-12"></circle>
      <circle cx="40" cy={this.size.startingY} r={this.size.radius1} id="confetti-13"></circle>
      <circle cx="300" cy={this.size.startingY} r={this.size.radius1} id="confetti-14"></circle>
      <circle cx="250" cy={this.size.startingY} r={this.size.radius1} id="confetti-15"></circle>
      <circle cx="50" cy={this.size.startingY} r={this.size.radius1} id="confetti-16"></circle>
      <circle cx="90" cy={this.size.startingY} r={this.size.radius1} id="confetti-17"></circle>
      <circle cx="220" cy={this.size.startingY} r={this.size.radius1} id="confetti-18"></circle>
      <circle cx="140" cy={this.size.startingY} r={this.size.radius1} id="confetti-19"></circle>
      <circle cx="110" cy={this.size.startingY} r={this.size.radius1} id="confetti-20"></circle>
      
      <circle cx="400" cy={this.size.startingY} r={this.size.radius1} id="confetti-21"></circle>
      <circle cx="500" cy={this.size.startingY} r={this.size.radius1} id="confetti-22"></circle>
      <circle cx="380" cy={this.size.startingY} r={this.size.radius1} id="confetti-23"></circle>
      <circle cx="320" cy={this.size.startingY} r={this.size.radius1} id="confetti-24"></circle>
      <circle cx="380" cy={this.size.startingY} r={this.size.radius1} id="confetti-25"></circle>
      <circle cx="470" cy={this.size.startingY} r={this.size.radius1} id="confetti-26"></circle>
      <circle cx="520" cy={this.size.startingY} r={this.size.radius1} id="confetti-27"></circle>
      <circle cx="490" cy={this.size.startingY} r={this.size.radius1} id="confetti-28"></circle>
      <circle cx="510" cy={this.size.startingY} r={this.size.radius1} id="confetti-29"></circle>
      <circle cx="320" cy={this.size.startingY} r={this.size.radius1} id="confetti-30"></circle>
      <circle cx="625" cy={this.size.startingY} r={this.size.radius1} id="confetti-31"></circle>
      <circle cx="529" cy={this.size.startingY} r={this.size.radius1} id="confetti-32"></circle>
      <circle cx="440" cy={this.size.startingY} r={this.size.radius1} id="confetti-33"></circle>
      <circle cx="380" cy={this.size.startingY} r={this.size.radius1} id="confetti-34"></circle>
      <circle cx="290" cy={this.size.startingY} r={this.size.radius1} id="confetti-35"></circle>
      <circle cx="450" cy={this.size.startingY} r={this.size.radius1} id="confetti-36"></circle>
      <circle cx="590" cy={this.size.startingY} r={this.size.radius1} id="confetti-37"></circle>
      <circle cx="620" cy={this.size.startingY} r={this.size.radius1} id="confetti-38"></circle>
      <circle cx="640" cy={this.size.startingY} r={this.size.radius1} id="confetti-39"></circle>
      <circle cx="310" cy={this.size.startingY} r={this.size.radius1} id="confetti-40"></circle>

      <circle cx="400" cy={this.size.startingY} r={this.size.radius1} id="confetti-41"></circle>
      <circle cx="500" cy={this.size.startingY} r={this.size.radius1} id="confetti-42"></circle>
      <circle cx="380" cy={this.size.startingY} r={this.size.radius1} id="confetti-43"></circle>
      <circle cx="320" cy={this.size.startingY} r={this.size.radius1} id="confetti-44"></circle>
      <circle cx="380" cy={this.size.startingY} r={this.size.radius1} id="confetti-45"></circle>
      <circle cx="470" cy={this.size.startingY} r={this.size.radius1} id="confetti-46"></circle>
      <circle cx="520" cy={this.size.startingY} r={this.size.radius1} id="confetti-47"></circle>
      <circle cx="490" cy={this.size.startingY} r={this.size.radius1} id="confetti-48"></circle>
      <circle cx="510" cy={this.size.startingY} r={this.size.radius1} id="confetti-49"></circle>
      <circle cx="320" cy={this.size.startingY} r={this.size.radius1} id="confetti-50"></circle>
      <circle cx="625" cy={this.size.startingY} r={this.size.radius1} id="confetti-51"></circle>
      <circle cx="529" cy={this.size.startingY} r={this.size.radius1} id="confetti-52"></circle>
      <circle cx="440" cy={this.size.startingY} r={this.size.radius1} id="confetti-53"></circle>
      <circle cx="380" cy={this.size.startingY} r={this.size.radius1} id="confetti-54"></circle>
      <circle cx="290" cy={this.size.startingY} r={this.size.radius1} id="confetti-55"></circle>
      <circle cx="450" cy={this.size.startingY} r={this.size.radius1} id="confetti-56"></circle>
      <circle cx="590" cy={this.size.startingY} r={this.size.radius1} id="confetti-57"></circle>
      <circle cx="620" cy={this.size.startingY} r={this.size.radius1} id="confetti-58"></circle>
      <circle cx="640" cy={this.size.startingY} r={this.size.radius1} id="confetti-59"></circle>
      <circle cx="310" cy={this.size.startingY} r={this.size.radius1} id="confetti-50"></circle>
    </svg>
    </React.Fragment>
  );
}
}