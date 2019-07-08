import React, { Component } from 'react';
import './css/App.css';
import Diamonds from './components/Diamonds';
import Confetti from './components/confetti';
import MyName from './components/MyName';
import Bubble from './components/Bubble';
import BiggerBubble from './components/BiggerBubble';
import ProgrammerEx from './components/ProgrammerEx';
import NavBar from './components/navbar';
import MyFooter from './components/footer';
import Card from './components/Card';
import SkillsDesc from './components/SkillsDesc';

export default class App extends Component {
  // centralizing color control for name and diamond elements
  state = { 
    name: {
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
        <NavBar />
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

        <div className="myName mycontainer" id="startchange">
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
          <div className="myAnchor" id="ProgrammerAnchor"></div>
          <ProgrammerEx
            myID="ProgrammerE"
            myClass="experience"
            myLittleBubbleID="ProgrammerBubble"
            begSkillsTitle="Learning"
            begSkills="React, JavaScript, jQuery, MySQL, SQL, PHP, Bootstrap, Python, Git, Java, Swift, Xcode, Android Studio,"
            medSkillsTitle="Intermediate"
            medSkills="HTML, CSS, C++"
            />

          <div className="myAnchor" id="DesignerAnchor"></div>
          <BiggerBubble
            myID="Designer"
            myClass="experience"
            myLittleBubbleID="DesignerBubble"
            >
            <SkillsDesc 
              descTitle="Skills"
              desc="Graphic Design, Fashion Illustration, Fashion Design, Pattern Making, Draping"
            />
              <Card myClass="designer">HELLOO</Card>
          </BiggerBubble>

          <div className="myAnchor" id="CrafterAnchor"></div>
          <BiggerBubble
            myID="Crafter"
            myClass="experience"
            myLittleBubbleID="CrafterBubble"
          />
        </div>

        <MyFooter />
      </React.Fragment>
    );
  }
}
