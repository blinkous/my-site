import React, { Component } from 'react';
import '../css/ProgrammerEx.css';
import BiggerBubble from './BiggerBubble';
import Card from './Card';

export default class ProgrammerEx extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="ProgrammerEx" id={this.props.myID}>
        <BiggerBubble
          myID="Programmer"
          myClass="experience"
          myLittleBubbleID="ProgrammerBubble"
          begSkillsTitle="Learning"
          begSkills="React, JavaScript, jQuery, MySQL, SQL, PHP, Bootstrap, Python, Git, Java, Swift, Xcode, Android Studio,"
          medSkillsTitle="Intermediate"
          medSkills="HTML, CSS, React, JavaScript, jQuery, MySQL, SQL, PHP, Bootstrap, Python, C++, "
        >
          <Card 
            projType="mobile"
            projTitle="Parstagram"
            coverImage="https://camo.githubusercontent.com/c6cb8f871b71626e974b9bb1e849a0425da69819/68747470733a2f2f692e696d6775722e636f6d2f6530346e4735432e676966"
            imgAlt="Parstagram"
            date="Mar. 2019"
            githubLink="https://github.com/blinkous/Parstagram"
          >
            <p className="proj-desc">Created a mock Instagram app using Swift, Xcode and a parse server. The app enables users to create an account, upload photos, add comments and view a feed of photos on the home screen. The app utilizes custom tableview cells, flow navigation and CocoaPods.</p>
            <ul className="stackList">
              <li key="1">Swift</li>
              <li key="2">CocoaPods</li>
              <li key="3">Heroku Parse Server</li>
            </ul>
            
          </Card>
        </BiggerBubble>
      </div>
    );
  }
}