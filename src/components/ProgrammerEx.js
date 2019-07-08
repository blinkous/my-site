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
          begSkills="React, JavaScript, jQuery, MySQL, SQL, PHP, Bootstrap, Python, Git, GitHub, Java, Swift, Xcode, Android Studio"
          medSkillsTitle="Intermediate"
          medSkills="HTML, CSS, C++"
          skillsTitle="Concepts"
          skills="Relational Databases, Object-Oriented Programming, UI/UX Design, Usability Principles"
        >
          {/* Creating 2 columns for display when screen size is more than 1024 */}
          <div className="leftProjs">
            <Card 
              projType="web"
              projTitle="Personal Website"
              coverImage="https://i.imgur.com/zimYuWS.gif"
              imgAlt="My Website"
              date="Jun. 2019 - Present"
              githubLink="#Home"
              videoDisplay="displayNone"
            >
              <p className="proj-desc">Currently designing and developing a responsive personal website that uses custom SVGs and CSS animations. This React app is currently deployed using GitHub Pages.</p>
              <ul className="stackList">
                <li key="5">React.js</li>
                <li key="1">HTML</li>
                <li key="2">CSS</li>
                <li key="3">JavaScript</li>
                <li key="4">jQuery</li>
                <li key="6">GitHub Pages</li>
              </ul>
            </Card>
            <Card 
              projType="web"
              projTitle="Pixel Coloring"
              coverImage="https://camo.githubusercontent.com/d8f8b38edb74d6cb36d46d6f83f6634c8fe1dd97/68747470733a2f2f692e696d6775722e636f6d2f4465317568454b2e676966"
              imgAlt="Pixel Coloring"
              date="Jun. 2019"
              githubLink="https://github.com/blinkous/Coloring-Tables"
              videoDisplay="displayNone"
            >
              <p className="proj-desc">Created a web app that allows users to add and remove rows and columns, color and erase cells.</p>
              <ul className="stackList">
                <li key="1">HTML</li>
                <li key="2">CSS</li>
                <li key="3">JavaScript</li>
                <li key="4">jQuery</li>
              </ul>
            </Card>
            <Card 
            projType="web"
            projTitle="Pinterest"
            coverImage="https://camo.githubusercontent.com/93a1f36be39ef3602eeb70dccf49c6d18bfdea6b/68747470733a2f2f692e696d6775722e636f6d2f7933526336434b2e676966"
            imgAlt="Pinterest"
            date="May 2019"
            githubLink="https://github.com/pinterest-duo/Pinterest"
            videoDisplay="displayNone"
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
              projType="mobile"
              projTitle="Parstagram"
              coverImage="https://camo.githubusercontent.com/c6cb8f871b71626e974b9bb1e849a0425da69819/68747470733a2f2f692e696d6775722e636f6d2f6530346e4735432e676966"
              imgAlt="Parstagram"
              date="Mar. 2019"
              githubLink="https://github.com/blinkous/Parstagram"
              videoDisplay="displayNone"
            >
              <p className="proj-desc">Created a mock Instagram app that enables users to create an account, upload photos, add comments and view a feed of photos on the home screen. The app utilizes custom tableview cells and flow navigation.</p>
              <ul className="stackList">
                <li key="1">Swift</li>
                <li key="2">CocoaPods</li>
                <li key="3">Heroku Parse Server</li>
              </ul>
            </Card>
            <Card 
              projType="mobile"
              projTitle="Flix"
              coverImage="https://camo.githubusercontent.com/aae68486b51ebe5da2f9d71beffc37b00b4abf56/68747470733a2f2f692e696d6775722e636f6d2f626230394a46632e676966"
              imgAlt="Flix"
              date="Feb. 2019"
              githubLink="https://github.com/blinkous/flix"
              videoDisplay="displayNone"
            >
              <p className="proj-desc">Created a mock Flix movie app using Swift, Xcode and The Movie Database API. The app implements a tableview to create a scrolling list of movies that users can select to view more information, tab bar navigation and uses CocoaPods.</p>
              <ul className="stackList">
                <li key="1">Swift</li>
                <li key="2">Xcode</li>
                <li key="3">CocoaPods</li>
                <li key="4">The Movie Database API</li>
              </ul>
            </Card>
            <Card 
              projType="mobile"
              projTitle="Voyage"
              coverVideo="https://i.imgur.com/31S7Cly.mp4"
              vidAlt="Voyage"
              date="Nov. 2018 - Dec. 2018"
              githubLink="https://github.com/blinkous/voyage"
              imageDisplay="displayNone"
            >
              <p className="proj-desc">Collaborated with a classmate to develop the frontend for a mock travel site for our final project.</p>
              <ul className="stackList">
                <li key="1">HTML</li>
                <li key="2">CSS</li>
                <li key="3">jQuery</li>
                <li key="4">JavaScript</li>
              </ul>
            </Card>
          </div>
          <div className="rightProjs">
            <Card 
              projType="mobile"
              projTitle="Cassiopeia"
              coverImage="https://camo.githubusercontent.com/6cd0c969f69ad5329729efd750ab72032e3b22cc/68747470733a2f2f692e696d6775722e636f6d2f535435637672552e676966"
              imgAlt="Cassiopeia"
              date="May 2019"
              githubLink="https://github.com/cassiopeia0329/Cassiopeia"
              videoDisplay="displayNone"
            >
              <p className="proj-desc">Created an iOS app with a team that allows users to upload artwork and interested buyers to post offers on items. This was the final project for the CodePath iOS Bootcamp.</p>
              <ul className="stackList">
                <li key="1">Swift</li>
                <li key="2">Xcode</li>
                <li key="3">CocoaPods</li>
                <li key="4">Heroku Parse Server</li>
              </ul>
            </Card>
            <Card 
              projType="web"
              projTitle="Water, Temps, and CO2"
              coverImage="https://camo.githubusercontent.com/6a91b1aeaeafb01a840771acd871e1cc00b7666e/68747470733a2f2f692e696d6775722e636f6d2f366d75743764752e676966"
              imgAlt="Water, Temps, and CO2"
              date="May 2019"
              githubLink="https://github.com/blinkous/CIS3120-Water-Temps-CO2"
              videoDisplay="displayNone"
            >
              <p className="proj-desc">Used Python and Pandas to analyze datasets on NYC water consumption, temperatures and CO2 emissions featuring an interactive web interface.</p>
              <ul className="stackList">
                <li key="1">Python</li>
                <li key="3">Pandas</li>
                <li key="4">HTML</li>
                <li key="5">JavaScript</li>
                <li key="6">CSS</li>
                <li key="2">iPython</li>
              </ul>
            </Card>
            <Card 
              projType="mobile"
              projTitle="Tweeter"
              coverImage="https://camo.githubusercontent.com/838f9fde29f50253729576e53db683a8a7e21c63/68747470733a2f2f692e696d6775722e636f6d2f524734693033612e676966"
              imgAlt="Tweeter"
              date="Mar. 2019"
              githubLink="https://github.com/blinkous/tweeter"
              videoDisplay="displayNone"
            >
              <p className="proj-desc">Used the Twitter API to create a Twitter clone iOS app featuring login, tweeting, “favoriting,” retweeting and home feed functionalities. The app uses a tableview to create an “infinite” list of tweets.</p>
              <ul className="stackList">
                <li key="1">Swift</li>
                <li key="2">Xcode</li>
                <li key="4">Twitter API</li>
                <li key="3">CocoaPods</li>
              </ul>
            </Card>
            <Card 
              projType="mobile"
              projTitle="Tips"
              coverImage="https://camo.githubusercontent.com/911f803d5cea1a1c332e77c44a4e74c20e09e305/68747470733a2f2f692e696d6775722e636f6d2f734c59304d30492e676966"
              imgAlt="Tips"
              date="Jan. 2019"
              githubLink="https://github.com/blinkous/tips"
              videoDisplay="displayNone"
            >
              <p className="proj-desc">Created an iOS tip calculator app for admission to an iOS course using Swift and Xcode. The app features tip calculation, a choice of tip percentages, split the bill options and a light/dark mode.</p>
              <ul className="stackList">
                <li key="1">Swift</li>
                <li key="2">Xcode</li>
              </ul>
            </Card>
            <Card 
              projType="mobile"
              projTitle="IDUNNO"
              coverImage="https://camo.githubusercontent.com/38bc69b673014fe15e45872d88e855d910cfae66/68747470733a2f2f692e696d6775722e636f6d2f635733594f52412e676966"
              imgAlt="IDUNNO"
              date="Jun. 2018 - Oct. 2018"
              githubLink="https://github.com/blinkous/idunno"
              videoDisplay="displayNone"
            >
              <p className="proj-desc">Created an Android App using Android Studio, Android XML, and Java that tests various features of Android as I learned them while also featuring a paint activity.</p>
              <ul className="stackList">
                <li key="1">Android Studio</li>
                <li key="2">Java</li>
                <li key="3">Android XML</li>
                <li key="4">Android SDK</li>
              </ul>
            </Card> 
            <Card 
              projType="desktop"
              projTitle="Checkers"
              coverImage="https://camo.githubusercontent.com/7b25c899ff7832ebec4933270e775953e562c124/68747470733a2f2f73697465732e676f6f676c652e636f6d2f736974652f6363323031366d68632f5f2f727372632f313436383836393531363533352f686f6d652f636865636b6572732f53637265656e25323053686f74253230323031362d30312d3231253230617425323031312e31322e3031253230414d2e706e673f6865696768743d3139392677696474683d323030"
              imgAlt="Checkers"
              date="Jan. 2016"
              githubLink="https://github.com/blinkous/checkers-2016"
              videoDisplay="displayNone"
            >
              <p className="proj-desc">Created a Python app that is an interactive checkers board for my final project for a Computing Concepts pilot course. The app allows users to choose colors and settings in the iPython shell before playing.</p>
              <ul className="stackList">
                <li key="1">Python</li>
                <li key="2">vPython Library</li>
                <li key="3">iPython</li>
              </ul>
            </Card> 
          </div>

          {/* One column display for screen sizes smaller than 1024 */}
          <div className="cardContainer">
            <Card 
              projType="web"
              projTitle="Personal Website"
              coverImage="https://i.imgur.com/zimYuWS.gif"
              imgAlt="My Website"
              date="Jun. 2019 - Present"
              githubLink="https://github.com/blinkous/my-site"
              videoDisplay="displayNone"
            >
              <p className="proj-desc">Currently designing and developing a responsive personal website that uses custom SVGs and CSS animations. This React app is currently deployed using GitHub Pages.</p>
              <ul className="stackList">
                <li key="5">React.js</li>
                <li key="1">HTML</li>
                <li key="2">CSS</li>
                <li key="3">JavaScript</li>
                <li key="4">jQuery</li>
              </ul>
            </Card>
            <Card 
              projType="web"
              projTitle="Pixel Coloring"
              coverImage="https://camo.githubusercontent.com/d8f8b38edb74d6cb36d46d6f83f6634c8fe1dd97/68747470733a2f2f692e696d6775722e636f6d2f4465317568454b2e676966"
              imgAlt="Pixel Coloring"
              date="Jun. 2019"
              githubLink="https://github.com/blinkous/Coloring-Tables"
              videoDisplay="displayNone"
            >
              <p className="proj-desc">Created a web app that allows users to add and remove rows and columns, color and erase cells.</p>
              <ul className="stackList">
                <li key="1">HTML</li>
                <li key="2">CSS</li>
                <li key="3">JavaScript</li>
                <li key="4">jQuery</li>
              </ul>
            </Card>
            <Card 
              projType="mobile"
              projTitle="Cassiopeia"
              coverImage="https://camo.githubusercontent.com/6cd0c969f69ad5329729efd750ab72032e3b22cc/68747470733a2f2f692e696d6775722e636f6d2f535435637672552e676966"
              imgAlt="Cassiopeia"
              date="May 2019"
              githubLink="https://github.com/cassiopeia0329/Cassiopeia"
              videoDisplay="displayNone"
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
              videoDisplay="displayNone"
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
              projTitle="Water, Temps, and CO2"
              coverImage="https://camo.githubusercontent.com/6a91b1aeaeafb01a840771acd871e1cc00b7666e/68747470733a2f2f692e696d6775722e636f6d2f366d75743764752e676966"
              imgAlt="Water, Temps, and CO2"
              date="May 2019"
              githubLink="https://github.com/blinkous/CIS3120-Water-Temps-CO2"
              videoDisplay="displayNone"
            >
              <p className="proj-desc">Used Python and Pandas to analyze datasets on NYC water consumption, temperatures and CO2 emissions featuring an interactive web interface.</p>
              <ul className="stackList">
                <li key="1">Python</li>
                <li key="3">Pandas</li>
                <li key="4">HTML</li>
                <li key="5">JavaScript</li>
                <li key="6">CSS</li>
                <li key="2">iPython</li>
              </ul>
            </Card>
            <Card 
              projType="mobile"
              projTitle="Parstagram"
              coverImage="https://camo.githubusercontent.com/c6cb8f871b71626e974b9bb1e849a0425da69819/68747470733a2f2f692e696d6775722e636f6d2f6530346e4735432e676966"
              imgAlt="Parstagram"
              date="Mar. 2019"
              githubLink="https://github.com/blinkous/Parstagram"
              videoDisplay="displayNone"
            >
              <p className="proj-desc">Created a mock Instagram app that enables users to create an account, upload photos, add comments and view a feed of photos on the home screen. The app utilizes custom tableview cells and flow navigation.</p>
              <ul className="stackList">
                <li key="1">Swift</li>
                <li key="2">CocoaPods</li>
                <li key="3">Heroku Parse Server</li>
              </ul>
            </Card>
            <Card 
              projType="mobile"
              projTitle="Tweeter"
              coverImage="https://camo.githubusercontent.com/838f9fde29f50253729576e53db683a8a7e21c63/68747470733a2f2f692e696d6775722e636f6d2f524734693033612e676966"
              imgAlt="Tweeter"
              date="Mar. 2019"
              githubLink="https://github.com/blinkous/tweeter"
              videoDisplay="displayNone"
            >
              <p className="proj-desc">Used the Twitter API to create a Twitter clone iOS app featuring login, tweeting, “favoriting,” retweeting and home feed functionalities. The app uses a tableview to create an “infinite” list of tweets.</p>
              <ul className="stackList">
                <li key="1">Swift</li>
                <li key="2">Xcode</li>
                <li key="4">Twitter API</li>
                <li key="3">CocoaPods</li>
              </ul>
            </Card>
            <Card 
              projType="mobile"
              projTitle="Flix"
              coverImage="https://camo.githubusercontent.com/aae68486b51ebe5da2f9d71beffc37b00b4abf56/68747470733a2f2f692e696d6775722e636f6d2f626230394a46632e676966"
              imgAlt="Flix"
              date="Feb. 2019"
              githubLink="https://github.com/blinkous/flix"
              videoDisplay="displayNone"
            >
              <p className="proj-desc">Created a mock Flix movie app using Swift, Xcode and The Movie Database API. The app implements a tableview to create a scrolling list of movies that users can select to view more information, tab bar navigation and uses CocoaPods.</p>
              <ul className="stackList">
                <li key="1">Swift</li>
                <li key="2">Xcode</li>
                <li key="3">CocoaPods</li>
                <li key="4">The Movie Database API</li>
              </ul>
            </Card>
            <Card 
              projType="mobile"
              projTitle="Tips"
              coverImage="https://camo.githubusercontent.com/911f803d5cea1a1c332e77c44a4e74c20e09e305/68747470733a2f2f692e696d6775722e636f6d2f734c59304d30492e676966"
              imgAlt="Tips"
              date="Jan. 2019"
              githubLink="https://github.com/blinkous/tips"
              videoDisplay="displayNone"
            >
              <p className="proj-desc">Created an iOS tip calculator app for admission to an iOS course using Swift and Xcode. The app features tip calculation, a choice of tip percentages, split the bill options and a light/dark mode.</p>
              <ul className="stackList">
                <li key="1">Swift</li>
                <li key="2">Xcode</li>
              </ul>
            </Card>
            <Card 
              projType="mobile"
              projTitle="Voyage"
              coverVideo="https://i.imgur.com/31S7Cly.mp4"
              vidAlt="Voyage"
              date="Nov. 2018 - Dec. 2018"
              githubLink="https://github.com/blinkous/voyage"
              imageDisplay="displayNone"
            >
              <p className="proj-desc">Collaborated with a classmate to develop the frontend for a mock travel site for our final project.</p>
              <ul className="stackList">
                <li key="1">HTML</li>
                <li key="2">CSS</li>
                <li key="3">jQuery</li>
                <li key="4">JavaScript</li>
              </ul>
            </Card>
            <Card 
              projType="mobile"
              projTitle="IDUNNO"
              coverImage="https://camo.githubusercontent.com/38bc69b673014fe15e45872d88e855d910cfae66/68747470733a2f2f692e696d6775722e636f6d2f635733594f52412e676966"
              imgAlt="IDUNNO"
              date="Jun. 2018 - Oct. 2018"
              githubLink="https://github.com/blinkous/idunno"
              videoDisplay="displayNone"
            >
              <p className="proj-desc">Created an Android App using Android Studio, Android XML, and Java that tests various features of Android as I learned them while also featuring a paint activity.</p>
              <ul className="stackList">
                <li key="1">Android Studio</li>
                <li key="2">Java</li>
                <li key="3">Android XML</li>
                <li key="4">Android SDK</li>
              </ul>
            </Card>
            <Card 
              projType="desktop"
              projTitle="Checkers"
              coverImage="https://camo.githubusercontent.com/7b25c899ff7832ebec4933270e775953e562c124/68747470733a2f2f73697465732e676f6f676c652e636f6d2f736974652f6363323031366d68632f5f2f727372632f313436383836393531363533352f686f6d652f636865636b6572732f53637265656e25323053686f74253230323031362d30312d3231253230617425323031312e31322e3031253230414d2e706e673f6865696768743d3139392677696474683d323030"
              imgAlt="Checkers"
              date="Jan. 2016"
              githubLink="https://github.com/blinkous/checkers-2016"
              videoDisplay="displayNone"
            >
              <p className="proj-desc">Created a Python app that is an interactive checkers board for my final project for a Computing Concepts pilot course. The app allows users to choose colors and settings in the iPython shell before playing.</p>
              <ul className="stackList">
                <li key="1">Python</li>
                <li key="2">vPython Library</li>
                <li key="3">iPython</li>
              </ul>
            </Card> 
          </div>
        </BiggerBubble>
      </div>
    );
  }
}