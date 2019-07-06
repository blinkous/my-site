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
            projTitle="Cassiopeia"
            coverImage="https://camo.githubusercontent.com/6cd0c969f69ad5329729efd750ab72032e3b22cc/68747470733a2f2f692e696d6775722e636f6d2f535435637672552e676966"
            imgAlt="Cassiopeia"
            date="May 2019"
            githubLink="https://github.com/cassiopeia0329/Cassiopeia"
          >
            <p className="proj-desc">Created an iOS app with a team that allows users to upload artwork and interested buyers to post offers on items. This was the final project for the CodePath iOS Bootcamp</p>
            <ul className="stackList">
              <li key="1">Swift</li>
              <li key="2">Xcode</li>
              <li key="3">CocoaPods</li>
              <li key="4">Heroku Parse Server</li>
            </ul>
          </Card>
          <Card 
            projType="web"
            projTitle="Pinterest"
            coverImage="https://camo.githubusercontent.com/93a1f36be39ef3602eeb70dccf49c6d18bfdea6b/68747470733a2f2f692e696d6775722e636f6d2f7933526336434b2e676966"
            imgAlt="Pinterest"
            date="May 2019"
            githubLink="https://github.com/pinterest-duo/Pinterest"
          >
            <p className="proj-desc">Recreated the Pinterest website in collaboration with a peer. Was responsible for replicating the pinning, create board and home feed.</p>
            <ul className="stackList">
              <li key="1">HTML</li>
              <li key="2">CSS</li>
              <li key="3">Bootstrap</li>
              <li key="4">JavaScript</li>
              <li key="5">jQuery</li>
              <li key="6">PHP</li>
              <li key="7">MySQL</li>
            </ul>
          </Card>
          <Card 
            projType="web"
            projTitle="Pinterest"
            coverImage=""
            imgAlt="Parstagram"
            date="Mar. 2019"
            githubLink=""
          >
            <p className="proj-desc">Created an iOS app with a team that allows users to upload artwork and interested buyers to post offers on items. This was the final project for the CodePath iOS Bootcamp</p>
            <ul className="stackList">
              <li key="1">Swift</li>
              <li key="2">Xcode</li>
              <li key="3">CocoaPods</li>
              <li key="4">Heroku Parse Server</li>
            </ul>
          </Card>
          <Card 
            projType="mobile"
            projTitle="Parstagram"
            coverImage="https://camo.githubusercontent.com/c6cb8f871b71626e974b9bb1e849a0425da69819/68747470733a2f2f692e696d6775722e636f6d2f6530346e4735432e676966"
            imgAlt="Parstagram"
            date="Mar. 2019"
            githubLink="https://github.com/blinkous/Parstagram"
          >
            <p className="proj-desc">Created a mock Instagram app that enables users to create an account, upload photos, add comments and view a feed of photos on the home screen. The app utilizes custom tableview cells and flow navigation.</p>
            <ul className="stackList">
              <li key="1">Swift</li>
              <li key="2">CocoaPods</li>
              <li key="3">Heroku Parse Server</li>
            </ul>
          </Card>
          <Card 
            projType="web"
            projTitle="Pinterest"
            coverImage=""
            imgAlt="Parstagram"
            date="Mar. 2019"
            githubLink=""
          >
            <p className="proj-desc">Created an iOS app with a team that allows users to upload artwork and interested buyers to post offers on items. This was the final project for the CodePath iOS Bootcamp</p>
            <ul className="stackList">
              <li key="1">Swift</li>
              <li key="2">Xcode</li>
              <li key="3">CocoaPods</li>
              <li key="4">Heroku Parse Server</li>
            </ul>
          </Card>
          <Card 
            projType="web"
            projTitle="Pinterest"
            coverImage=""
            imgAlt="Parstagram"
            date="Mar. 2019"
            githubLink=""
          >
            <p className="proj-desc">Created an iOS app with a team that allows users to upload artwork and interested buyers to post offers on items. This was the final project for the CodePath iOS Bootcamp</p>
            <ul className="stackList">
              <li key="1">Swift</li>
              <li key="2">Xcode</li>
              <li key="3">CocoaPods</li>
              <li key="4">Heroku Parse Server</li>
            </ul>
          </Card>
          
        </BiggerBubble>
      </div>
    );
  }
}