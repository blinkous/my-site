import React, {Component} from 'react';
import '../css/confetti.css';

export default class Confetti extends Component{
  // Properties for the circle
  circle = {
    radius1: 10,
    startingY: -100,
    gradientInner: "#ffffff",
    gradientOuter: "#ffffff00",
    gradientDarkInner: "#00000099",
    gradientDarkOuter: "#00000000",
    width: 1000,
    height: 1000
  };
  render() { 
  return (
    <React.Fragment>
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
    width={this.circle.width} height={this.circle.height} viewBox="0 0 1000 800" id="circle-svg">
      {/* Defining gradients to be used as fill for the circles */}
      <defs>
        <radialGradient id="circleGlowGradient">
          <stop offset="0%" stopColor={this.circle.gradientInner}/>
          <stop offset="100%" stopColor={this.circle.gradientOuter}/>
        </radialGradient>
        <radialGradient id="circleDarkGradient">
          <stop offset="0%" stopColor={this.circle.gradientDarkInner}/>
          <stop offset="100%" stopColor={this.circle.gradientDarkOuter}/>
        </radialGradient>
      </defs>
      {/* Drawing a series of circles that span the top that will mimic falling dots when animated, each circle varies in x position and has a specific id that is used to specify an animation delay */}
      <circle cx="0" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-0"></circle>
      <circle cx="20" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-1"></circle>
      <circle cx="50" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-2"></circle>
      <circle cx="80" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-3"></circle>
      <circle cx="100" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-4"></circle>
      <circle cx="140" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-5"></circle>
      <circle cx="170" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-6"></circle>
      <circle cx="200" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-7"></circle>
      <circle cx="90" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-8"></circle>
      <circle cx="100" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-9"></circle>
      <circle cx="-100" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-10"></circle>
      <circle cx="-10" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-11"></circle>
      <circle cx="-20" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-12"></circle>
      <circle cx="40" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-13"></circle>
      <circle cx="300" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-14"></circle>
      <circle cx="250" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-15"></circle>
      <circle cx="-90" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-16"></circle>
      <circle cx="90" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-17"></circle>
      <circle cx="220" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-18"></circle>
      <circle cx="140" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-19"></circle>
      <circle cx="110" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-20"></circle>
      
      <circle cx="400" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-21"></circle>
      <circle cx="500" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-22"></circle>
      <circle cx="380" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-23"></circle>
      <circle cx="320" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-24"></circle>
      <circle cx="380" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-25"></circle>
      <circle cx="470" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-26"></circle>
      <circle cx="520" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-27"></circle>
      <circle cx="490" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-28"></circle>
      <circle cx="510" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-29"></circle>
      <circle cx="320" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-30"></circle>
      <circle cx="625" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-31"></circle>
      <circle cx="529" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-32"></circle>
      <circle cx="440" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-33"></circle>
      <circle cx="380" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-34"></circle>
      <circle cx="290" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-35"></circle>
      <circle cx="450" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-36"></circle>
      <circle cx="590" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-37"></circle>
      <circle cx="620" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-38"></circle>
      <circle cx="640" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-39"></circle>
      <circle cx="310" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-40"></circle>

      <circle cx="500" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-41"></circle>
      <circle cx="560" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-42"></circle>
      <circle cx="680" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-43"></circle>
      <circle cx="620" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-44"></circle>
      <circle cx="780" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-45"></circle>
      <circle cx="770" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-46"></circle>
      <circle cx="620" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-47"></circle>
      <circle cx="590" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-48"></circle>
      <circle cx="610" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-49"></circle>
      <circle cx="720" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-50"></circle>
      <circle cx="825" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-51"></circle>
      <circle cx="729" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-52"></circle>
      <circle cx="640" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-53"></circle>
      <circle cx="580" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-54"></circle>
      <circle cx="890" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-55"></circle>
      <circle cx="750" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-56"></circle>
      <circle cx="690" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-57"></circle>
      <circle cx="720" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-58"></circle>
      <circle cx="840" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-59"></circle>
      <circle cx="810" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-60"></circle>

      <circle cx="800" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-61"></circle>
      <circle cx="960" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-62"></circle>
      <circle cx="980" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-63"></circle>
      <circle cx="820" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-64"></circle>
      <circle cx="980" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-65"></circle>
      <circle cx="1095" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-66"></circle>
      <circle cx="920" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-67"></circle>
      <circle cx="890" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-68"></circle>
      <circle cx="1010" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-69"></circle>
      <circle cx="820" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-70"></circle>
      <circle cx="925" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-71"></circle>
      <circle cx="829" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-72"></circle>
      <circle cx="940" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-73"></circle>
      <circle cx="1000" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-74"></circle>
      <circle cx="1040" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-75"></circle>
      <circle cx="850" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-76"></circle>
      <circle cx="1090" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-77"></circle>
      <circle cx="720" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-78"></circle>
      <circle cx="840" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-79"></circle>
      <circle cx="910" cy={this.circle.startingY} r={this.circle.radius1} id="confetti-80"></circle>
    </svg>
    </React.Fragment>
  );
}
}